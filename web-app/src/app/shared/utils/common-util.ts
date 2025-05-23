/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Label } from '../../pojo/Label';

export function formatLabelName(label: Label): string {
  if (label.tagValue != undefined && label.tagValue.trim() != '') {
    return `${label.name}:${label.tagValue}`;
  } else {
    return label.name;
  }
}

const colors = ['blue', 'green', 'orange', 'purple', 'cyan', 'yellow', 'pink', 'lime', 'red', 'geekblue', 'volcano', 'magenta'];
export function renderLabelColor(key: string): string {
  // Hash the key to get a consistent index
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    const char = key.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

export function findDeepestSelected(nodes: any): any {
  let deepestSelectedNode = null;
  for (let node of nodes) {
    if (node._selected && (!node.children || node.children.length === 0)) {
      return node;
    }

    if (node.children) {
      const selectedChild = findDeepestSelected(node.children);
      if (selectedChild) {
        deepestSelectedNode = selectedChild;
      }
    }
  }
  return deepestSelectedNode;
}

export function generateReadableRandomString(): string {
  const adjectives = [
    'quick',
    'bright',
    'calm',
    'brave',
    'cool',
    'eager',
    'fancy',
    'gentle',
    'happy',
    'jolly',
    'kind',
    'lively',
    'merry',
    'nice',
    'proud',
    'witty',
    'zesty',
    'nifty',
    'quirky',
    'unique',
    'vivid',
    'zany',
    'zealous',
    'yummy',
    'agile',
    'bold',
    'daring',
    'fearless',
    'gleeful',
    'humble',
    'jumpy',
    'keen',
    'loyal',
    'majestic',
    'noble',
    'playful',
    'radiant',
    'spirited',
    'tenacious',
    'vibrant',
    'wise',
    'youthful',
    'zippy',
    'serene',
    'bubbly',
    'dreamy',
    'fierce',
    'graceful'
  ];

  const nouns = [
    'fox',
    'lion',
    'eagle',
    'shark',
    'whale',
    'falcon',
    'panda',
    'tiger',
    'wolf',
    'otter',
    'lynx',
    'moose',
    'dolphin',
    'bear',
    'hawk',
    'zebra',
    'giraffe',
    'koala',
    'lemur',
    'lemming',
    'cheetah',
    'dragon',
    'owl',
    'rhino',
    'stingray',
    'jaguar',
    'panther',
    'elk',
    'ocelot',
    'beaver',
    'walrus',
    'gazelle',
    'coyote',
    'vulture',
    'iguana',
    'porcupine',
    'raccoon',
    'sloth',
    'armadillo',
    'chameleon',
    'kestrel',
    'weasel',
    'hedgehog'
  ];

  const digits = '23456789';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz';

  // Randomly select an adjective and a noun
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];

  // Randomly generate a sequence of numbers and characters
  const randomDigits = Array.from({ length: 2 }, () => digits.charAt(Math.floor(Math.random() * digits.length))).join('');

  const randomChars = Array.from({ length: 2 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
  adjective = capitalizeFirstLetter(adjective);
  noun = capitalizeFirstLetter(noun);
  // Combine the parts to form the final string
  return `${adjective}_${noun}_${randomDigits}${randomChars}`;
}

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const gradientColors = [
  ['rgba(43, 88, 118, 0.8)', 'rgba(78, 67, 118, 0.8)', 'rgba(43, 88, 118, 0.8)'],
  ['rgba(49, 71, 85, 0.8)', 'rgba(38, 160, 218, 0.8)', 'rgba(49, 71, 85, 0.8)'],
  ['rgba(119, 161, 211, 0.8)', 'rgba(121, 203, 202, 0.8)', 'rgba(119, 161, 211, 0.8)'],
  ['rgba(255, 110, 127, 0.8)', 'rgba(191, 233, 255, 0.8)', 'rgba(255, 110, 127, 0.8)'],
  ['rgba(229, 45, 39, 0.8)', 'rgba(179, 18, 23, 0.8)', 'rgba(229, 45, 39, 0.8)'],
  ['rgba(96, 56, 19, 0.8)', 'rgba(178, 159, 148, 0.8)', 'rgba(96, 56, 19, 0.8)'],
  ['rgba(22, 160, 133, 0.8)', 'rgba(244, 208, 63, 0.8)', 'rgba(22, 160, 133, 0.8)'],
  ['rgba(211, 16, 39, 0.8)', 'rgba(234, 56, 77, 0.8)', 'rgba(211, 16, 39, 0.8)'],
  ['rgba(237, 229, 116, 0.8)', 'rgba(225, 245, 196, 0.8)', 'rgba(237, 229, 116, 0.8)'],
  ['rgba(2, 170, 176, 0.8)', 'rgba(0, 205, 172, 0.8)', 'rgba(2, 170, 176, 0.8)'],
  ['rgba(218, 34, 255, 0.8)', 'rgba(151, 51, 238, 0.8)', 'rgba(218, 34, 255, 0.8)'],
  ['rgba(52, 143, 80, 0.8)', 'rgba(86, 180, 211, 0.8)', 'rgba(52, 143, 80, 0.8)'],
  ['rgba(60, 165, 92, 0.8)', 'rgba(181, 172, 73, 0.8)', 'rgba(60, 165, 92, 0.8)'],
  ['rgba(204, 149, 192, 0.8)', 'rgba(219, 212, 180, 0.8)', 'rgba(204, 149, 192, 0.8)'],
  ['rgba(0, 57, 115, 0.8)', 'rgba(229, 229, 190, 0.8)', 'rgba(0, 57, 115, 0.8)'],
  ['rgba(229, 93, 135, 0.8)', 'rgba(95, 195, 228, 0.8)', 'rgba(229, 93, 135, 0.8)'],
  ['rgba(64, 59, 74, 0.8)', 'rgba(231, 233, 187, 0.8)', 'rgba(64, 59, 74, 0.8)'],
  ['rgba(240, 152, 25, 0.8)', 'rgba(237, 222, 93, 0.8)', 'rgba(240, 152, 25, 0.8)'],
  ['rgba(255, 81, 47, 0.8)', 'rgba(221, 36, 118, 0.8)', 'rgba(255, 81, 47, 0.8)'],
  ['rgba(170, 7, 107, 0.8)', 'rgba(97, 4, 95, 0.8)', 'rgba(170, 7, 107, 0.8)'],
  ['rgba(26, 41, 128, 0.8)', 'rgba(38, 208, 206, 0.8)', 'rgba(26, 41, 128, 0.8)'],
  ['rgba(255, 81, 47, 0.8)', 'rgba(240, 152, 25, 0.8)', 'rgba(255, 81, 47, 0.8)'],
  ['rgba(29, 43, 100, 0.8)', 'rgba(248, 205, 218, 0.8)', 'rgba(29, 43, 100, 0.8)'],
  ['rgba(31, 162, 255, 0.8)', 'rgba(18, 216, 250, 0.8)', 'rgba(31, 162, 255, 0.8)'],
  ['rgba(76, 184, 196, 0.8)', 'rgba(60, 211, 173, 0.8)', 'rgba(76, 184, 196, 0.8)'],
  ['rgba(221, 94, 137, 0.8)', 'rgba(247, 187, 151, 0.8)', 'rgba(221, 94, 137, 0.8)'],
  ['rgba(235, 51, 73, 0.8)', 'rgba(244, 92, 67, 0.8)', 'rgba(235, 51, 73, 0.8)'],
  ['rgba(29, 151, 108, 0.8)', 'rgba(147, 249, 185, 0.8)', 'rgba(29, 151, 108, 0.8)'],
  ['rgba(255, 128, 8, 0.8)', 'rgba(255, 200, 55, 0.8)', 'rgba(255, 128, 8, 0.8)'],
  ['rgba(22, 34, 42, 0.8)', 'rgba(58, 96, 115, 0.8)', 'rgba(22, 34, 42, 0.8)'],
  ['rgba(31, 28, 44, 0.8)', 'rgba(146, 141, 171, 0.8)', 'rgba(31, 28, 44, 0.8)'],
  ['rgba(97, 67, 133, 0.8)', 'rgba(81, 99, 149, 0.8)', 'rgba(97, 67, 133, 0.8)'],
  ['rgba(71, 118, 230, 0.8)', 'rgba(142, 84, 233, 0.8)', 'rgba(71, 118, 230, 0.8)'],
  ['rgba(8, 80, 120, 0.8)', 'rgba(133, 216, 206, 0.8)', 'rgba(8, 80, 120, 0.8)'],
  ['rgba(43, 192, 228, 0.8)', 'rgba(234, 236, 198, 0.8)', 'rgba(43, 192, 228, 0.8)'],
  ['rgba(19, 78, 94, 0.8)', 'rgba(113, 178, 128, 0.8)', 'rgba(19, 78, 94, 0.8)'],
  ['rgba(92, 37, 141, 0.8)', 'rgba(67, 137, 162, 0.8)', 'rgba(92, 37, 141, 0.8)'],
  ['rgba(117, 127, 154, 0.8)', 'rgba(215, 221, 232, 0.8)', 'rgba(117, 127, 154, 0.8)'],
  ['rgba(35, 37, 38, 0.8)', 'rgba(65, 67, 69, 0.8)', 'rgba(35, 37, 38, 0.8)'],
  ['rgba(28, 216, 210, 0.8)', 'rgba(147, 237, 199, 0.8)', 'rgba(28, 216, 210, 0.8)'],
  ['rgba(61, 126, 170, 0.8)', 'rgba(255, 228, 122, 0.8)', 'rgba(61, 126, 170, 0.8)'],
  ['rgba(40, 48, 72, 0.8)', 'rgba(133, 147, 152, 0.8)', 'rgba(40, 48, 72, 0.8)'],
  ['rgba(36, 198, 220, 0.8)', 'rgba(81, 74, 157, 0.8)', 'rgba(36, 198, 220, 0.8)'],
  ['rgba(220, 36, 36, 0.8)', 'rgba(74, 86, 157, 0.8)', 'rgba(220, 36, 36, 0.8)'],
  ['rgba(237, 66, 100, 0.8)', 'rgba(255, 237, 188, 0.8)', 'rgba(237, 66, 100, 0.8)'],
  ['rgba(218, 226, 248, 0.8)', 'rgba(214, 164, 164, 0.8)', 'rgba(218, 226, 248, 0.8)'],
  ['rgba(236, 233, 230, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(236, 233, 230, 0.8)'],
  ['rgba(116, 116, 191, 0.8)', 'rgba(52, 138, 199, 0.8)', 'rgba(116, 116, 191, 0.8)'],
  ['rgba(236, 111, 102, 0.8)', 'rgba(243, 161, 131, 0.8)', 'rgba(236, 111, 102, 0.8)'],
  ['rgba(95, 44, 130, 0.8)', 'rgba(73, 160, 157, 0.8)', 'rgba(95, 44, 130, 0.8)'],
  ['rgba(192, 72, 72, 0.8)', 'rgba(72, 0, 72, 0.8)', 'rgba(192, 72, 72, 0.8)'],
  ['rgba(228, 58, 21, 0.8)', 'rgba(230, 82, 69, 0.8)', 'rgba(228, 58, 21, 0.8)'],
  ['rgba(65, 77, 11, 0.8)', 'rgba(114, 122, 23, 0.8)', 'rgba(65, 77, 11, 0.8)'],
  ['rgba(252, 53, 76, 0.8)', 'rgba(10, 191, 188, 0.8)', 'rgba(252, 53, 76, 0.8)'],
  ['rgba(75, 108, 183, 0.8)', 'rgba(24, 40, 72, 0.8)', 'rgba(75, 108, 183, 0.8)'],
  ['rgba(248, 87, 166, 0.8)', 'rgba(255, 88, 88, 0.8)', 'rgba(248, 87, 166, 0.8)'],
  ['rgba(167, 55, 55, 0.8)', 'rgba(122, 40, 40, 0.8)', 'rgba(167, 55, 55, 0.8)'],
  ['rgba(213, 51, 105, 0.8)', 'rgba(203, 173, 109, 0.8)', 'rgba(213, 51, 105, 0.8)'],
  ['rgba(233, 211, 98, 0.8)', 'rgba(51, 51, 51, 0.8)', 'rgba(233, 211, 98, 0.8)'],
  ['rgba(222, 98, 98, 0.8)', 'rgba(255, 184, 140, 0.8)', 'rgba(222, 98, 98, 0.8)'],
  ['rgba(102, 102, 0, 0.8)', 'rgba(153, 153, 102, 0.8)', 'rgba(102, 102, 0, 0.8)'],
  ['rgba(255, 238, 238, 0.8)', 'rgba(221, 239, 187, 0.8)', 'rgba(255, 238, 238, 0.8)'],
  ['rgba(239, 239, 187, 0.8)', 'rgba(212, 211, 221, 0.8)', 'rgba(239, 239, 187, 0.8)'],
  ['rgba(194, 21, 0, 0.8)', 'rgba(255, 197, 0, 0.8)', 'rgba(194, 21, 0, 0.8)'],
  ['rgba(33, 95, 0, 0.8)', 'rgba(228, 228, 217, 0.8)', 'rgba(33, 95, 0, 0.8)'],
  ['rgba(80, 201, 195, 0.8)', 'rgba(150, 222, 218, 0.8)', 'rgba(80, 201, 195, 0.8)'],
  ['rgba(97, 97, 97, 0.8)', 'rgba(155, 197, 195, 0.8)', 'rgba(97, 97, 97, 0.8)'],
  ['rgba(221, 214, 243, 0.8)', 'rgba(250, 172, 168, 0.8)', 'rgba(221, 214, 243, 0.8)'],
  ['rgba(93, 65, 87, 0.8)', 'rgba(168, 202, 186, 0.8)', 'rgba(93, 65, 87, 0.8)'],
  ['rgba(230, 218, 218, 0.8)', 'rgba(39, 64, 70, 0.8)', 'rgba(230, 218, 218, 0.8)'],
  ['rgba(218, 210, 153, 0.8)', 'rgba(176, 218, 185, 0.8)', 'rgba(218, 210, 153, 0.8)'],
  ['rgba(211, 149, 155, 0.8)', 'rgba(191, 230, 186, 0.8)', 'rgba(211, 149, 155, 0.8)'],
  ['rgba(0, 210, 255, 0.8)', 'rgba(58, 123, 213, 0.8)', 'rgba(0, 210, 255, 0.8)'],
  ['rgba(135, 0, 0, 0.8)', 'rgba(25, 10, 5, 0.8)', 'rgba(135, 0, 0, 0.8)'],
  ['rgba(185, 147, 214, 0.8)', 'rgba(140, 166, 219, 0.8)', 'rgba(185, 147, 214, 0.8)'],
  ['rgba(100, 145, 115, 0.8)', 'rgba(219, 213, 164, 0.8)', 'rgba(100, 145, 115, 0.8)'],
  ['rgba(201, 255, 191, 0.8)', 'rgba(255, 175, 189, 0.8)', 'rgba(201, 255, 191, 0.8)'],
  ['rgba(96, 108, 136, 0.8)', 'rgba(63, 76, 107, 0.8)', 'rgba(96, 108, 136, 0.8)'],
  ['rgba(0, 0, 0, 0.8)', 'rgba(83, 52, 109, 0.8)', 'rgba(0, 0, 0, 0.8)'],
  ['rgba(251, 211, 233, 0.8)', 'rgba(187, 55, 125, 0.8)', 'rgba(251, 211, 233, 0.8)'],
  ['rgba(173, 209, 0, 0.8)', 'rgba(123, 146, 10, 0.8)', 'rgba(173, 209, 0, 0.8)'],
  ['rgba(255, 78, 80, 0.8)', 'rgba(249, 212, 35, 0.8)', 'rgba(255, 78, 80, 0.8)'],
  ['rgba(240, 194, 123, 0.8)', 'rgba(75, 18, 72, 0.8)', 'rgba(240, 194, 123, 0.8)'],
  ['rgba(0, 0, 0, 0.8)', 'rgba(231, 76, 60, 0.8)', 'rgba(0, 0, 0, 0.8)'],
  ['rgba(170, 255, 169, 0.8)', 'rgba(17, 255, 189, 0.8)', 'rgba(170, 255, 169, 0.8)'],
  ['rgba(179, 255, 171, 0.8)', 'rgba(18, 255, 247, 0.8)', 'rgba(179, 255, 171, 0.8)'],
  ['rgba(120, 2, 6, 0.8)', 'rgba(6, 17, 97, 0.8)', 'rgba(120, 2, 6, 0.8)'],
  ['rgba(157, 80, 187, 0.8)', 'rgba(110, 72, 170, 0.8)', 'rgba(157, 80, 187, 0.8)'],
  ['rgba(85, 98, 112, 0.8)', 'rgba(255, 107, 107, 0.8)', 'rgba(85, 98, 112, 0.8)'],
  ['rgba(112, 225, 245, 0.8)', 'rgba(255, 209, 148, 0.8)', 'rgba(112, 225, 245, 0.8)'],
  ['rgba(0, 198, 255, 0.8)', 'rgba(0, 114, 255, 0.8)', 'rgba(0, 198, 255, 0.8)'],
  ['rgba(254, 140, 0, 0.8)', 'rgba(248, 54, 0, 0.8)', 'rgba(254, 140, 0, 0.8)'],
  ['rgba(82, 194, 52, 0.8)', 'rgba(6, 23, 0, 0.8)', 'rgba(82, 194, 52, 0.8)'],
  ['rgba(72, 85, 99, 0.8)', 'rgba(41, 50, 60, 0.8)', 'rgba(72, 85, 99, 0.8)'],
  ['rgba(131, 164, 212, 0.8)', 'rgba(182, 251, 255, 0.8)', 'rgba(131, 164, 212, 0.8)'],
  ['rgba(253, 252, 71, 0.8)', 'rgba(36, 254, 65, 0.8)', 'rgba(253, 252, 71, 0.8)'],
  ['rgba(171, 186, 171, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(171, 186, 171, 0.8)'],
  ['rgba(115, 200, 169, 0.8)', 'rgba(55, 59, 68, 0.8)', 'rgba(115, 200, 169, 0.8)'],
  ['rgba(211, 131, 18, 0.8)', 'rgba(168, 50, 121, 0.8)', 'rgba(211, 131, 18, 0.8)'],
  ['rgba(30, 19, 12, 0.8)', 'rgba(154, 132, 120, 0.8)', 'rgba(30, 19, 12, 0.8)'],
  ['rgba(148, 142, 153, 0.8)', 'rgba(46, 20, 55, 0.8)', 'rgba(148, 142, 153, 0.8)'],
  ['rgba(54, 0, 51, 0.8)', 'rgba(11, 135, 147, 0.8)', 'rgba(54, 0, 51, 0.8)'],
  ['rgba(255, 161, 127, 0.8)', 'rgba(0, 34, 62, 0.8)', 'rgba(255, 161, 127, 0.8)'],
  ['rgba(67, 206, 162, 0.8)', 'rgba(24, 90, 157, 0.8)', 'rgba(67, 206, 162, 0.8)'],
  ['rgba(255, 179, 71, 0.8)', 'rgba(255, 204, 51, 0.8)', 'rgba(255, 179, 71, 0.8)'],
  ['rgba(100, 65, 165, 0.8)', 'rgba(42, 8, 69, 0.8)', 'rgba(100, 65, 165, 0.8)'],
  ['rgba(254, 172, 94, 0.8)', 'rgba(199, 121, 208, 0.8)', 'rgba(254, 172, 94, 0.8)'],
  ['rgba(81, 127, 164, 0.8)', 'rgba(36, 57, 73, 0.8)', 'rgba(81, 127, 164, 0.8)'],
  ['rgba(255, 0, 132, 0.8)', 'rgba(51, 0, 27, 0.8)', 'rgba(255, 0, 132, 0.8)'],
  ['rgba(0, 191, 143, 0.8)', 'rgba(0, 21, 16, 0.8)', 'rgba(0, 191, 143, 0.8)'],
  ['rgba(19, 106, 138, 0.8)', 'rgba(38, 120, 113, 0.8)', 'rgba(19, 106, 138, 0.8)'],
  ['rgba(142, 158, 171, 0.8)', 'rgba(238, 242, 243, 0.8)', 'rgba(142, 158, 171, 0.8)'],
  ['rgba(123, 67, 151, 0.8)', 'rgba(220, 36, 48, 0.8)', 'rgba(123, 67, 151, 0.8)'],
  ['rgba(209, 145, 60, 0.8)', 'rgba(255, 209, 148, 0.8)', 'rgba(209, 145, 60, 0.8)'],
  ['rgba(241, 242, 181, 0.8)', 'rgba(19, 80, 88, 0.8)', 'rgba(241, 242, 181, 0.8)'],
  ['rgba(106, 145, 19, 0.8)', 'rgba(20, 21, 23, 0.8)', 'rgba(106, 145, 19, 0.8)'],
  ['rgba(0, 79, 249, 0.8)', 'rgba(255, 249, 76, 0.8)', 'rgba(0, 79, 249, 0.8)'],
  ['rgba(82, 82, 82, 0.8)', 'rgba(61, 114, 180, 0.8)', 'rgba(82, 82, 82, 0.8)'],
  ['rgba(186, 139, 2, 0.8)', 'rgba(24, 24, 24, 0.8)', 'rgba(186, 139, 2, 0.8)'],
  ['rgba(238, 156, 167, 0.8)', 'rgba(255, 221, 225, 0.8)', 'rgba(238, 156, 167, 0.8)'],
  ['rgba(48, 67, 82, 0.8)', 'rgba(215, 210, 204, 0.8)', 'rgba(48, 67, 82, 0.8)'],
  ['rgba(204, 204, 178, 0.8)', 'rgba(117, 117, 25, 0.8)', 'rgba(204, 204, 178, 0.8)'],
  ['rgba(44, 62, 80, 0.8)', 'rgba(52, 152, 219, 0.8)', 'rgba(44, 62, 80, 0.8)'],
  ['rgba(252, 0, 255, 0.8)', 'rgba(0, 219, 222, 0.8)', 'rgba(252, 0, 255, 0.8)'],
  ['rgba(229, 57, 53, 0.8)', 'rgba(227, 93, 91, 0.8)', 'rgba(229, 57, 53, 0.8)'],
  ['rgba(0, 92, 151, 0.8)', 'rgba(54, 55, 149, 0.8)', 'rgba(0, 92, 151, 0.8)'],
  ['rgba(244, 107, 69, 0.8)', 'rgba(238, 168, 73, 0.8)', 'rgba(244, 107, 69, 0.8)'],
  ['rgba(0, 201, 255, 0.8)', 'rgba(146, 254, 157, 0.8)', 'rgba(0, 201, 255, 0.8)'],
  ['rgba(103, 58, 183, 0.8)', 'rgba(81, 45, 168, 0.8)', 'rgba(103, 58, 183, 0.8)'],
  ['rgba(118, 184, 82, 0.8)', 'rgba(141, 194, 111, 0.8)', 'rgba(118, 184, 82, 0.8)'],
  ['rgba(142, 14, 0, 0.8)', 'rgba(31, 28, 24, 0.8)', 'rgba(142, 14, 0, 0.8)'],
  ['rgba(255, 183, 94, 0.8)', 'rgba(237, 143, 3, 0.8)', 'rgba(255, 183, 94, 0.8)'],
  ['rgba(194, 229, 156, 0.8)', 'rgba(100, 179, 244, 0.8)', 'rgba(194, 229, 156, 0.8)'],
  ['rgba(64, 58, 62, 0.8)', 'rgba(190, 88, 105, 0.8)', 'rgba(64, 58, 62, 0.8)'],
  ['rgba(192, 36, 37, 0.8)', 'rgba(240, 203, 53, 0.8)', 'rgba(192, 36, 37, 0.8)'],
  ['rgba(178, 69, 146, 0.8)', 'rgba(241, 95, 121, 0.8)', 'rgba(178, 69, 146, 0.8)'],
  ['rgba(69, 127, 202, 0.8)', 'rgba(86, 145, 200, 0.8)', 'rgba(69, 127, 202, 0.8)'],
  ['rgba(106, 48, 147, 0.8)', 'rgba(160, 68, 255, 0.8)', 'rgba(106, 48, 147, 0.8)'],
  ['rgba(234, 205, 163, 0.8)', 'rgba(214, 174, 123, 0.8)', 'rgba(234, 205, 163, 0.8)'],
  ['rgba(253, 116, 108, 0.8)', 'rgba(255, 144, 104, 0.8)', 'rgba(253, 116, 108, 0.8)'],
  ['rgba(17, 67, 87, 0.8)', 'rgba(242, 148, 146, 0.8)', 'rgba(17, 67, 87, 0.8)'],
  ['rgba(30, 60, 114, 0.8)', 'rgba(42, 82, 152, 0.8)', 'rgba(30, 60, 114, 0.8)'],
  ['rgba(47, 115, 54, 0.8)', 'rgba(170, 58, 56, 0.8)', 'rgba(47, 115, 54, 0.8)'],
  ['rgba(86, 20, 176, 0.8)', 'rgba(219, 214, 92, 0.8)', 'rgba(86, 20, 176, 0.8)'],
  ['rgba(77, 160, 176, 0.8)', 'rgba(211, 157, 56, 0.8)', 'rgba(77, 160, 176, 0.8)'],
  ['rgba(90, 63, 55, 0.8)', 'rgba(44, 119, 68, 0.8)', 'rgba(90, 63, 55, 0.8)'],
  ['rgba(41, 128, 185, 0.8)', 'rgba(44, 62, 80, 0.8)', 'rgba(41, 128, 185, 0.8)'],
  ['rgba(0, 153, 247, 0.8)', 'rgba(241, 23, 18, 0.8)', 'rgba(0, 153, 247, 0.8)'],
  ['rgba(131, 77, 155, 0.8)', 'rgba(208, 78, 214, 0.8)', 'rgba(131, 77, 155, 0.8)'],
  ['rgba(75, 121, 161, 0.8)', 'rgba(40, 62, 81, 0.8)', 'rgba(75, 121, 161, 0.8)'],
  ['rgba(0, 0, 0, 0.8)', 'rgba(67, 67, 67, 0.8)', 'rgba(0, 0, 0, 0.8)'],
  ['rgba(76, 161, 175, 0.8)', 'rgba(196, 224, 229, 0.8)', 'rgba(76, 161, 175, 0.8)'],
  ['rgba(224, 234, 252, 0.8)', 'rgba(207, 222, 243, 0.8)', 'rgba(224, 234, 252, 0.8)'],
  ['rgba(186, 83, 112, 0.8)', 'rgba(244, 226, 216, 0.8)', 'rgba(186, 83, 112, 0.8)'],
  ['rgba(255, 75, 31, 0.8)', 'rgba(31, 221, 255, 0.8)', 'rgba(255, 75, 31, 0.8)'],
  ['rgba(247, 255, 0, 0.8)', 'rgba(219, 54, 164, 0.8)', 'rgba(247, 255, 0, 0.8)'],
  ['rgba(168, 0, 119, 0.8)', 'rgba(102, 255, 0, 0.8)', 'rgba(168, 0, 119, 0.8)'],
  ['rgba(29, 67, 80, 0.8)', 'rgba(164, 57, 49, 0.8)', 'rgba(29, 67, 80, 0.8)'],
  ['rgba(238, 205, 163, 0.8)', 'rgba(239, 98, 159, 0.8)', 'rgba(238, 205, 163, 0.8)'],
  ['rgba(22, 191, 253, 0.8)', 'rgba(203, 48, 102, 0.8)', 'rgba(22, 191, 253, 0.8)'],
  ['rgba(255, 75, 31, 0.8)', 'rgba(255, 144, 104, 0.8)', 'rgba(255, 75, 31, 0.8)'],
  ['rgba(255, 95, 109, 0.8)', 'rgba(255, 195, 113, 0.8)', 'rgba(255, 95, 109, 0.8)'],
  ['rgba(33, 150, 243, 0.8)', 'rgba(244, 67, 54, 0.8)', 'rgba(33, 150, 243, 0.8)'],
  ['rgba(0, 210, 255, 0.8)', 'rgba(146, 141, 171, 0.8)', 'rgba(0, 210, 255, 0.8)'],
  ['rgba(58, 123, 213, 0.8)', 'rgba(58, 96, 115, 0.8)', 'rgba(58, 123, 213, 0.8)'],
  ['rgba(11, 72, 107, 0.8)', 'rgba(245, 98, 23, 0.8)', 'rgba(11, 72, 107, 0.8)'],
  ['rgba(233, 100, 67, 0.8)', 'rgba(144, 78, 149, 0.8)', 'rgba(233, 100, 67, 0.8)'],
  ['rgba(44, 62, 80, 0.8)', 'rgba(76, 161, 175, 0.8)', 'rgba(44, 62, 80, 0.8)'],
  ['rgba(44, 62, 80, 0.8)', 'rgba(253, 116, 108, 0.8)', 'rgba(44, 62, 80, 0.8)'],
  ['rgba(240, 0, 0, 0.8)', 'rgba(220, 40, 30, 0.8)', 'rgba(240, 0, 0, 0.8)'],
  ['rgba(20, 30, 48, 0.8)', 'rgba(36, 59, 85, 0.8)', 'rgba(20, 30, 48, 0.8)'],
  ['rgba(66, 39, 90, 0.8)', 'rgba(115, 75, 109, 0.8)', 'rgba(66, 39, 90, 0.8)'],
  ['rgba(0, 4, 40, 0.8)', 'rgba(0, 78, 146, 0.8)', 'rgba(0, 4, 40, 0.8)'],
  ['rgba(86, 171, 47, 0.8)', 'rgba(168, 224, 99, 0.8)', 'rgba(86, 171, 47, 0.8)'],
  ['rgba(203, 45, 62, 0.8)', 'rgba(239, 71, 58, 0.8)', 'rgba(203, 45, 62, 0.8)'],
  ['rgba(247, 157, 0, 0.8)', 'rgba(100, 243, 140, 0.8)', 'rgba(247, 157, 0, 0.8)'],
  ['rgba(248, 80, 50, 0.8)', 'rgba(231, 56, 39, 0.8)', 'rgba(248, 80, 50, 0.8)'],
  ['rgba(252, 234, 187, 0.8)', 'rgba(248, 181, 0, 0.8)', 'rgba(252, 234, 187, 0.8)'],
  ['rgba(128, 128, 128, 0.8)', 'rgba(63, 173, 168, 0.8)', 'rgba(128, 128, 128, 0.8)'],
  ['rgba(255, 216, 155, 0.8)', 'rgba(25, 84, 123, 0.8)', 'rgba(255, 216, 155, 0.8)'],
  ['rgba(189, 195, 199, 0.8)', 'rgba(44, 62, 80, 0.8)', 'rgba(189, 195, 199, 0.8)'],
  ['rgba(190, 147, 197, 0.8)', 'rgba(123, 198, 204, 0.8)', 'rgba(190, 147, 197, 0.8)'],
  ['rgba(161, 255, 206, 0.8)', 'rgba(250, 255, 209, 0.8)', 'rgba(161, 255, 206, 0.8)'],
  ['rgba(78, 205, 196, 0.8)', 'rgba(85, 98, 112, 0.8)', 'rgba(78, 205, 196, 0.8)'],
  ['rgba(58, 97, 134, 0.8)', 'rgba(137, 37, 62, 0.8)', 'rgba(58, 97, 134, 0.8)'],
  ['rgba(239, 50, 217, 0.8)', 'rgba(137, 255, 253, 0.8)', 'rgba(239, 50, 217, 0.8)'],
  ['rgba(222, 97, 97, 0.8)', 'rgba(38, 87, 235, 0.8)', 'rgba(222, 97, 97, 0.8)'],
  ['rgba(255, 0, 204, 0.8)', 'rgba(51, 51, 153, 0.8)', 'rgba(255, 0, 204, 0.8)'],
  ['rgba(255, 252, 0, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 252, 0, 0.8)'],
  ['rgba(255, 126, 95, 0.8)', 'rgba(254, 180, 123, 0.8)', 'rgba(255, 126, 95, 0.8)'],
  ['rgba(0, 195, 255, 0.8)', 'rgba(255, 255, 28, 0.8)', 'rgba(0, 195, 255, 0.8)'],
  ['rgba(244, 196, 243, 0.8)', 'rgba(252, 103, 250, 0.8)', 'rgba(244, 196, 243, 0.8)'],
  ['rgba(65, 41, 90, 0.8)', 'rgba(47, 7, 67, 0.8)', 'rgba(65, 41, 90, 0.8)'],
  ['rgba(167, 112, 239, 0.8)', 'rgba(207, 139, 243, 0.8)', 'rgba(167, 112, 239, 0.8)'],
  ['rgba(238, 9, 121, 0.8)', 'rgba(255, 106, 0, 0.8)', 'rgba(238, 9, 121, 0.8)'],
  ['rgba(243, 144, 79, 0.8)', 'rgba(59, 67, 113, 0.8)', 'rgba(243, 144, 79, 0.8)'],
  ['rgba(103, 178, 111, 0.8)', 'rgba(76, 162, 205, 0.8)', 'rgba(103, 178, 111, 0.8)'],
  ['rgba(52, 148, 230, 0.8)', 'rgba(236, 110, 173, 0.8)', 'rgba(52, 148, 230, 0.8)'],
  ['rgba(219, 230, 246, 0.8)', 'rgba(197, 121, 109, 0.8)', 'rgba(219, 230, 246, 0.8)'],
  ['rgba(192, 192, 170, 0.8)', 'rgba(28, 239, 255, 0.8)', 'rgba(192, 192, 170, 0.8)'],
  ['rgba(220, 227, 91, 0.8)', 'rgba(69, 182, 73, 0.8)', 'rgba(220, 227, 91, 0.8)'],
  ['rgba(232, 203, 192, 0.8)', 'rgba(99, 111, 164, 0.8)', 'rgba(232, 203, 192, 0.8)'],
  ['rgba(240, 242, 240, 0.8)', 'rgba(0, 12, 64, 0.8)', 'rgba(240, 242, 240, 0.8)'],
  ['rgba(255, 175, 189, 0.8)', 'rgba(255, 195, 160, 0.8)', 'rgba(255, 175, 189, 0.8)'],
  ['rgba(67, 198, 172, 0.8)', 'rgba(248, 255, 174, 0.8)', 'rgba(67, 198, 172, 0.8)'],
  ['rgba(9, 48, 40, 0.8)', 'rgba(35, 122, 87, 0.8)', 'rgba(9, 48, 40, 0.8)'],
  ['rgba(67, 198, 172, 0.8)', 'rgba(25, 22, 84, 0.8)', 'rgba(67, 198, 172, 0.8)'],
  ['rgba(69, 104, 220, 0.8)', 'rgba(176, 106, 179, 0.8)', 'rgba(69, 104, 220, 0.8)'],
  ['rgba(5, 117, 230, 0.8)', 'rgba(2, 27, 121, 0.8)', 'rgba(5, 117, 230, 0.8)'],
  ['rgba(32, 1, 34, 0.8)', 'rgba(111, 0, 0, 0.8)', 'rgba(32, 1, 34, 0.8)'],
  ['rgba(68, 160, 141, 0.8)', 'rgba(9, 54, 55, 0.8)', 'rgba(68, 160, 141, 0.8)'],
  ['rgba(97, 144, 232, 0.8)', 'rgba(167, 191, 232, 0.8)', 'rgba(97, 144, 232, 0.8)'],
  ['rgba(52, 232, 158, 0.8)', 'rgba(15, 52, 67, 0.8)', 'rgba(52, 232, 158, 0.8)'],
  ['rgba(247, 151, 30, 0.8)', 'rgba(255, 210, 0, 0.8)', 'rgba(247, 151, 30, 0.8)'],
  ['rgba(195, 55, 100, 0.8)', 'rgba(29, 38, 113, 0.8)', 'rgba(195, 55, 100, 0.8)'],
  ['rgba(32, 0, 44, 0.8)', 'rgba(203, 180, 212, 0.8)', 'rgba(32, 0, 44, 0.8)'],
  ['rgba(214, 109, 117, 0.8)', 'rgba(226, 149, 135, 0.8)', 'rgba(214, 109, 117, 0.8)'],
  ['rgba(48, 232, 191, 0.8)', 'rgba(255, 130, 53, 0.8)', 'rgba(48, 232, 191, 0.8)'],
  ['rgba(178, 254, 250, 0.8)', 'rgba(14, 210, 247, 0.8)', 'rgba(178, 254, 250, 0.8)'],
  ['rgba(74, 194, 154, 0.8)', 'rgba(189, 255, 243, 0.8)', 'rgba(74, 194, 154, 0.8)'],
  ['rgba(228, 77, 38, 0.8)', 'rgba(241, 101, 41, 0.8)', 'rgba(228, 77, 38, 0.8)'],
  ['rgba(235, 87, 87, 0.8)', 'rgba(0, 0, 0, 0.8)', 'rgba(235, 87, 87, 0.8)'],
  ['rgba(242, 153, 74, 0.8)', 'rgba(242, 201, 76, 0.8)', 'rgba(242, 153, 74, 0.8)'],
  ['rgba(86, 204, 242, 0.8)', 'rgba(47, 128, 237, 0.8)', 'rgba(86, 204, 242, 0.8)'],
  ['rgba(0, 121, 145, 0.8)', 'rgba(120, 255, 214, 0.8)', 'rgba(0, 121, 145, 0.8)'],
  ['rgba(0, 0, 70, 0.8)', 'rgba(28, 181, 224, 0.8)', 'rgba(0, 0, 70, 0.8)'],
  ['rgba(21, 153, 87, 0.8)', 'rgba(21, 87, 153, 0.8)', 'rgba(21, 153, 87, 0.8)'],
  ['rgba(192, 57, 43, 0.8)', 'rgba(142, 68, 173, 0.8)', 'rgba(192, 57, 43, 0.8)'],
  ['rgba(239, 59, 54, 0.8)', 'rgba(255, 255, 255, 0.8)', 'rgba(239, 59, 54, 0.8)'],
  ['rgba(40, 60, 134, 0.8)', 'rgba(69, 162, 71, 0.8)', 'rgba(40, 60, 134, 0.8)'],
  ['rgba(58, 28, 113, 0.8)', 'rgba(215, 109, 119, 0.8)', 'rgba(58, 28, 113, 0.8)'],
  ['rgba(203, 53, 107, 0.8)', 'rgba(189, 63, 50, 0.8)', 'rgba(203, 53, 107, 0.8)'],
  ['rgba(54, 209, 220, 0.8)', 'rgba(91, 134, 229, 0.8)', 'rgba(54, 209, 220, 0.8)'],
  ['rgba(0, 0, 0, 0.8)', 'rgba(15, 155, 15, 0.8)', 'rgba(0, 0, 0, 0.8)'],
  ['rgba(28, 146, 210, 0.8)', 'rgba(242, 252, 254, 0.8)', 'rgba(28, 146, 210, 0.8)'],
  ['rgba(100, 43, 115, 0.8)', 'rgba(198, 66, 110, 0.8)', 'rgba(100, 43, 115, 0.8)'],
  ['rgba(6, 190, 182, 0.8)', 'rgba(72, 177, 191, 0.8)', 'rgba(6, 190, 182, 0.8)'],
  ['rgba(12, 235, 235, 0.8)', 'rgba(32, 227, 178, 0.8)', 'rgba(12, 235, 235, 0.8)']
];
export function getRandomGradientTriple(): [string, string, string] {
  const colorTriple = gradientColors[Math.floor(Math.random() * gradientColors.length)];
  return [colorTriple[0], colorTriple[1], colorTriple[2]];
}
