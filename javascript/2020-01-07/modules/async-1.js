// Hozz létre három json filet users1, users2, és users3 névvel.
// Mindegyik fájl felhasználók nevét, és életkorát tartalmazza az alábbi formában:
// 	{
// 	    "users": [
// 	        {
// 	            "name": "John Doe",
// 	            "age": 30,
// 	        }
// 	    ]
// 	}
// Mindegyik fájlban legalább 3 felhasználói adat legyen. - MOST CSAK 1
// Írj egy függvény, ami paraméterként vár egy http metódust, és egy útvonalat.
// Ezután xmlHttp kérést indít az adott erőforrás elérésére az adott metódussal.
// Hibakezelés s legyen megvalósítva. Ha az adott erőforrás nem elérhető,
// próbálja meg még két alkalommal, tehát összesen háromszor elérni azt.
// Két hívás között legyen 5 másodperc várakozási idő.
// Ha harmadszorra sem lehet elérni az erőforrást, elég a konzolra kiírni a hibaüzenetet.
// Indíts egymás után három kérést mind a 3 json file elérésére GET metódussal.
// A kérések EGYMÁS UTÁN sorba fussanak le, tehát ha az első file tartalma elérhető már (lefutott a callback)
// akkor indítsd a második kérést, és így tovább. A 3 json file tartalmát egyetlen JavaScript TÖMBBE
// merge-öld össze. Ha bármelyik file nem volt elérhető, akkor csak az adott file tartalma ne szerepeljen
// az objektumban, a többié még igen.
// Nem szabad callback hell-nek lennie!

// EZ MÁR A FETCH-ES  MEGOLDÁS PROMISEOKKAL ÉS ASYNC AWAITTAL IS
// TALÁN ÍGY EGYSZERŰBB MEGÉRTENI HOGYAN LEHET ÁTÍRNI ŐKET
// A LOG-OK CSAK AZÉRT VANNAK, HOGY LÁSSÁTOK A SIKERES/SIEKRTELEN LEFUTÁST

const state = {
  users: [],
};

const request = (url, method, tries = 3) => {
  fetch(url, { method })
    .then((result) => {
      if (result.readyState === 4 && result.status >= 400) {
        throw new Error('Client or Server error');
      }
      return result;
    })
    .then((result) => result.json())
    .then((resultObj) => {
      state.users = [...state.users, ...resultObj.users];
      console.log(state.users);
      return state.users;
    })
    .catch((err) => {
      console.log(err.message);
      if (tries > 0) {
        setTimeout(() => {
          request(url, method, tries - 1);
        }, 5000);
      }
    });
};

const request2 = async (url, method, tries = 2) => {
  try {
    const result = await fetch(url, { method });
    if (result.readyState === 4 && result.status >= 400) {
      throw new Error('Client or Server error');
    }
    const resultObj = await result.json();
    state.users = [...state.users, ...resultObj.users];
    console.log(state.users);
    return state.users;
  } catch (err) {
    console.log(err.message);
    if (tries > 0) {
      setTimeout(() => {
        request(url, method, tries - 1);
      }, 5000);
    }
  }
};

const multipleRequest = (urls) => urls.map((url) => request(url, 'GET'));

export default multipleRequest;
