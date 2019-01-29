$(document).ready(function(){

    $('#convert').click(function(){
        convert();
    });

    $('#total').click(function(){
        total();
    });

    $('#BMI').click(function(){
        BMI();
    });

    $('#decimal').click(function(){
        time();
    });

});

var convert = function(){

    var min = $('#numMin').val();

    var years;
    var daysRem;
    var days;

    years = Math.floor(min/525600);
    daysRem = min%525600;
    days = Math.floor(daysRem/(60*24));

    $('#output').text("Results: " + years + " years, " + days + "days");

}

var total = function(){

    var grat = $('#gratuity').val();
    var sub = $('#subtotal').val();

    sub = parseInt(sub);
    var dollarGra = grat/10;
    var total = sub+dollarGra;

    $('#output2').text("Results: Gratuity: $" + dollarGra + ", Total: $" + total);
}

var BMI = function(){

    var pounds = $('#pounds').val();
    var inches = $('#inches').val();

    var kilo;
    var meter;
    var metersquare;
    var result;
    
    kilo = pounds/2.2;
    meter = inches/39.3701;
    metersquare = Math.pow(meter,2);
    result = kilo/metersquare;

    $('#output3').text("Results: BMI is " + result);

}

var time = function(){

    var dTime = $('#dTime').val();

    var hours;
    var dRem;
    var min;
    
    hours = Math.floor(dTime);
    dRem = dTime-hours;
    min = Math.round(dRem*60);

    $('#output4').text("Results: " + hours + "hours, " + min + "minutes");
    
}