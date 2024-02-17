# Vite Boolfolio

Sfruttando la API create in laravel-api, vado a popolare il main con i projects.

## Chiamata Axios in Main

importo axios e effettua una chimata in created, richiamando il metodo getProjects

creo in data tutte le variabili per rendere piu leggibile il codice e per renderlo piu comodo a variazioni

## Gestione Rotte, Vue Router

- installo vue router `npm install vue-router@4`

- metto in App.vue un tag che andrà a cambiare in base alla rotta chiamata (lo metto al posto di AppMain) dato che al click sul link in header voglio vedere lista, about, etc.

- creo cartella pages in cui avro le pagine del progetto che sustituiranno il router-view

- creo file router.js che similarmente a web.php gestirà le rotte (path, nome, componenti, parametri)

- lo uso in createApp nel main.js - importandolo e usando (`.use(router)` prima del mount)

- inserisco nell' header i router-link a cui passo il nome della rotta da chiamare al loro click, non ricaricano la pagina a differenza dei link classici

- creo un a rotta di catch all per tutte quelle chiamate 404 not found, la inserisco alla fine del router

- aggiungo alla pagina detail un parametro :slug, nel router

- inserisco nella card il link alla pagina di dettaglio, a cui passo slug come parametro

- creo la chiamata axios col parametro slug, mi avvalgo della variabile $route di vue
