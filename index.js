/*
kullanıma açılan modulü require ile kullan ve fonksiyonu bir değişkene at 
    const primeNumbers=require('./circle');
    console.log("Alanı: "+ primeNumbers.circleArea(5)); 
    console.log("Çevresi: "+primeNumbers.circleCircumference(5));
*/

// object destructuring yöntemi 
const {circleArea,circleCircumference} = require('./circle');
circleArea(5);
circleCircumference(5);