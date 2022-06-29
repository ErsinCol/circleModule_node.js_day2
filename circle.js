const PI=3.14;

function circleArea(radius){
    console.log(PI*Math.pow(radius,2));
}

function circleCircumference(radius){
    console.log(2*PI*radius);
}


// modülleri kullanıma açma 
module.exports={
    circleArea,
    circleCircumference
}