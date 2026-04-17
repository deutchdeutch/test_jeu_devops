FROM node:20 AS builder-space
WORKDIR /app/space
COPY ./jeu_2_Space_Invaders/package*.json ./
RUN npm install 
COPY ./jeu_2_Space_Invaders ./
RUN npx parcel build src/index.html --public-url ./ --dist-dir dist
FROM node:20 AS builder-two
WORKDIR /app/two
COPY ./jeu_1_two_ships_passing_the_night/package*.json ./
RUN npm install --ignore-scripts
COPY ./jeu_1_two_ships_passing_the_night ./
RUN npx vite build --base=/two_ships_passing_the_night/
FROM nginx:alpine
COPY ./index.html /usr/share/nginx/html/index.html
COPY --from=builder-space /app/space/dist /usr/share/nginx/html/space-invaders
COPY --from=builder-two /app/two/dist /usr/share/nginx/html/two_ships_passing_the_night
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]