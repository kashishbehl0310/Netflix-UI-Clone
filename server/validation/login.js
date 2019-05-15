const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {}
    data.email = !isEmpty(data.email) ? data.email: '';
    data.password = !isEmpty(data.password) ? data.password : "";
    if(validator.isEmpty(data.email)){
        errors.message = "Email field is required"
    } else if(!validator.isEmail(data.email)){
        errors.message = "Please enter a valid email";
    }
    if(validator.isEmpty(data.password)){
        errors.message = "Password field is required"
    }
    return{
        errors,
        isValid: isEmpty(errors)
    }
}