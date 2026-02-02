# Node 22 LTS on Debian Bookworm
FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Install OS deps needed for Playwright (Vitest browser tests)
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
	&& apt-get install -y --no-install-recommends \
	libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
	libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
	libgbm1 libasound2 libpango-1.0-0 libcairo2 \
	&& apt-get clean -y && rm -rf /var/lib/apt/lists/*
