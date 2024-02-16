# Vite Boolfolio

Sfruttando la API create in laravel-api, vado a popolare il main con i projects.

## Chiamata Axios in Main

importo axios e effettua una chimata in created, richiamando il metodo getProjects

creo in data tutte le variabili per rendere piu leggibile il codice e per renderlo piu comodo a variazioni

## Gestione Rotte, Vue Router

- installo vue router `npm install vue-router@4`

- metto in App.vue un tag che andrà a cambiare in base alla rotta chiamata (lo metto al posto di AppMain) dato che al click sul link in header voglio vedere lista, about, etc.

- creo cartella pages in cui avro le pagine del progetto che sustituiranno il router-view
