document.getElementById('submit').addEventListener('click', divisionOfNumbers); //<--Permet d'activer la fonction divisionOfNumbers lors d'un clic sur le bouton nommé submit dans le fichier HTML.
function divisionOfNumbers() {
  //Déclaration des variables.
  var numberOne = document.getElementById('firstNumber').value;
  var numberTwo = document.getElementById('secondNumber').value;
  //Si les valeurs ne sont pas des nombres (is NaN) alors un message d'erreur apparait sinon c'est le résultat qui apparait.
  if((isNaN(numberOne) == false) && (isNaN(numberTwo) == false)){
    var rest = numberOne % numberTwo;
    alert(rest);
    }else{
    alert('Veuillez entrer des nombres!');
  }
}
