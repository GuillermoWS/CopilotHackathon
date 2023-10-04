

/**
 * Validates a Spanish phone number.
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - Returns true if the phone number is valid, false otherwise.
 */
function validatePhoneNumber(phoneNumber){
        const regEx = /^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/;
        return regEx.test(phoneNumber);
}

/**
 * Calculates the number of days between two dates.
 * @param {string} date1 - The first date.
 * @param {string} date2 - The second date.
 * @returns {number} - The number of days between the two dates.
 */
function daysBetweenDates(date1, date2){
     
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays;
}

/**
 * Validates a Spanish DNI.
 * @param {string} dni - The DNI to validate.
 * @returns {string} - Returns "valid" if the DNI is valid, "invalid" otherwise.
 */
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

/**
 * Returns the memory usage of the current Node.js process.
 * @returns {string} - The memory usage of the current Node.js process, in GB.
 */
function memoryUsage(){
    const used = process.memoryUsage().heapUsed / 1024 / 1024 / 1024;
    return used.toFixed(2).toString();
}

/**
 * Returns the size of a gzipped file.
 * @param {string} filename - The name of the file to gzip.
 * @param {string} gzFilename - The name of the gzipped file.
 * @returns {string} - The size of the gzipped file, in bytes.
 */
function zipFile(filename, gzFilename ){
   const fs = require('fs');
   const zlib = require('zlib');
        
   // Leer el contenido del archivo
   const contenido = fs.readFileSync(filename);
   //gzip the filename in the directory by default
   zlib.gzip(contenido, (err, buffer) => {
       if (err) {
           console.error(err);
           return;
       }
       //write the gzip file
       fs.writeFileSync(gzFilename, buffer);
   });
   
   //get the size of the gzip file
   const stats = fs.statSync(gzFilename);
   const fileSizeInBytes = stats.size;
   //cast to string fileSizeInBytes
   const fileSizeInBytes_string = fileSizeInBytes.toString();

   return fileSizeInBytes_string;
}

//function Make an array of european countries and its iso codes
function getEuropeanCountries() {
    const europeanCountries = [
      { name: 'Albania', code: 'AL' },
      { name: 'Andorra', code: 'AD' },
      { name: 'Austria', code: 'AT' },
      { name: 'Belarus', code: 'BY' },
      { name: 'Belgium', code: 'BE' },
      { name: 'Bosnia and Herzegovina', code: 'BA' },
      { name: 'Bulgaria', code: 'BG' },
      { name: 'Croatia', code: 'HR' },
      { name: 'Cyprus', code: 'CY' },
      { name: 'Czech Republic', code: 'CZ' },
      { name: 'Denmark', code: 'DK' },
      { name: 'Estonia', code: 'EE' },
      { name: 'Finland', code: 'FI' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'Greece', code: 'GR' },
      { name: 'Hungary', code: 'HU' },
      { name: 'Iceland', code: 'IS' },
      { name: 'Ireland', code: 'IE' },
      { name: 'Italy', code: 'IT' }]

    //return ramdom country of array in json format
    return JSON.stringify(europeanCountries[Math.floor(Math.random() * europeanCountries.length)]);
}

module.exports = {
    validatePhoneNumber,
    daysBetweenDates,
    validateSpanishDNI,
    memoryUsage,
    zipFile,
    getEuropeanCountries
  };