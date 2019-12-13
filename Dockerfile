FROM zzswang/docker-nginx-react:v0.9.0

ENV DEBUG=off \
  NODE_ENV=production \
  APP_PORT=80

COPY ./build /app