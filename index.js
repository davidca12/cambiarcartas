window.onload = function () {

    function RandomNum(min, max) {
        return Math.floor(Math.random() * ((max - min) + 1) + min);
    }

    let palo = "";
    let letra = "";

    let paloRandom = RandomNum(1, 4);
    let letraRandom = RandomNum(1, 13);
    obtenerLetra(letraRandom);
    obtenerPalo(paloRandom);

    function obtenerPalo(num) {

        switch (num) {
            case 1:
                let hearts = document.querySelectorAll('.palo');
                
            for( heart in hearts){
                hearts[heart].classList.add('heart');
                hearts[heart].innerHTML = "&#9829";

            }
                return palo += "heart";
                break;
            case 2:
                 let spades = document.querySelectorAll('.palo');


                  for( spade in spades){

                spades[spade].classList.add('spade');
                spades[spade].innerHTML = "&#9824";
                  }
                return palo += "spade";
                break;
            case 3:

             let clubs = document.querySelectorAll('.palo');


                  for( club in clubs){

                    clubs[club].classList.add('spade');
                clubs[club].innerHTML = "&#9827";

                  }

                return palo += "club";
                break;
            case 4:

             let diamonds = document.querySelectorAll('.palo');
                  for( diamond in diamonds){

                    diamonds[diamond].classList.add('diamond');
                    diamonds[diamond].innerHTML = "&#9830";
                     }
                return palo += "diamond";
                break;
                return;
        }
    }

    function obtenerLetra(num) {
        switch (num) {
            case 11:
                document.querySelector('.letra').innerHTML = "J";
                return letra = "J";
                break;
            case 12:
                document.querySelector('.letra').innerHTML = "Q";
                return letra = "Q";
                break;
            case 13:
                document.querySelector('.letra').innerHTML = "K";
                return letra = "K";
                break;

            default:
                document.querySelector('.letra').innerHTML = num;
                return letra = num;
        }
    }
}
