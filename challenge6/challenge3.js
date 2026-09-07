function calcul(longueur , largeur)
{
const rectangle = {
	lon : longueur ,
	lar : largeur ,
}; 
	let area = rectangle.lon * rectangle.lar;
	console.log(area);
}
calcul(5 , 5);