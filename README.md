# Skyskolen firebase workshop

## Prerequisites:

-   Node
-   Firebase-tools:

```
npm install -g firebase-tools
```

# Del-1: Sett opp firebase i appen og deploy til en https støttet nettside (del-1)

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
3. `npm run build`
4. `firebase deploy`
5. Sjekk ut nettsiden din!

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

# Del 3: Lagre meldinger til firestore

## Opprett firestore database

1. I firebase portalen, gå under build - Firestore database - Create database
    1. Start in test mode - eur3 (europe-west)
2. Opprett en ny collection, call den gjerne messages med følgende fields:
    1. message (string) - dette er selve meldinger
    2. userId (string) - userId til personen som skrev meldingen
    3. name (string) - navnet på den som skrev meldingen
    4. date (string) - dato når meldingen ble skrevet
    5. photo (string) - URL til et bilde til brukeren

## Skrive og lese meldinger fra firestore - LIVE!

Start ved å lage et dokument i firestore som inneholder feltene over - bildet kan ignoreres for nå

1. Lag en [hook](https://reactjs.org/docs/hooks-intro.html) som vi kaller useMessages
2. Opprett et array av meldinger `messages` via [useState](https://reactjs.org/docs/hooks-state.html) - dette skal ha interfacet:

```
export interface Message {
    id: string;
    message: string;
    date: string;
    userId: string;
    name: string;
    photo?: string;
}
```

Generelt når du skal hente ut data fra en collection, så må du bruke en `query` om du ha flere dokumenter, veldig likt det man kjenner fra database verden.
Først må du lage en query - der du spesifiserer at du skal hente fra en spesifikk collection (`messages`), og om du skal filtrere bort noe data ved for eksempel å bruke `where`, eller `orderBy` etc.

Noen greie imports man kan bruke er da:

```
import {
    query,
    collection,
    getFirestore,
    orderBy,
    limit,
    onSnapshot,
    addDoc,
    getDocs,
} from "firebase/firestore";
```

### Opprett en query

1. Opprett en `query` for å hente ut alle dokumentene fra collection `messages` - Sjekk ut denne [linken](https://firebase.google.com/docs/firestore/query-data/get-data)
2. Sorter de etter `date` i dokumentet
3. Hent kun ut de siste 25 meldingene

### Les ut dataen fra `messages` collection

Nå som du har lagt en query kan du prøve å hente ut alle dokumentene via `getDocs` funksjonen, og parse dataen som kommer tilbake fra firebase.

### Les ut data LIVE fra firestore collection

I forrige del leste du ut dataen fra `messages` collection, men det er ikke så kult for en chat app.
Derfor skal vi lese ut data LIVE :)

1. Lag en subscription via onSnapshot, som bruker querien som du lagde tidligere
2. I en [useEffect](https://reactjs.org/docs/hooks-effect.html) hook (i useMessages hooken din) - ta i bruk querien - når du får ny data, oppdater state arrayet som du lagde tidligere

Eksporter state arrayet med meldinger fra hooken din, og ta den i bruk i `ChatRoom.tsx` filen din. Da kan du mappe ut en `ChatMessage` for hver melding du får.

### Skriv en melding til firestore

For å skrive meldinger til firestore kan du ta i bruk `addDoc` importen.

1. Lag en funksjon som heter `sendMessage` som tar inn en string i `useMessages` hooken din
2. Bruk `addDoc` for å legge til en ny melding - her må du lage en melding med interfacet til en `Message` - data for userId, name etc du hente ut fra den innloggede brukeren
3. I tillegg å eksportere `messages` fra `useMessages` hooken din, legg til `sendMessage` til exports.
4. Ta i bruk `sendMessage` i `ChatRoom.tsx` - her kan du for eksempel bruke `ChatInput` for å skrive meldinger.

# Del 4: Sikkerhet rundt firestore

Det er relativt enkelt å legge til "enkel" sikkerhet til databasen din - du vil ikke at absolutt alle skal kunne skrive meldinger dit.

1. Gå under firestore i dashboardet
2. Gå inn under rules
3. Lag en ny regel som skal ha pattern `match /messages/{docId}`
    1. Brukeren skal kun skulle skrive (`read`) HVIS de er logget inn - dette kan du sjekke ut via `request.auth`
