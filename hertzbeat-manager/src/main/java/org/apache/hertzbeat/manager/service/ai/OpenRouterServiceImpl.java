/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hertzbeat.manager.service.ai;

import lombok.extern.slf4j.Slf4j;
import org.apache.hertzbeat.common.constants.AiConstants;
import org.apache.hertzbeat.common.constants.AiTypeEnum;
import org.apache.hertzbeat.manager.config.AiProperties;
import org.apache.hertzbeat.manager.pojo.dto.AiMessage;
import org.apache.hertzbeat.manager.pojo.dto.OpenAiRequestParamDTO;
import org.apache.hertzbeat.manager.pojo.dto.OpenAiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 * OpenRouter service
 */
@Service("OpenRouterServiceImpl")
@ConditionalOnProperty(prefix = "ai", name = "type", havingValue = "openRouter")
@Slf4j
public class OpenRouterServiceImpl implements AiService {

    @Autowired
    private AiProperties aiProperties;

    private WebClient webClient;

    @PostConstruct
    private void init() {
        this.webClient = WebClient.builder()
                .baseUrl(AiConstants.OpenRouterConstants.URL)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + aiProperties.getApiKey())
                .exchangeStrategies(ExchangeStrategies.builder()
                        .codecs(item -> item.defaultCodecs().maxInMemorySize(16 * 1024 * 1024))
                        .build())
                .build();
    }

    @Override
    public AiTypeEnum getType() {
        return AiTypeEnum.openRouter;
    }

    @Override
    public Flux<ServerSentEvent<String>> requestAi(String text) {
        checkParam(text, aiProperties.getModel(), aiProperties.getApiKey());
        OpenAiRequestParamDTO openRouterParam = OpenAiRequestParamDTO.builder()
                .model(aiProperties.getModel())
                .stream(Boolean.TRUE)
                .maxTokens(AiConstants.OpenRouterConstants.MAX_TOKENS)
                .temperature(AiConstants.OpenRouterConstants.TEMPERATURE)
                .messages(List.of(new AiMessage(AiConstants.OpenRouterConstants.REQUEST_ROLE, text)))
                .build();

        return webClient.post()
                .body(BodyInserters.fromValue(openRouterParam))
                .retrieve()
                .bodyToFlux(String.class)
                .filter(aiResponse -> !"[DONE]".equals(aiResponse))
                .map(OpenAiResponse::convertToResponse)
                .doOnError(error -> log.info("OpenRouterAiServiceImpl.requestAi exception:{}", error.getMessage()));
    }

    private void checkParam(String param, String model, String apiKey) {
        Assert.notNull(param, "text is null");
        Assert.notNull(model, "model is null");
        Assert.notNull(apiKey, "ai.api-key is null");
    }
}
