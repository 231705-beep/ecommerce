# Build stage
FROM node:20-alpine AS build
WORKDIR /app
# Accept build arguments for Vite
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3008
CMD ["serve", "-s", "dist", "-l", "3008"]
