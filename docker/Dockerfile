FROM quay.io/keycloak/keycloak:latest as builder

WORKDIR /opt/keycloak
RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENV KC_HTTP_PORT=9090
ENV KC_HOSTNAME_ADMIN_URL=http://localhost:9090
ENV KC_HOSTNAME_URL=http://localhost:9090

ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

ENV KEYCLOAK_ADMIN=admin
ENV KEYCLOAK_ADMIN_PASSWORD=admin

ENV KC_DB=postgres
ENV KC_DB_URL=jdbc:postgresql://host.docker.internal:5432/airlliant
ENV KC_DB_SCHEMA=keycloak
ENV KC_DB_USERNAME=postgres
ENV KC_DB_PASSWORD=sa

EXPOSE 9090
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]