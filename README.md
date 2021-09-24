# Skyskolen firebase demo

## Prerequisites:

Firebase-tools:

```
npm install -g firebase-tools
```

# Del-1: Sett opp firebase i appen og deploy

## Sett opp firebase CLI

1. Registrer deg for (firebase)[https://firebase.google.com]
2. Opprett nytt prosjekt
3. Ja/nei til google analytics
4. Install firebase via npm

```
   npm install firebase
```

## Bruk firebase i appen

1. Importer 'initializeApp' fra 'firebase/app' i fireBaseConfig.ts og konfigurer med config

# Del 2: Deploy firebase til en https støttet nettside

Deploy:

1. `firebase login`
2. `firebase init hosting` ->
   public directory: build
   confire as SPA - YES
3. `npm build`
4. `firebase deploy`

# Del 3: Autentisering - Google

1. Under build, trykk authentication
2. Enable Google

# Del 4: Opprett en firestore database

1. Gå under build - Firestore database - Create database
2. Start in test mode - eur3 (europe-west)
3. Opprett en ny colletion, call den gjerne messages med følenge fields:

-   message - string
-   userId - string
-   published - timestamp

# Del 5: Vis meldingene som ligger i databasen i viewet
