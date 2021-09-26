# Skyskolen firebase demo

## Prerequisites:

Firebase-tools:

```
npm install -g firebase-tools
```

# Del-1: Sett opp firebase i appen og deploy til en https støttet nettside

## Sett opp firebase CLI

1. Registrer deg for (firebase)[https://firebase.google.com]
2. Opprett nytt prosjekt
3. Ja/nei til google analytics
4. Install firebase via npm

```
   npm install firebase
```

## Bruk firebase i appen

1. Fra stegene gjort tidligere fikk du en del keys etc - ta disse i bruk i en egen fil som heter `firebaseConfig.ts`
1. Importer 'initializeApp' fra 'firebase/app' i fireBaseConfig.ts og konfigurer med keys'ene som du fikk tidligere:

```
const firebaseConfig = {
  apiKey: XXX,
  authDomain: XXX,
  projectId: XXX,
  storageBucket: XXX,
  messagingSenderId: XXX,
  appId: XXX,
  measurementId: XXX,
};
```

## Deploy firebase til en https støttet nettside

Deploy:

1. `firebase login`
2. `firebase init hosting` ->
   public directory: build
   confire as SPA - YES
3. `npm build`
4. `firebase deploy`

# Del 2: Autentisering - Google

1. Under build, trykk authentication
2. Enable Google
3. Lag en [context](https://reactjs.org/docs/context.html) 'AuthContext som oppfyller interfacet

```
interface AuthContextInterface {
  state: UserState;
  signIn: () => void;
  signOut: () => void;
}

interface UserState {
  user?: User;
  isLoggedIn: boolean;
}
```

## Innlogging

For innlogging via Google kan du ta i bruk

```
GooogleAuthProvider
```

som blir exportert av firebase/auth.

Nedenfor har du noen andre greie imports som du kan ta i bruk om du for eksempel vil at de skal logge inn via en popup, kunne sette at de ikke må logge inn hver gang de kommer inn i appen og følge med på når state forandres.

Søk opp bruk av noen av importene nedenfor, eller sjekk ut `AuthProvider.ts` i del-3 for hint.

```
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  User,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
```

### Prøv å få til at du har følgende:

1. Om brukeren ikke er logget inn, vis en knapp for å logge inn via Google
2. Om brukeren er logget inn:
    1. Vis navnet til brukeren
    2. Vis en knapp for å logge brukeren ut

# Del 3: Opprett en firestore database

1. I firebase portalen, gå under build - Firestore database - Create database
    1. Start in test mode - eur3 (europe-west)
2. Opprett en ny collection, call den gjerne messages med følenge fields:
    1. message - string
    2. userId - string
    3. published - timestamp
