FROM alpine AS builder
WORKDIR /usr/app
RUN apk add --no-cache --update nodejs nodejs-npm git
COPY src/package.json src/package-lock.json ./
RUN npm install --production --quiet
FROM alpine
WORKDIR /usr/app
RUN apk add --no-cache --update nodejs
COPY --from=builder /usr/app/node\_modules ./node\_modules
COPY src/ .
EXPOSE 3000
CMD ["node", "app.js"]
