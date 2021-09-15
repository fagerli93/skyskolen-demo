# skyskolen-demo

Prerequisites:
Firebase-tools:
`npm install -g firebase-tools`

Del-1:
Sett opp firebase i appen og deploy:

1. Registrer deg for (firebase)[https://firebase.google.com]
2. Opprett nytt prosjekt
3. Ja/nei til google analytics
4. Install firebase via npm
   bash```
   npm install firebase

````

5. Importer 'initializeApp' fra 'firebase/app' i fireBaseConfig.ts og konfigurer med config

Deploy:
1. ```firebase login```
2. ```firebase init hosting``` ->
  public directory: build
  confire as SPA - YES
3. ```npm build```
3. ```firebase deploy```

Del-2: Authentication
1. Under build, trykk authentication
2. Enable Google



Del-2:
6. Gå under build - Firestore database - Create database
7. Start in test mode - eur3 (europe-west)
8. Opprett en ny colletion, call den gjerne messages med følenge fields:
- message - string
- userId - string
- published - timestamp
````
