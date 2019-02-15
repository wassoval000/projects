$(document).ready(function(){

    ////////////N1///////////////
    updateNarrative(N1);
    $('footer').html(createButton('button1',O1)+createButton('button2',O2)+createButton('button3',O3));

    $('#button1').click(function(){

        if($('#button1').text()===O1){
            updateNarrative(N2);
            updateButtons(O4,O5,O6,null);
            $('#button3').show();
        }
        else if($('#button1').text()===O4){
            updateNarrative(N5);
            updateButtons(O12,O13,O14,O15);
            $('#button3').show();
            $('#button4').show();
        }
        else if($('#button1').text()===O7){
        }
        else if($('#button1').text()===O10){
        }

    })

    $('#button2').click(function(){

        if($('#button2').text()===O2){
            updateNarrative(N3);
            updateButtons(O7,O8,O9,null);
            $('#button3').show();
        }
        else if($('#button2').text()===O5){
            updateNarrative(N6);
        }
        else if($('#button2').text()===O8){
        }
        else if($('#button2').text()===O11){
        }

    })

    $('#button3').click(function(){

        if($('#button3').text()===O3){
            updateNarrative(N4);
            updateButtons(O4,O5,null,null);
        }
        else if($('#button3').text()===O6){
            updateNarrative(N5);
        }
        else if($('#button3').text()===O9){
            updateNarrative(N6);
        }

    })

});

var updateNarrative = function(a){

    $('article').text(a);

}

var createButton = function(id, text){

    console.log("Button CREATED");

    return "<button type=button id=" + id + ">" + text + "</button>";

}

var N1 = "Wandering through the dark and murky... ";
var N2 = "a little boy proceeds all alone. He comes across a clearing in the trees where a sword lay embedded in a stone. He... ";
var N3 = "a little boy proceeds all alone. He reaches a sign that reads 'Beware of Ogres' and decides to... ";
var N4 = "a little boy proceeds all alone. He exits the cave to a gravel path that leads to a castle. He decides to... ";
var N5 = "The sword pulls free from the stone easily. He starts marching off down the road merrily when he finds a badly wounded bird. Does he... ";
var N6 = "Suddenly, a great dragon rises up to defend the sword in the stone. The boy has limited time. He...";
var N7 = "";
var N8 = "";
var N9 = "";
var N10 = "";
var O1 = "forest, ";
var O2 = "swamp, ";
var O3 = "cave, ";
var O4 = "yanks on the sword. ";
var O5 = "kicks the stone. ";
var O6 = "turns to search for another path. ";
var O7 = "find villagers to scare the ogre away with. ";
var O8 = "spy on the ogre. ";
var O9 = "battle the ogre. ";
var O10 = "approach the castle. ";
var O11 = "wait on the path. ";
var O12 = "find its nest. ";
var O13 = "take it out of its misery. ";
var O14 = "nurse it back to health. ";
var O15 = "leave it to fend for itself.";
var O16 = "grabs the sword. ";
var O17 = "flees. ";
var O18 = "hides. ";
var O19 = "kneels before the dragon. ";


var updateButtons = function(a,b,c,d){

    $('#button3').hide();
    $('#button4').hide();
    $('#button1').text(a);
    $('#button2').text(b);
    $('#button3').text(c);
    $('#button4').text(d);

}

function newFunction() {
    return 10;
}
