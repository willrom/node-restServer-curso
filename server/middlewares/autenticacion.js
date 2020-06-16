//====================================
//      Verifica token
//====================================
const jwt = require('jsonwebtoken');

let verificaToken = ( req, res, next ) => {
  
    let token = req.get('token');

    jwt.verify( token, process.env.SEMILLA, (err, decoded ) => {
        
        if (err) {
            return res.status(401).json({
              ok: false,
              err: {
                  message: 'Error en el Token'
              }
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
    
};

//====================================
//      Verifica Role_Admin
//====================================

let verificaroleAdmin = ( req, res, next ) => {

    let usuario = req.usuario;

    if ( usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }


};



module.exports = {
    verificaToken,
    verificaroleAdmin
};