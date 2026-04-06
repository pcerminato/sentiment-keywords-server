# 1. Base Stage: Common setup for all environments
FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./

# 2. Development Stage: Includes devDependencies and hot-reloading
FROM base AS development
RUN npm install
COPY . .
EXPOSE 8080
USER 1000
CMD ["npm", "run", "dev"] 

# 3. Production Stage: Only production files and dependencies
FROM base AS production
ENV NODE_ENV=production
RUN npm ci --omit=dev  # Install only production dependencies
COPY . .
USER 1000              # Run as a non-root user
CMD ["node", "src/server.js"]