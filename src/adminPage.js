window.Music = JSON.parse(localStorage.Music);


function ADDaDVD() {

    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Cadastrar Música</h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><br/><select class='form-control form-control-lg' id='MusicGender' onmouseout='ADDaAUTHORlist()'><option>SELECIONE O GÊNERO</option></select><br/><select class='form-control form-control-lg' id='MusicAuthor'><option>SELECIONE O AUTOR</option></select>"
    ADDaGENDERlist()



}

function ADDaGENDERlist() {
    for (var gender in Music.gender) {
        $('#MusicGender').append('<option>' + gender + '</option>');
    }
}

function ADDaAUTHORlist() {
    $('#MusicAuthor').empty()
    var thiss = document.getElementById('MusicAuthor')
    thiss.innerHTML = "<option>SELECIONE O AUTOR</option>"
    var thisMusic = document.getElementById('MusicGender').value
    var Author = Music.gender[thisMusic].authors
    Author.forEach(element => {
        $('#MusicAuthor').append('<option>' + element + '</option>');
    });

}

function SEARCHaDVD() {

    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Consultar Música</h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><br/><select class='form-control form-control-lg' id='MusicGender'><option>SELECIONE O GÊNERO</option></select><br/><select class='form-control form-control-lg' id='MusicAuthor'><option>SELECIONE O AUTOR</option></select>"
    ADDaGENDERlist()
    ADDaAUTHORlist()
}




//"<h1 class='text-primary lg'>Sound Paradise</h1> <br/><h1 class='text-primary sm'> Cadastrar Música</h1> <br/> <br/>
//<input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><br/>
//<select class='form-control form-control-lg' id='MusicGener'><option>SELECIONE O GÊNERO</option></select>"