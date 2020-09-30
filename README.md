# lab-03-rock-paper-scissors

HTML elments needed

    3 radio buttons
        -rock
        -paper
        -scissors

    submit button
    
    Outputs
        -wins
        -losses
        -ties
    
    img gifs
        -pc gifs
            -left rock gif
            -left paper gif
            -left scissor gif
        -npc gifs
            -right rock gif
            -right paper gif
            -right scissor gif

JS var needed

    get user input on radio buttons

    generate random number between 1-3 for npc
        -rock = 1
        -paper = 2
        -scissors = 3

    on click => submit button
        -if user selects rock => left rock gif
        -if user selects paper => left paper gif
        -if user selects scissors => left scissors gif

        -if random number = 1 => right rock gif
        -if random number = 2 => right paper gif
        -if random number = 3 => right scissors gif

    youWon
        -rock beats scissors
        -paper beats rock
        -scissors beats paper

        -youWon counter goes up
    
    youLost
        -rock loses to paper
        -paper loses to scissors
        -scissors loses to rock
        
        -youLost counter goes up

    youtied
        -rock ties rock
        -paper ties paper
        -scissors ties scissors

        -youTied counter goes up

CS needed