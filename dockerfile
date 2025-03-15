# https://www.docker.com/blog/how-to-dockerize-react-app/
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
# RUN npm run build

# DEVELOPMENT
EXPOSE 3000
CMD ["npm", "run", "dev"]


# # PRODUCTION: Use an Nginx image to serve the build
# FROM nginx:stable-alpine as production
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
