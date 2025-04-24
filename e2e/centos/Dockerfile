FROM quay.io/centos/centos:centos7

RUN sed -i 's|^mirrorlist=|#mirrorlist=|g' /etc/yum.repos.d/CentOS-* && \
    sed -i 's|^#baseurl=http://mirror.centos.org|baseurl=http://mirrors.aliyun.com|g' /etc/yum.repos.d/CentOS-* && \
    yum clean all && yum makecache

RUN yum -y update && yum -y install openssh-server openssh-clients passwd

RUN echo 'root:123456' | chpasswd

RUN ssh-keygen -A

RUN mkdir /var/run/sshd

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
