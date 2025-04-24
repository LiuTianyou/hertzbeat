FROM centos

# 替换默认 yum 源为阿里云镜像
RUN sed -i 's|^mirrorlist=|#mirrorlist=|g' /etc/yum.repos.d/CentOS-* && \
    sed -i 's|^#baseurl=http://mirror.centos.org|baseurl=http://mirrors.aliyun.com|g' /etc/yum.repos.d/CentOS-* && \
    yum clean all && yum makecache

# 更新系统并安装 SSH 服务
RUN yum -y update && yum -y install openssh-server openssh-clients passwd

# 设置 root 密码为 123456
RUN echo 'root:123456' | chpasswd

# 生成 SSH 主机密钥
RUN ssh-keygen -A

# 启动 SSH 服务
RUN mkdir /var/run/sshd

# 开放 SSH 端口
EXPOSE 22

# 启动 SSH 服务并保持前台运行
CMD ["/usr/sbin/sshd", "-D"]
