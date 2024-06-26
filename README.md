# Vidéos et Screenshots

## Site Internet
https://github.com/Kykyto/webshop/assets/70697745/1faf15f9-93d5-402b-a2ab-30ab1b8371d3

## Base MongoDB
![base_mongodb](https://github.com/Kykyto/webshop/assets/70697745/d8c5f708-030b-478f-8497-eb25f5ab8f5e)
</br>
</br>
</br>
# Outils utilisés

## Conception web
Le TP a été réalisé avec Vue.js pour le Frontend et JavaScript pour le Backend, avec Vite pour la création du projet. Il nécessite également d’avoir une version de Node.js d’installée.

## Base de données
La base de données choisie est MongoDB utilisée avec Mongoose et Express pour communiquer côté serveur et Axios pour effectuer des requêtes HTTP côté client.
</br>
</br>
</br>
# Lancer le site en local

## Initialiser la base de données
-	Installer MongoDB en local et lancer MongoDBCompass
-	Aller dans le dossier du projet et lancer la commande suivante afin d’initialiser la base : 
```
node ./src/api/scripts/createProducts.js
```

## Démarrer le serveur 
-	Depuis le dossier du projet, lancer la commande :
```
node ./src/api/server.js
```

## Démarrer le site web
-	Depuis le dossier du projet, lancer la commande :
```
npm run dev
```

-	Aller sur navigateur et se rendre sur l’URL indiquée par Vite

