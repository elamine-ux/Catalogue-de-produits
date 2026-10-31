const produits = [
	{id:1 ,nom:'Clavier',categorie:'Accessiores',prix:120,stock:5},
	{id:2 ,nom:'Souris',categorie:'Accessiores',prix:80,stock:8},
    {id:3 ,nom:'Ecran',categorie:'Informatique',prix:900,stock:0},
    {id:4 ,nom:'Casque',categorie:'Accesoires',prix:240,stock:3}
];
console.log(produits);
console.log('    Catalogue   ')
produits.map((i) => {
	console.log(`${i.nom} : ${i.prix} MAD`);
});

const d = produits.filter(
    produit => produit.stock > 0
);

console.log('    Produits disponibles    ');
console.log(`Nombre de produits disponibles : ${d.length}`);

d.map((produits) => {
	console.log(produits.nom);
});
const v = produits.reduce(
	(total, r) => total + r.prix * r.stock, 0
)
console.log('Valeur totale du stock :',v ,'MAD');

if (d.length === 0) {
	console.log("Aucun produit disponible.");
} else {
	const moin = d.reduce(
		(min, produit) =>
		produit.prix < min.prix ? produit : min
	);
	const { nom, prix } = moin;
	console.log(`Produit le moins cher : ${nom} (${prix} MAD)`);
}
function lignes(liste) {
	return liste.map((p) => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
}
lignes(produits).map((ligne) => {
	console.log(ligne);
});
const produitsDisponibles = (liste) =>
liste.filter((p) => p.stock > 0);

const moinsCher = (liste) => {
	const disponibles = produitsDisponibles(liste);
	
	if (disponibles.length === 0) {
		return 'Aucun produit disponible.';
	}
	
	return disponibles.reduce((min, p) =>
	p.prix < min.prix ? p : min
	);
};

const valeurStock = (liste) =>
liste.reduce((total, p) => total + p.prix * p.stock, 0);
console.log('Écran disponible ?', d.some((p) => p.nom === 'Écran'));
const stocksNuls = produits.map((p) => ({ ...p, stock: 0 }));
console.log(
	'Stocks nuls - disponibles :',
	produitsDisponibles(stocksNuls).length
);
console.log(
	'Stocks nuls - moins cher :',
	moinsCher(stocksNuls)
);
console.log(
	'Catalogue vide - valeur du stock :',
	valeurStock([])
);
const sourisPlusChere = produits.map((p) =>
p.nom === 'Souris' ? { ...p, prix: p.prix + 10 } : p
);
console.log(
	'Souris à 90 MAD - valeur :',
    valeurStock(sourisPlusChere),
        'MAD'
);
function estValide(produit) {
return (
Number.isFinite(produit.prix) && produit.prix >= 0 &&
Number.isFinite(produit.stock) && produit.stock >= 0
);
}
console.log('Données valides ?', produits.every(estValide));
console.log('Prix négatif valide ?', estValide({ prix: -5, stock: 2 }));
console.log('Stock "3" valide ?', estValide({ prix: 10, stock: '3' }))
