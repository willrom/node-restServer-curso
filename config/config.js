
// Puerto //
process.env.PORT = process.env.PORT || 3000;

// Entorno //

process.env.NODE_ENV = process.env.NODE_ENV || 'det';

// BD //

let urlDB;

if ( process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb+srv://willrom1128:Tejidos.1@cluster0-pzkay.mongodb.net/cafe';
}

process.env.URLDB = urlDB;