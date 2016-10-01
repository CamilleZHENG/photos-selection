"use strict";
/*DONNEES*/
var photos;
var num;

/*FONCTIONS*/
function selectPhoto(){

	/*Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable
     * this représente l'objet DOM qui a déclenché l'évènement.
     *
     * Il s'agit donc de la balise <li> sur laquelle on a cliqué.
     * On active ou on désactive la classe selected du <li> sur lequel on a cliqué.
		var li = this;
     */

	this.classList.toggle("selected");
	/*Ma méthode: is 'this' (li qui contient la photo) contient classe name 'sélected', 
	c'est à dire que cette photo vient d'être sélectionnée, il faut incrémenter le nombre de photo sélectionnée*/
	
	if(this.classList.contains("selected")){
		num.textContent = parseFloat(num.textContent,10) + 1;
	}
	else{
		num.textContent = parseFloat(num.textContent,10) - 1;
	}
	
	//Méthode JM:
	/*
	var selectedPhotos = document.querySelectorAll('#photo-list li.selected');
	//Recherche de toutes les balises <li> sélectionnées (classe selected).
	num.textContent = selectedPhotos.length;
	//Mise à jour du nombre total de photos sélectionnées.
	*/
	
}

function onMouseOver(){
	this.classList.add("survol");
}
function onMouseLeave(){
	this.classList.remove("survol");
}

/*CODE PRINCIPAL*/
photos = document.querySelectorAll('ul li');
num = document.querySelector("em");

for(var i = 0; i < photos.length; i++){
	photos[i].addEventListener('click', selectPhoto);
	photos[i].addEventListener('mouseover', onMouseOver);
	photos[i].addEventListener('mouseleave', onMouseLeave);
}

