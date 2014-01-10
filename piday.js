var PIDAY = PIDAY || (function() {

var index = 0,
    num_tries,
    MAX_NUM_TRIES = 2,
    digit_wanted,
    digit_written,
    pi_digits_field,
    num_tries_field,
    MESSAGES = [ "Acabou o teu jogo!", "Só tens mais uma tentativa!", "Tens duas tentativas."],
    COLORS = [ "red", "yellow", "lightgreen"],
    PI_DECIMALS = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049",

    new_game = function( digits, tries){
      num_tries = MAX_NUM_TRIES;

      pi_digits_field = document.getElementById(digits),
      num_tries_field = document.getElementById(tries),
      feedback( num_tries_field, num_tries);
      pi_digits_field.value = "";
      index = 0;
    },

    new_try = function(){
        var right_portion = (pi_digits_field.value).substring( 0, index);
        pi_digits_field.value = right_portion;
        pi_digits_field.focus();

        feedback( num_tries_field, num_tries);
    },

    onlyDigits = function(event){
        console.log(event);
        var key_code = event.keyCode;
        return isDigit(key_code);
    },

    isDigit = function(key) {
        if (key >= 48 && key <=57)
            return true;
        return false;
    },
   
    validateDigits = function(event) {
        var key_code = event.keyCode;
        if (isDigit(key_code)) {
            digit_wanted = PI_DECIMALS.substring( index, index + 1);
            digit_written = (pi_digits_field.value).substring( index, index + 1); 
            if (digit_wanted == digit_written) {
                index += 1;
                return true;
            } else {
                num_tries -=1;
                feedback( num_tries_field, num_tries);

                if (num_tries == 1) {
                    alert('Tens mais uma tentativa: acertaste até ao dígito ' + index + '!');
                    new_try();
                } else {
                    alert('Acabou o teu jogo, parabéns: acertaste até ao dígito ' + index + '!');
                    new_game( 'pi_digits', 'num_tries');
                }
                return false;
            }
        }
        return false;
    },

    feedback = function(f, tries) {
      f.style.background = COLORS[tries];
      updateText( f, MESSAGES[tries]);
    },

    updateText = function(el,txt) {
      if(el.firstChild) el.removeChild(el.firstChild);
      el.appendChild(document.createTextNode(txt));
    };

  return {
    new_game: new_game,
    onlyDigits: onlyDigits,
    validateDigits: validateDigits
  };
}());
