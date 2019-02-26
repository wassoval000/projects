$(document).ready(function(){

    ////////////N1///////////////
    updateNarrative(N1);
    $('footer').html(createButton('button1',O1)+createButton('button2',O2)+createButton('button3',O3));
    changeImg(1);

    $('#button1').click(function(){

        if($('#button1').text()===O1){
            updateNarrative(N2);
            updateButtons(O4,O5,O6,null);
            $('#button3').show();
            changeImg(2);
        }
        else if($('#button1').text()===O4){
            changeImg(4);
            updateNarrative(N5);
            updateButtons(O12,O13,O14,O15);
            $('#button3').show();
            $('#button4').show();
            hasSword = true;
        }
        else if($('#button1').text()===O7){
            changeImg(9);
            updateNarrative(N8);
            updateButtons(O22,O23,null,null);
        }
        else if($('#button1').text()===O10){
            changeImg(11);
            updateNarrative(N11);
            updateButtons(O26,O27,O28,null);
            $('#button3').show();
        }
        else if($('#button1').text()===O12){
            changeImg(13);
            updateNarrative(N13);
            updateButtons(O33, null, null, null);
            $('#button2').hide();
            hasGold = true;
        }
        else if($('#button1').text()===O33){
            changeImg(34);
            updateNarrative(N21);
            updateButtons(O37,O38,O39,O40);
            $('#button3').show();
            $('#button4').show();
        }
        else if($('#button1').text()===O16){
            changeImg(17);
            updateNarrative(N17);
            updateButtons(O34,O35,O36,null);
            $('#button3').show();
            hasSword = true;
        }
        else if($('#button1').text()===O34){
            changeImg(35);
            updateNarrative(N22);
            //Ending
        }
        else if($('#button1').text()===O37){
            changeImg(38);
            updateNarrative(N36);
            //End path
        }
        else if($('#button1').text()===O20){
            changeImg(21);
            updateNarrative(N25);
            //Ending
        }
        else if($('#button1').text()===O22){
            changeImg(23);
            updateNarrative(N29);
            //Ending
        }
        else if($('#button1').text()===O29){
            changeImg(30);
            hasLove = true;
            updateNarrative(N40);
            updateButtons(O41, O42, null, null);
        }
        else if($('#button1').text()===O24){
            changeImg(25);
            updateNarrative(N31);
            //End path
        }
        else if($('#button1').text()===O26){
            changeImg(27);
            updateNarrative(N33);
            //Ending
        }
        else if($('#button1').text()===O41){
            changeImg(42);
            updateNarrative(N42);
        }

    })

    $('#button2').click(function(){

        if($('#button2').text()===O2){
            updateNarrative(N3);
            updateButtons(O7,O8,O9,null);
            $('#button3').show();
            changeImg(O3);
        }
        else if($('#button2').text()===O5){
            updateNarrative(N6);
            updateButtons(O16,O17,O18,O19);
            $('#button3').show();
            $('#button4').show();
            changeImg(O6);
        }
        else if($('#button2').text()===O8){
            updateNarrative(N9);
            updateButtons(O24,O25,null,null);
        }
        else if($('#button2').text()===O11){
            updateNarrative(N12);
            updateButtons(O29,O30,O31,O32);
            $('#button3').show();
            $('#button4').show();
        }
        else if($('#button2').text()===O13){
            updateNarrative(N14);
            //End path
        }
        else if($('#button2').text()===O17){
            updateNarrative(N18);
            //End path
        }
        else if($('#button2').text()===O35){
            updateNarrative(N23);
        }
        else if($('#button2').text()===O38){
            updateNarrative(N37);
            //End path
        }
        else if($('#button2').text()===O21){
            if(hasArmor != true && hasSword != true){
                updateNarrative(N26);
            }
            else if(hasArmor == true || hasSword == true){
                updateNarrative(N27);
            }
            //End path
        }
        else if($('#button2').text()===O23){
            updateNarrative(N30);
            //End path
        }
        else if($('#button2').text()===O30){
            hasArmor = true;
            updateNarrative(N40);
            updateButtons(O41, O42, null, null);
        }
        else if($('#button2').text()===O25){
            updateNarrative(N32);
            //End path
        }
        else if($('#button2').text()===O27){
            updateNarrative(N34);
            //Ending
        }
        else if($('#button2').text()===O42){
            if(hasAmbrosia == true || hasLuck == true){
                updateNarrative(N41);
            }
            else if(hasArmor){
                updateNarrative(N41);
            }
            else{
                updateNarrative(N43);
            }
        }

    })

    $('#button3').click(function(){

        if($('#button3').text()===O3){
            updateNarrative(N4);
            updateButtons(O10,O11,null,null);
        }
        else if($('#button3').text()===O6){
            updateNarrative(N7);
            updateButtons(O20,O21, null, null);
        }
        else if($('#button3').text()===O9){
            updateNarrative(N10);
            //End path
        }
        else if($('#button3').text()===O14){
            updateNarrative(N15);
            updateButtons(O33, null, null, null);
            $('#button2').hide();
            hasLuck = true;
        }
        else if($('#button3').text()===O18){
            updateNarrative(N19);
            //End path
        }
        else if($('#button3').text()===O36){
            if(hasDragon != true){
                updateNarrative(N24);
                //End path
            }
            else if(hasDragon == true){
                updateNarrative(N28);
                //Ending
            }
        }
        else if($('#button3').text()===O39){
            updateNarrative(N38);
            //End path
        }
        else if($('#button3').text()===O31){
            hasLuck = true;
            updateNarrative(N40);
            updateButtons(O41, O42, null, null);
        }
        else if($('#button3').text()===O28){
            updateNarrative(N35);
            //Ending
        }

    })

    $('#button4').click(function(){
        if($('#button4').text()===O15){
            updateNarrative(N16);
            //End path
        }
        else if($('#button4').text()===O19){
            updateNarrative(N20);
            updateButtons(O34,O35,O36,null);
            $('#button3').show();
            hasDragon = true;
        }
        else if($('#button4').text()===O40){
            updateNarrative(N39);
            //Ending
        }
        else if($('#button3').text()===O32){
            hasAmbrosia = true;
            updateNarrative(N40);
            updateButtons(O41, O42, null, null);
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
var N7 = "The boy travels along, reaching a fork in the path. One way he can see a clear destination, a village, the other leads into a dark thicket. Does he go into... ";
var N8 = "He has lit the torches and sharpened the pitchforks! However, the little fighter starts feeling uneasy... like somebody is watching him... ";
var N9 = "As he settles into a bush to spy on the ogre, he suddenly hears the hit tune 'Allstar' by Smashmouth blast as the creature goes about its day. The ogre seems harmless. He decides to... ";
var N10 = "The little boy flashes into action, charging at the ogre. Unfortunately he is unarmed and the ogre kills him.";
var N11 = "He proceeds to approach the castle warily and finds a battle of heroes ensuing. Does he... ";
var N12 = "The little boy waits, exhausted, on the worn path. As night falls, an old woman appears. She is selling magical goods. Does he buy? (Ingested items may only be used once!)";
var N13 = "Upon placing the bird in its nest an abundance of gold begins to fall from the tree. He saves this for the future.";
var N14 = "As he goes to crush the bird with a rock, it blossoms in a flash of light into a beautiful woman. She speaks softly, 'It is a shame that you would take life so easily.' As penance, a rock falls from the heavens and crushes his skull. ";
var N15 = "The boy spends nearly a week nursing the bird back to health. Once she can fly she blossoms in a flash of light into a beautiful woman. She gifts him with a good luck potion to save for later.";
var N16 = "As the boy wanders off, leaving the bird to fend for himself, he finds himself lost. He eventually starves and dies just as the bird would have. ";
var N17 = "He grabs the sword and it slides easily out of the stone. The boy proceeds to make quick work of slaying the great dragon. Where does he go now? ";
var N18 = "The boy attempts to flee, but the dragon is faster. He is charred, eaten, however you would like to put it, dead. ";
var N19 = "The boy ducks under some bushes to hide. The dragon's bloodhound like nose, however, proceeds to sniff him out. He is dead. ";
var N20 = "The boy kneels in front of the dragon. He does not dare make eye contact. The dragon sniffs him before scooping the boy up and onto his back. Where does he ride the dragon to? ";
var N21 = "The boy continues on, happy to have received a gift. He has now reached a riverbank. Here there is an assortment of people: pirates, tourists, merchants, cargo ships. Who does he travel with?";
var N22 = "The boy heads off into the mountains, and treks to the highest peak. Here he finds a small socialist colony that exports only baked goods (such as cakes and cookies). He decides to rule over this socialist colony. Using what he has learned from the treacherous world so far as his guide to instill fear in his people. The End...";
var N23 = "The desert is too hot and there is, unfortunately, no water to drink. He has died. ";
var N24 = "Since the boy has no way to navigate the molten lava and hot tar, he died of heat exhaustion upon reaching the lava and tar pits.";
var N25 = "The boy heads off to the village where he finds himself work as a knight. Here he works for many years until he retires to the mountains. The end.";
var N26 = "He heads into the thicket. The brambles cut deep into the poor boy's skin. He falls to the dirt and bleeds out.";
var N27 = "He heads into the thicket. The brambles cut deep into the poor boy boy's skin. However, he has protection, and makes it through.";
var N28 = "The dragon flies the boy to the lava and tar pits, where a beautiful princess is kept locked in a tower. There, the two share true love's kiss, and fly off into the sunset. The End...";
N29 = "The boy chooses to flee the scene. And watches in terror as the ogre appears, terrifying every last man in the swamp. As the ogre begins the leave he steps out into the moonlight and stabs the ogre in the back, taking him to the ground. He has slain the beast. ";
N30 = "He heads forward with the crowd, his head bobbing around fervently in search of the green beast. Suddenly it is behind him. The boy is dragged off by the ogre into the swamp. ";
N31 = "The boy marches up to the ogre, a smile on his face, and opens his mouth to say hello when he is greeted with a swift kick to the stomach. He is left knocked out against a tree. You have failed.";
N32 = "The boy charges at the ogre, fists up, prepared for any attack. One small mistake. A boy can't beat an ogre. The ogre takes him out easily. You have failed.";
N33 = "The boy proceeds to charge into the battle on the side of the ogre. The two kick, leap, and punch, winning the battle! They are knighted as heroes of the court, and sent off to find the king's true love. The End.";
N34 = "The boy grabs himself a drink and some popcorn and finds himself a nice seat in the front of the stands. Blood and guts fly everywhere. He enjoys the king's spectacle so much, that he decides he shall become a citizen of this fine kingdom, Duloc, and live there for the rest of his days.";
N35 = "He stands on the sidelines and suddenly is greeted by a talking donkey, who introduces himself as... Donkey. The two charge into the battle on the side of the ogre and win the battle! They are knighted as heroes of the court, and sent off to find the king's true love. The End.";
N36 = "Unfortunately, traveling with pirates isn't all it is made out to be. There is little to eat and much disease. The boy develops scurvy and dies.";
N37 = "The tourists seem nice of course... and they are. However, they are definitely not navigators. The group gets lost at sea and resorts to cannibalism to survive. The boy is eaten first. ";
N38 = "The boy decides to travel with the merchants. After all, they are wealthy, and they traverse these seas all the time. Along the way, the merchants stop on the coast of a kingdom rich in precious metals. Here they are offered a great sum of gold to give the boy over as a worker in the mines. They agree. ";
N39 = "The cargo ship is nearly full, but the boy slips in by carrying on some of the boxes for the trip. The trip is fairly quick as the cargo needs to be taken directly to its new location. The boy arrives safely to a beautiful tropic. Here he decides to steal some of the goods and make his own wealth. The End. ";
N40 = "With his new bounty, the boy must choose where to go. ";
N41 = "Thanks to the tools provided by the kind and mysterious woman, the boy was able to survive the woods. He wandered, eventually to the leftbound cottage, where, dear reader, it shall now be known that his mother has been waiting, fearfully, for him to come home.";
N42 = "The boy bobbles towards the cottage, and out runs a woman. She grabs him up into her arms and gives him a kiss on the for head. This, dear reader, is his mother. That cottage is his home.";
N43 = "The little boy wanders off into the woods, but with nothing to guide him, no food to eat, no protection or warmth, he soon dies.";
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
var O20 = "the village. ";
var O21 = "the thicket. ";
var O22 = "run away. ";
var O23 = "forge on. ";
var O24 = "greet the ogre (friendly). ";
var O25 = "charge at the ogre (rude). ";
var O26 = "join the battle. ";
var O27 = "watch on the sidelines. ";
var O28 = "wait for a partner. ";
var O29 = "a love potion. ";
var O30 = "a suit of enchanted armor. ";
var O31 = "a good luck potion. ";
var O32 = "nectar and ambrosia. ";
var O33 = "continue down the road. ";
var O34 = "North into the mountains. ";
var O35 = "South towards the desert. "
var O36 = "West towards the lava and tar pits. "
var O37 = "Pirates. ";
var O38 = "Tourists. ";
var O39 = "Merchants. ";
var O40 = "Cargo. ";
var O41 = "left, towards the cottage. ";
var O42 = "right, into the woods. ";
var hasDragon = false;
var hasSword = false;
var hasAmbrosia = false;
var hasLove = false;
var hasLuck = false;
var hasArmor = false;
var hasGold = false;


var updateButtons = function(a,b,c,d){

    $('#button3').hide();
    $('#button4').hide();
    $('#button1').text(a);
    $('#button2').text(b);
    $('#button3').text(c);
    $('#button4').text(d);

}

function newFunction(a) {
    return 10;
}

function changeImg(a){
    var pic;
    
    document.getElementById("img"+a).src = pic;
}
