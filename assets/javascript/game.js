
$(document).ready(function () {

    // make variables global to the runtime of our application
    var healthPoints, attackPower, counterAttackPower, isCharacterChosen, isAttacked, isDefeated;
   
    // function to initialize our game. 
    function initializeRPG() {
        healthPoints = "";
        attackPower = "";
        counterAttackPower = "";
        isCharacterChosen = false;
        isEnemyChosen = false;
        isAttacked= false;
        isDefeated= false;    
    }

    // add an on click listener to all elements that have the class 'number'
    $('.characters').on('click', function () {
        //check if user already picked 
        if (isCharacterChosen) return;

        $('#Eleven').on('click', function () {
            if (isCharacterChosen) return;

             $('#Hopper').appendTo('#Enemy1');
             $('#characterHopper').attr('src', "assets/images/attackChiefHopper.png");

             $('#Demogorgon').appendTo('#Enemy2');
             $('#characterDemogorgon').attr('src',"assets/images/attackDemogorgon.png");

             $('#Brenner').appendTo('#Enemy3');
             $('#characterBrenner').attr('src', "assets/images/attackBrenner.png");
             
            isCharacterChosen = true;
        });


        $('#Hopper').on('click', function () {
            if (isCharacterChosen) return;

             $('#Eleven').appendTo('#Enemy1');
             $('#characterEleven').attr('src',"assets/images/attackEleven.png");

             $('#Demogorgon').appendTo('#Enemy2');
             $('#characterDemogorgon').attr('src',"assets/images/attackDemogorgon.png");

             $('#Brenner').appendTo('#Enemy3');
             $('#characterBrenner').attr('src', "assets/images/attackBrenner.png");
            isCharacterChosen = true;
        });

        $('#Demogorgon').on('click', function () {
            if (isCharacterChosen) return; 

             $('#Eleven').appendTo('#Enemy1');
             $('#characterEleven').attr('src',"assets/images/attackEleven.png");

             $('#Hopper').appendTo('#Enemy2');
             $('#characterHopper').attr('src', "assets/images/attackChiefHopper.png");

             $('#Brenner').appendTo('#Enemy3');
             $('#characterBrenner').attr('src', "assets/images/attackBrenner.png");

            isCharacterChosen = true;
        });

        $('#Brenner').on('click', function () {
            if (isCharacterChosen) return;
            
             $('#Eleven').appendTo('#Enemy1');
             $('#characterEleven').attr('src',"assets/images/attackEleven.png");

             $('#Hopper').appendTo('#Enemy2');
             $('#characterHopper').attr('src', "assets/images/attackChiefHopper.png");

             $('#Demogorgon').appendTo('#Enemy3');
             $('#characterDemogorgon').attr('src',"assets/images/attackDemogorgon.png");

            isCharacterChosen = true;
        });
    });


    // add an on click listener to all elements that have the class 'operator'
  


    // add an on click listener to all elements that have the class 'equal'
    $('. ').on('click', function () {
        
    });
    // add an on click listener to all elements that have the class 'clear'
    $('.clear').on('click', function () {
        // call initializeRPG so we can reset the state of our app
        initializeRPG();
    });

    // call initializeRPG so we can set the state of our app
    initializeRPG();
});
