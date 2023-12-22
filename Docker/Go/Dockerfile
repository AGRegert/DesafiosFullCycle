FROM golang:1.22rc1-alpine3.19 AS builder

WORKDIR /usr/src/hellofullcycle

COPY . .
RUN go mod init fullcycle/hello
RUN go build -v -o /usr/local/bin/hellofullcycle ./...

FROM scratch
WORKDIR /usr/local/bin/
COPY --from=builder /usr/local/bin/hellofullcycle /usr/local/bin/hellofullcycle

ENTRYPOINT ["hellofullcycle"]
