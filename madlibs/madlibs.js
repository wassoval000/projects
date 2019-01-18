$(document).ready(function(){
    getWords();
    $('#button').click(function(){
        showInfo();
    });
});

var verb1;
var verb2;
var verb3;
var adj1;
var adj2
var adj3;
var noun1;
var noun2;
var verbed;
var adverb;

function getWords(){
    verb1 = $("#verb1").val();
    verb2 = $("#verb2").val();
    verb3 = $("#verb3").val();
    adj1 = $("#adj1").val();
    adj2 = $("#adj2").val();
    adj3 = $("#adj3").val();
    noun1 = $("#noun1").val();
    noun2 = $("#noun2").val();
    verbed = $("#verbed").val();
    adverb = $("#adverb").val();
}

function showInfo(){
    var lib = "One day when I was walking down the street I saw a very " + adj1 + " " + noun1 + ". I suddenly began to " + verb1 + " because I had never seen such a thing. I reached down to touch it. It felt very " + adj2 + ", and at my touch it began to " + verb2 + ". This made me feel scared so I pulled out my " + noun2 + " and began to " + verb3 + ". This made the " + noun1 + " become " + adj3 + " so I put away my " + noun2 + " and " + verbed + " " + adverb + ".";

    $("#output").text(lib).show();
}