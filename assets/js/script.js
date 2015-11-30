	var texte = document.getElementById('monTexte').innerHTML;
console.log(texte);

	var longueur = texte.length;
console.log(longueur);

	var texte = document.getElementById('monTexte2').innerHTML;
console.log(texte);

	var longueur = texte.length;
console.log(longueur);

	var texte = document.getElementById('texte').innerHTML;
console.log(texte);

	var longueur = texte.length;
console.log(longueur);

var divs = document.getElementsByTagName('div');
c = divs.length; 
for (var i = 0; i < c ; i++) {
	var texte = divs[i].innerHTML;
console.log(texte);
	var longueur = texte.length;
console.log(longueur);

	if(longueur > 100){
console.log('trop long');
		texte = texte.substr(0, 100);
		texte += "...";
console.log(texte);
		divs[i].innerHTML = texte;
	}
//    alert('Element n° ' + (i + 1) + ' : ' + divs[i]);
}

var ul = document.ul.getElementsByTagName('li');

console.log(ul);
var c = ul.lenght;
alert(c);
for (var i=0;i < c; i++){
	console.log('un li');
}

