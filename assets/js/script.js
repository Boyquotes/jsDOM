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
		divs[i].classList.add('rouge');
	}

	
//    alert('Element n° ' + (i + 1) + ' : ' + divs[i]);
}

var liste = document.getElementsByTagName('li');
alert(liste.length);
var ul = document.getElementById('mesElements');

console.log(ul);
console.log(ul.childNodes);
console.log(ul.childNodes[3]);
console.log(ul.children);

var count = 0;
for(var i, li; li=ul.childNodes[i]; i++) {
   //if(li.tagName=='LI'){
	console.log(li.tagName);
	count++;
      // traitement des li
   //}
}
alert(count);


