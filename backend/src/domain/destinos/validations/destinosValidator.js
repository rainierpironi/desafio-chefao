const {validate, Joi} = require("express-validation");
 
module.exports = validate({
    body: Joi.object({
        nome_regiao: Joi.string().required(),
        nome_estado: Joi.string().required(),
        nome_cidade: Joi.string().required(),
    })
});