FROM centos:centos7

RUN yum -y update && yum -y install openssh-server openssh-clients passwd

RUN echo 'root:123456' | chpasswd

RUN ssh-keygen -A

RUN mkdir /var/run/sshd

EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
