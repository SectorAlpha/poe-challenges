'use strict';

/*
Requirements for PoE:

-Pick at least one "substantial" challenge and some number of additional challenges
or extras
-No picking multiple challenges of the same type, to avoid unresovable conflicts
-

*/


var resultCount = 0;

//Init lists of challenges and types that are prerequisites to dependent challenges
var extendableChallengeIds = []
var extendableChallengeTypes = []
for(var tIter = 0; tIter < dependentChallenges.length; tIter++) {
    extendableChallengeIds = extendableChallengeIds.concat(dependentChallenges[tIter].prerequisiteIds);
    extendableChallengeTypes = extendableChallengeTypes.concat(dependentChallenges[tIter].prerequisiteTypes);
}
//These lists might in theory have repeats. Doesn't matter much.

// Apparently this is a jquery thing
$(function(){
    var chalElem;

    //Interate over the total array of challenge objects defined in data.js
    for(var i = 0; i < challenges.length; i++) {

        //Create a string of an html list item labelled with the challenge's name
        chalElem = '<li><label>' + challenges[i].name + '</label></li>';

        //If "Weapon Type:" is in the challenge name
        if(challenges[i].name.indexOf('Weapon Type:') >= 0) {
            //jquery call: append the chalElem created above to "#chals3"
            $('#chals3').append(chalElem);
        }
        //If "Class" or "Max Level:" or "Cosplay:" is in the challenge name
        else if(challenges[i].name.indexOf('Class:') >= 0 || challenges[i].name.indexOf('Max Level:') >= 0 || challenges[i].name.indexOf('Cosplay:') >= 0) {
            $('#chals2').append(chalElem);
        }
        else {
            $('#chals1').append(chalElem);
        }
    }
    //End of loop

    //Iter over the contents of the set of difficulties
    for(var key in difficulties) {
        var $option = $('<option value="' + key + '">' + difficulties[key] + '</option>');
        if (difficulties[key] === 'Harder') {
            $option.attr('selected', 'selected');
        }
        $('#chalDifficulty').append($option);
    }

    $('#togglechals').click(function(){
        $('#challenges').slideToggle();
    });
});

//The all-important function that selects challenges
function randomize() {
    console.log("--Getting new challenge set--")
    //performance takes a hit but need to add to this array later
    var availChals = challenges.slice()
    var chosenChals = [];
    var chosenTypes = [];
    var excludedChals = [];
    var randNums = [];
    var difficultyTotal = 0;
    var iterLimit = 10000;
    var bonusActive = false
    var randNum, chal, chosenDifficulty, difficultyOkay, typesOkay, compatOkay, chosenChal;

    chosenDifficulty = parseInt($('#chalDifficulty').val());
    console.log("Chosen difficulty is " + chosenDifficulty)

    resultCount++;

    $('#output').prepend('<div id="cr' + resultCount + '" class="cr-result"><b>Challenge Run #' + resultCount + ':</b><ul></ul></div>');

    //While we haven't exceeded the iteration limit
    for(var x = 0; x < iterLimit; x++) {
        //console.log("Iteration " + (x+1))
        typesOkay = true;
        compatOkay = true;
        difficultyOkay = true;

        //Random index of challenges
        randNum = Math.floor((Math.random() * availChals.length));

        // if (x == 0){
        //     randNum=10
        // }

        //If the random number has NOT already been selected
        if($.inArray(randNum, randNums) < 0) {
            chosenChal = availChals[randNum]
            //Check that the type has not already been selected
            for(var tIter = 0; tIter < chosenChal.types.length; tIter++) {
                if($.inArray(chosenChal.types[tIter], chosenTypes) >= 0) {
                    typesOkay = false;
                    break;
                }
            }

            //Check that the difficulty hasn't exceeded the limit
            if((difficultyTotal + parseInt(chosenChal.difficulty)) > chosenDifficulty){
                difficultyOkay = false;
            }

            //Check that the id of the challenge doesn't match any ids that have been excluded by previous challenges
            if($.inArray(chosenChal.id, excludedChals) >= 0) {
                compatOkay = false;
            }


            if(typesOkay && difficultyOkay && compatOkay) {
                //Add the random number to the randNum list and the challenge to the challenge list & increment the total difficulty
                console.log("Adding challenge "+ chosenChal.id)
                randNums.push(randNum);
                chosenChals.push(chosenChal);
                difficultyTotal += chosenChal.difficulty;

                //Find out if the chosen challenge can be extended
                var extendable = false;
                if($.inArray(chosenChal.id, extendableChallengeIds) >= 0){
                    extendable = true;
                }
                else {
                    for(var tIter = 0; tIter < chosenChal.types.length; tIter++){
                        if($.inArray(chosenChal.types[tIter], extendableChallengeTypes) >= 0){
                            extendable = true;
                        }
                    }
                }
                //If the chosen challenge can be extended, find out what extensions are possible.
                //TODO
                if (extendable) {
                    //console.log("Attempting to extend " + chosenChal.id)
                    var possibleExtensions = [];
                    for(var tIter = 0; tIter < dependentChallenges.length; tIter++){
                        var depen = dependentChallenges[tIter];
                        //console.log("Checking dependent challenge " + depen.id)

                        difficultyOkay = true;
                        typesOkay = true;
                        compatOkay = true;

                        //Same three checks as above
                        //TODO make these separate functions for elegance
                        for(var uIter = 0; uIter < chosenChal.types.length; uIter++) {
                            if($.inArray(chosenChal.types[vIter], chosenTypes) >= 0) {
                                typesOkay = false;
                                break;
                            }
                        }
                        if((difficultyTotal + parseInt(chosenChal.difficulty)) > chosenDifficulty){
                            difficultyOkay = false;
                        }
                        if($.inArray(chosenChal.id, excludedChals) >= 0) {
                            compatOkay = false;
                        }

                        if (typesOkay && difficultyOkay && compatOkay){
                            //console.log("Dependent challenge " + depen.id + " suitable, checking if correct.")
                            if ($.inArray(chosenChal.id, depen.prerequisiteIds) >= 0 ) {
                                possibleExtensions.push(depen);
                            }
                            for(var vIter = 0; vIter < chosenChal.types.length; vIter++) {
                                if ($.inArray(chosenChal.types[vIter], depen.prerequisiteTypes) >= 0 ) {
                                    possibleExtensions.push(depen);
                                }
                            }
                        }
                        else {
                            //console.log("Dependent challenge " + depen.id + " unsuitable")
                        }
                    }
                    if (possibleExtensions.length >= 1){
                        //console.log("possible extensions available, rolling to use")
                        //Multiply by constant to include the failure chance
                        var roll = Math.floor(2*Math.random()*possibleExtensions.length)
                        if (roll < possibleExtensions.length) {
                            chosenChals.push(possibleExtensions[roll]);
                            difficultyTotal += possibleExtensions[roll].difficulty;
                        }
                    }

                }


                //Put each of the challenge's types into the chosen types
                chosenTypes = chosenTypes.concat(chosenChal.types)

                //Put each of the challenge's exclusions into the excluded list
                excludedChals = excludedChals.concat(chosenChal.incompatibilities)

            }
        }

        //allow a little wiggle-room
        if(difficultyTotal == chosenDifficulty || difficultyTotal == chosenDifficulty -1) {
            // at this point everything has been satisfied, the run has been created and we're ready to display the results
            console.debug("difficultyTotal: " + difficultyTotal);
            console.debug("chosenDifficulty: " + chosenDifficulty);
            break;

        //If there's only a little room to spare, allow Bonus Challenges to roll
        } else if (chosenDifficulty - difficultyTotal < 4 && !bonusActive) {
            availChals = availChals.concat(bonusChallenges);
            bonusActive = true;
        }

        if(x == iterLimit-1) {
            console.log("Randomization iteration limit reached.");
        }
        //else continue
    }
    //End loop

    //iterate over the chosen challenges
    for(var i = 0; i < chosenChals.length; i++) {
        chal = chosenChals[i];

        $('#cr' + resultCount + ' ul').append('<li class="' + getDifficultyClass(chal) + '"><span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="' + i + '" title="' + (chal.description || 'Self explanatory.') + '">' + chal.name + '</span></li>');
    }
    $('#cr' + resultCount).hide().slideDown();

    $(document).foundation();

}

//This gets the difficulty class for the css to assign formatting to
//(Presently, only colour is altered, and only difficulty matters)
//optional TODO: find a way to directly convert difficulty to colour, like a heatmap
function getDifficultyClass(challenge) {
    if (challenge.id == 'no-fish'){
        return "vvhard"
    }

    diffVal = challenge.difficulty
    if (diffVal <= 4){
        return "easy";
    }
    else if (diffVal <= 8){
        return "medium";
    }
    else if (diffVal <= 14){
        return "hard";
    }
    else if (diffVal <= 20){
        return "vhard";
    }
    else {
        return "vvhard";
    }
}
