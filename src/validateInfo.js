export default function validateInfo(values){
    let errors = {}

    if(!values.weight){
        errors.weight = "Weight required!"
    } else if(values.weight < 40 || values.weight > 250){
        errors.weight = "You entered an invalid value for weight!"
    }

    if(!values.height) {
        errors.height = "Height required!"
    } else if(values.height < 120 || values.height > 250){
        errors.height = "You entered an invalid value for height!"
    }

    return errors;   
}