var PiDay = {

// Algorithm -- in ruby
// PI = "314159265...
// current_digit = 0
// max_tries = 2

// while max_tries > 0
//   puts "Numero de tentativas restantes: #{max_tries}"

//   begin
//     current_digit +=1
//     puts "Insira o digito na posicao #{current_digit}:"
//     d = gets
//     d.chomp!
//   end until PI[current_digit-1] != d
//   max_tries -= 1
//   current_digit -= 1
// end

var index = 0,
    num_tries = 2,
    wanted,
    written,
    pi_digits_field,
    num_tries_field; 

var PI = "141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049";

var messages = new Array();
messages[0] = "Acabou o teu jogo!";
messages[1] = "Só tens mais uma tentativa!";
messages[2] = "Tens duas tentativas.";

var colors = new Array();
colors[0] = "red";
colors[1] = "yellow";
colors[2] = "lightgreen";

var init = function(){
  num_tries = 2;
  pi_digits_field = document.getElementById( "pi_digits");
  num_tries_field = document.getElementById( "num_tries");

	feedback( num_tries_field, num_tries);
  pi_digits_field.value = "";
  index = 0;
};

var clear = function(){
	var right_portion = (pi_digits_field.value).substring( 0, index);
  pi_digits_field.value = right_portion;
  pi_digits_field.focus();

	feedback( num_tries_field, num_tries);
};

var onlyDigits = function(event){
	console.log(event);
  var key_code = event.keyCode;
  return isDigit(key_code);
};

var isDigit = function(key) {
	if (key >= 48 && key <=57)
    return true;
  return false;
};
   
var validateDigits = function(event) {
  var key_code = event.keyCode;
  if (isDigit(key_code)) {
    wanted = PI.substring( index, index + 1);
    written = (pi_digits_field.value).substring( index, index + 1); 
    if (wanted == written) {
      index += 1;
      return true;
    } else {
      num_tries -=1;
			feedback( num_tries_field, num_tries);

	    if (num_tries == 1) {
        alert('Tens mais uma tentativa: acertaste até ao dígito ' + index + '!');
        clear();
      } else {
	      alert('Acabou o teu jogo, parabéns: acertaste até ao dígito ' + index + '!');
	      init();
      }
      return false;
    }
  }
  return false;
};

var feedback = function(f, tries) {
	f.style.background = colors[tries];
	updateText( f, messages[tries]);
	
};

var updateText = function(el,txt) {
	if(el.firstChild) el.removeChild(el.firstChild);
	el.appendChild(document.createTextNode(txt));
};



};
