var a = prompt('Podaj wartość "a": ');
var b = prompt ('Podaj wartość "b": ');
var value = (a * a) + (2 * a * b) - (b * b);

alert('Wynik działania (a * a) + (2 * a * b) - (b * b) = ' + value);
console.log('Wynik działania (a * a) + (2 * a * b) - (b * b) = ' + value);

if (value > 0) {
    alert('Wynik działania jest dodatni');
    console.log('Wynik działania jest dodatni');
  } else if (value < 0) {
    alert('Wynik działania jest ujemny');
    console.log('Wynik działania jest ujemny');
  } else {
  	alert('Wynik jest równy zero');
  	console.log('Wynik jest równy zero');
  }