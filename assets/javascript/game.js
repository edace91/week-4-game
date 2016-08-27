
$(document).ready(function () {

    // make variables global to the runtime of our application
    var healthPoints, attackPower, counterAttackPower, isCharacterChosen, isEnemyChosen, isAttacked, isDefeated, hawkinsIndiana;
   
    // function to initialize our game. 
    function initializeRPG() {
        healthPoints = "";
        attackPower = "";
        counterAttackPower = "";
        isCharacterChosen = false;
        isEnemyChosen = false;
        isAttacked= false;
        isDefeated= false; 
        hawkinsIndiana=["Eleven","Hopper","Demogorgon","Brenner"];   
    }

    var statsEleven = {
        healthPoints: 120;
        attackPower: 7;
        counterAttackPower:11;
    }
    var statsHopper = {
        healthPoints: 100;
        attackPower: 6;
        counterAttackPower:9;
    }
    var statsDemogorgon = {
        healthPoints: 150;
        attackPower:8;
        counterAttackPower:10;
    }
    var statsBenner = {
        healthPoints:100;
        attackPower:5;
        counterAttackPower:8;
    }



    // add an on click listener to all elements that have the class 'number'
    $('.characters').on('click', function () {
        //check if user already picked 
        if (isCharacterChosen) return;

        $('.character').on('click', function(){
            if (isCharacterChosen) return;
            var hero = this.id;
            var townies=["Eleven","Hopper","Demogorgon","Brenner"]; 
            for( i = 0; i < townies.length; i++){

                if (hero != townies[i]){
                    
                    $('#'+ townies[i]).appendTo('.availableEnemies');
                    $('#character'+ townies[i]).attr('src', "assets/images/attack"+ townies[i]+".png");    
                }
            }
            isCharacterChosen = true;
        });
        //move characters to Enemy position if Brenner is chosen 
       /* $('#Brenner').on('click', function () {
            if (isCharacterChosen) return;

             $('#Eleven').appendTo('#Enemy1');
             $('#characterEleven').attr('src',"assets/images/attackEleven.png");

             $('#Hopper').appendTo('#Enemy2');
             $('#characterHopper').attr('src', "assets/images/attackChiefHopper.png");

             $('#Demogorgon').appendTo('#Enemy3');
             $('#characterDemogorgon').attr('src',"assets/images/attackDemogorgon.png");

            isCharacterChosen = true;
        });*/
    });
    $('.availableEnemies').on('click',function(){
        if (isEnemyChosen) return;
        $('.character').on('click', function(){
            if (isEnemyChosen) return;
            $(this).appendTo('#Defender');
            var nemesis = this.id;
            $('#character'+ nemesis).attr('src', "assets/images/defender"+ nemesis +".png"); 
            isEnemyChosen = true;

        });

    });

 
  


   
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
