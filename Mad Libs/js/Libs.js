console.log("I'm Alive");



//generate text

function genStory(){
    console.log("Story is being written");

    //Variables
    var ocean = document.getElementById('oceanName').value;

    var adj1 = document.getElementById('adjective1').value;
    var adj2 = document.getElementById('adjective2').value;
    var adj3 = document.getElementById('adjective3').value;
    var adj4 = document.getElementById('adjective4').value;
    var adj5 = document.getElementById('adjective5').value;
    var adj6 = document.getElementById('adjective6').value;
    var adj7 = document.getElementById('adjective7').value;
    var adj8 = document.getElementById('adjective8').value;
    var adj9 = document.getElementById('adjective9').value;
    var adj10 = document.getElementById('adjective10').value;
    var adj11 = document.getElementById('adjective11').value;

    var n1 = document.getElementById('noun1').value;
    var n2 = document.getElementById('noun2').value;
    var n3 = document.getElementById('noun3').value;
    var n4 = document.getElementById('noun4').value;
    var n5 = document.getElementById('islandName').value;
    var n6 = document.getElementById('noun6').value;
    var n7 = document.getElementById('noun7').value;
    var n8 = document.getElementById('noun8').value;
    var n9 = document.getElementById('noun9').value;
    var n10 = document.getElementById('noun10').value;
    var n11 = document.getElementById('noun11').value;

    var plN1 = document.getElementById('plNoun1').value;
    var plN2 = document.getElementById('plNoun2').value;
    var plN3 = document.getElementById('plNoun3').value;
    var plN4 = document.getElementById('plNoun4').value;
    var plN5 = document.getElementById('plNoun5').value;
    var plN6 = document.getElementById('plNoun6').value;
    var plN7 = document.getElementById('plNoun7').value;

    var v1 = document.getElementById('verb1').value;
    var v2 = document.getElementById('verb2').value;
    var v3 = document.getElementById('verb3').value;
    var v4 = document.getElementById('verb4').value;
    var v5 = document.getElementById('verb5').value;
    var v6 = document.getElementById('verb6').value;
    var v7 = document.getElementById('verb7').value;

    var captain = document.getElementById('captainName').value;
    var num = document.getElementById('number').value;
    var place = document.getElementById('place').value;

    var emotion = document.querySelector('input[name="Emotion"]:checked').value;


    //Print story
    document.getElementById("story").innerHTML = "Once upon a time, in the " + adj1 + " waters of the " + ocean + " , there sailed a fearsome pirate ship named the " + adj2 + " " + n1 + ". Captain " + captain + ", a " + adj3 + " and " + adj4 + " pirate, led the crew with " + emotion + " in their hearts. Their ship was armed with " + num + " " + n2 + " cannons, ready to " + v1 + " any ship that crossed their path. The crew was a rowdy bunch of " + plN1 + ", known for their " + adj5 + " " + plN2 + ". One day, the pirates received a " + n3 + " from a " + adj6 + " " + n4 + " in a " + place + ", who claimed to know the whereabouts of a hidden treasure on " + n5 + ". The crew hoisted the " + n6 + " and set sail toward the mysterious island. As they approached the island, they encountered a " + adj7 + " " + n7 + " and had to " + v2 + " through treacherous waters. When they finally reached the island, they found a " + adj8 + " " + n8 + " filled with " + plN3 + ". The pirates were overjoyed and began " + v3 + " their newfound riches. But their celebration was short-lived when they heard the sound of " + plN4 + " in the distance. A rival pirate ship, the " + adj9 + " " + n9 + ", was " + v4 + " toward them. Captain " + captain + " yelled, \"Man the " + plN5 + " and prepare to " + v5 + "!\" A fierce battle ensued as the two ships exchanged " + plN6 + " and " + v6 + ". In the end, the " + adj2 + " " + n1 + " emerged victorious, and the rival pirates " + v7 + " in defeat. With the treasure in their possession, the crew of the " + adj2 + " " + n1 + " set sail once again, ready for their next " + adj10 + " adventure on the high " + n10 + ". And so, their pirate " + n11 + " continued, full of " + adj11 + " twists and " + plN7 + ".";
}