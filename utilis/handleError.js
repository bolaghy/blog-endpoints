//error message or error code
const HandleError = (err)=>{
    let errors = {name: "", Email: "", password: ""}

    if(err.code === 11000){
        errors.Email = "Email has been registered"
        return errors
     }
     if (err.message === "email incorrect"){
        errors.Email = "Email does not exist"
        return errors
     }
     if (err.message === "password incorrect "){
        errors.Email = "Email or password is incorrect"
        errors.password = "Email or password is incorrect"
        return errors;
     }

    if (err.message.includes('User validation failed')){
        Object.values(err.errors).forEach((properties)=>{
            errors[properties.path] = properties.message
        });
    }
    return errors;
 
}


module.exports = HandleError;