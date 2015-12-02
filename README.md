#Pour tester:

npm install

puis lancer une premier fenetre avec la commande suivante :
```
nc -l 8080
```

elle représente le 2ème serveur (celui qui reçoit)

```
node src/index.js
```

enfin dans une dernière fenêtre :
```
nc -u localhost 5140
```

tapez le texte que vous voulez,
les lignes seront envoyées une à une du coté serveur
