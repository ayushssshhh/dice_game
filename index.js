document.querySelector("button").addEventListener("click", play)

function play() {
    //for player 1
    var randomNumber1 = Math.floor(Math.random() * 5) + 1;  //choosing random dice value

    //chnaging img a/ random no.
    switch (randomNumber1) {
        case 1:
            document.getElementsByTagName("img")[0].setAttribute("src", src = "images/dice1.png");
            break;

        case 2:
            document.getElementsByTagName("img")[0].setAttribute("src", src = "images/dice2.png");
            break;

        case 3:
            document.getElementsByTagName("img")[0].setAttribute("src", src = "images/dice3.png");
            break;

        case 4:
            document.getElementsByTagName("img")[0].setAttribute("src", src = "images/dice4.png");
            break;

        case 5:
            document.getElementsByTagName("img")[0].setAttribute("src", src = "images/dice5.png");
            break;

        case 6:
            document.getElementsByTagName("img")[0].setAttribute("src", src = "images/dice6.png");
            break;

    }


    //for player 2
    var randomNumber2 = Math.floor(Math.random() * 5) + 1;  //choosing random dice value

    //chnaging img a/ random no.
    switch (randomNumber2) {
        case 1:
            document.getElementsByTagName("img")[1].setAttribute("src", src = "images/dice1.png");
            break;

        case 2:
            document.getElementsByTagName("img")[1].setAttribute("src", src = "images/dice2.png");
            break;

        case 3:
            document.getElementsByTagName("img")[1].setAttribute("src", src = "images/dice3.png");
            break;

        case 4:
            document.getElementsByTagName("img")[1].setAttribute("src", src = "images/dice4.png");
            break;

        case 5:
            document.getElementsByTagName("img")[1].setAttribute("src", src = "images/dice5.png");
            break;

        case 6:
            document.getElementsByTagName("img")[1].setAttribute("src", src = "images/dice6.png");
            break;

    }

    var win;

    if (randomNumber1 > randomNumber2) {
        win = 1;
    } else {
        //win = randomNumber1 == randomNumber2 ? 0 : 2;
        if (randomNumber1 < randomNumber2) {
            win = 2;
        } else {
            win = 0;
        }
    }

    switch (win) {
        case (1):
            document.querySelector("h1").innerHTML = "🔥 PLAYER 1 WIN";
            break;

        case (2):
            document.querySelector("h1").innerHTML = "PLAYER 2 WIN 🔥";
            break;

        case (0):
            document.querySelector("h1").innerHTML = "DRAW 🤷‍♂️";
            break;

    }
}
