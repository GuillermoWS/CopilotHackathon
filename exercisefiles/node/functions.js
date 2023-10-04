
//create function to validate phone number
function validatePhoneNumber(phoneNumber){
        const regEx = /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
        return regEx.test(phoneNumber);
}

//create function return diff days between two dates
function daysBetweenDates(date1, date2){
     
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays;
}

//crate function for validate dni
function validateSpanishDNI(dni){
        // calculate DNI letter
        var dniLetter = dni.charAt(dni.length - 1);
        var dniNumber = dni.substring(0, dni.length - 1);
        var dniLetterCalc = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(dniNumber % 23);

       //if DNI is valid return "valid"
        if (dniLetter == dniLetterCalc) {
            return "valid";
        }
        //if DNI is not valid return "invalid"
        else {
            return "invalid";
        }
}

module.exports = {
    validatePhoneNumber,
    daysBetweenDates,
    validateSpanishDNI
  };