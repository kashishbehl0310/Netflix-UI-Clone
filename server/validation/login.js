const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {}
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password : "";
    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required"
    } else if(!validator.isEmail(data.email)){
        errors.email = "Please enter a valid email";
    }
    if(validator.isEmpty(data.password)){
        errors.password = "Password field is required"
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }
}