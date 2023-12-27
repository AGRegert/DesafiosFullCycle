# FROM agregert/fullcycle:desafio-docker-node as wait-for

FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
# COPY --from=wait-for /usr/bin/wait-for /usr/bin/wait-for

# RUN mkdir /var/www/html -p && touch /var/www/html/index.html