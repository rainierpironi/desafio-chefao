const {validate, Joi} = require("express-validation");
 
module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        mensagem: Joi.string().required(),
        destinos_id: Joi.number().required(),
    })
});