FROM node:17.6.0-slim
#FROM nginx

COPY ./frontend/ /project/
#
#RUN cd /projects; \
#    npm run build

WORKDIR /project

RUN npm run build

FROM nginx
COPY --from=0 /project/dist /dist


ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
