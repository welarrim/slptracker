# SLP Tracker Bot for Discord

## Installation

Copy .env.example to .env
Put the correct Bot token at .env

## Dev

Run command :

```sh
docker-compose up
```

## Prod

Run command :

```sh
docker run --env BOT_TOKEN=YOUR_SECURE_TOKEN --env CHANNEL_ID=YOUR_CHANNEL_ID --name slp_tracker -d elarrim/slptracker
```
