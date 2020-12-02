//Code césar - cryptographie
//Créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction doit renvoyer une chaine cryptée.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : simplon
//    chaine cryptée : tjnqmpo
//
//    Vous devez crypter dataNonCrypte1 et dataNonCrypte2
//courage ! :)

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const dataNonCrypte1 = "simplon";
const dataNonCrypte2 = "zoo"; //la lettre 'z' deviendra un 'a';

const dataCrypted = (data) => {
    // la variable résultat attendu
    let res = '';
    // parcour du caractére de chaine
    for (let i = 0; i < data.length; i++) {
        // récupérer la caractere dans alpha
        alpha = data[i];
        // stoker le location de caractére de alpha sur l'alphabet sur id
        id = alphabet.indexOf(alpha)
            // si id est plus 25
        if (id <25){
                // ajouter chaque lettre un cran vers la droite.
             res+= alphabet[id+1];
         }
        // si id est moin 25
        else{
            // ajouter le premiere letter de alphabet
            res+=alphabet[0];
         }
    }
    // retouner chaine cryptée
    return res; 
};
// afficher chaine cryptée de dataNonCrypte1 et dataNonCrypte2
console.log(dataCrypted(dataNonCrypte1));
console.log(dataCrypted(dataNonCrypte2));


//A l'inverse, coder une fonction qui décrypte une chaine caractère sur le même principe.
const chaine1 = "bf dsbjot qbt ebwbodfs mfoufnfoub dsbjot tfvmfnfou ef ubssfufsbqspwfscf dijopjt";
console.log(chaine1[1]);
const deCrypted = (data) => {
    // la variable résultat attendu
    let res = '';
    // parcour du caractére de chaine
    for (let i = 0; i < data.length; i++) {
        // récupérer la caractere dans alpha
    alpha = data[i];
    // si il y a une space
    if (alpha ==" "){
        res+=" ";
    }
        // si false
    else {
        // stoker le location de caractére de alpha sur l'alphabet sur id
        id = alphabet.indexOf(alpha);
            //si id est plus 0
            if (id >0){
            // ajouter chaque lettre un cran vers la gauche
            res+= alphabet[id-1];
        }
            else{
            // ajouter le deniere letter de alphabet
             res+=alphabet[26];
         }
         }
     }
    // retouner chaine cryptée
    return res; 
};
   console.log(deCrypted(chaine1));
