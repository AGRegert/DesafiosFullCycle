FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

COPY ./initdb.sh /root/initdb.sh
RUN chmod +x /root/initdb.sh
RUN chown root:root /root/initdb.sh 
