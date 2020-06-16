
// Puerto //
process.env.PORT = process.env.PORT || 3000;

// Entorno //

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento //
// actualmente esta 60(segundos) * 60(horas)'pero podemos agregar * 24(horas) * 30(dias)

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// Semilla o Seed //

process.env.SEMILLA = process.env.SEMILLA || 'seed-de-la-aplicacion';


// BD //

let urlDB;

if ( process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;