1 # syntax=docker/dockerfile:1
  2 # image docker de base
  3 FROM node:18-alpine3.15
  4 # préciser l'environnement d'execution
  5 ENV NODE_ENV=production
  6 # definir le répertoire de travail au sein du conteneur
  7 WORKDIR /app
  8 # copier les fichiers qui servent à installer les dépendances pour le fonctionnement du projet
  9 COPY ["package.json", "package-lock.json*", "./"]
 10 # execution de la commande pour installer les dépendances
 11 RUN npm install --production
 12 # copier l'ensemble du code source au sein du conteneur
 13 COPY . .
 14 # commande pour démarrer l'execution du projet
 15 CMD ["npm", "start"]
