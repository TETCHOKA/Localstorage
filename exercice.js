




var bouton = document.querySelector('button');
bouton.addEventListener('click', function(){
    //var div = document.querySelector('body'); 
    var block = document.querySelector('.block');
    //var autre_div = document.createElement('div')
    //div.appendChild(autre_div);
    var formulaire = document.createElement("form");
    //autre_div.appendChild(formulaire);
    formulaire.innerHTML = 'Nom :<br><br>' +
            '<input type="text" value="" id="nom" name="nom"><br><br>'+
            'Prenom:<br><br>'+
            '<input type="text" value="" id="prenom" name="prenom"><br><br>'+
            '<button onclick="Submit()">soumetre</button>' ;
            block.appendChild(formulaire);
            //div.appendChild(formulaire);          
});

// function Submit(){

// var nom = document.querySelector('input[name="nom"]').value;
// var prenom = document.querySelector('input[name="prenom"]').value;

// const information = {
//     nom:nom,
//     prenom:prenom
// }

// localStorage.setItem('formData', JSON.stringify(information));

// }




