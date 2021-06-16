window.Music = JSON.parse(localStorage.Music);


function REGISTaDVD() {

    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Cadastrar Música</h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><br/><select class='form-control form-control-lg' id='MusicGender' onclick='ADDaAUTHORlist()'><option>SELECIONE O GÊNERO</option></select><br/><select class='form-control form-control-lg' id='MusicAuthor'><option>SELECIONE O CANTOR</option></select><button class='btn btn-block btn-info' onclick='ADDaDVD()'>REGISTAR DVD</button>"
    ADDaGENDERlist()

}

function ADDaDVD() {
    var MusicAuthor = document.getElementById('MusicAuthor').value;
    var MusicGender = document.getElementById('MusicGender').value;
    var MusicName = document.getElementById('MusicName').value;
    if (MusicName != "" && MusicGender != "" && MusicAuthor != "") {
        Music.songs.forEach((item, indice) => {
            if (item.name == MusicName && item.author == MusicAuthor && item.gender == MusicGender) {
                alert("A MÚSICA " + MusicName + " JÁ EXISTE!!");
                Musicconfirm = false;
            } else {
                Musicconfirm = true;
            }

        });
        if (Musicconfirm == true) {
            Music.gender[MusicGender].songs.push(MusicName);
            Music.songs.push({ "name": MusicName, "author": MusicAuthor, "gender": MusicGender })
            localStorage.Music = JSON.stringify(Music);
            alert("A MÚSICA " + MusicName + " FOI ADICIONADA COM SUCESSO");
            REGISTaDVD();

        }
    }

}

function ADDaGENDERlist() {
    for (var gender in Music.gender) {
        $('#MusicGender').append('<option>' + gender + '</option>');
    }
}

function ADDaAUTHORlist() {
    $('#MusicAuthor').empty()
    var thiss = document.getElementById('MusicAuthor')
    thiss.innerHTML = "<option>SELECIONE O CANTOR</option>"
    var thisMusic = document.getElementById('MusicGender').value
    var Author = Music.gender[thisMusic].authors
    Author.forEach(element => {
        $('#MusicAuthor').append('<option>' + element + '</option>');
    });

}



var SEARCHthisDVD = {

    "SearchName": function() {
        var MusicAuthor = document.getElementById('MusicAuthor').value;
        var MusicGender = document.getElementById('MusicGender').value;
        var MusicName = document.getElementById('MusicName').value;

        if (MusicName != "") {

        }
    },
    "SearchGender": function() {
        var MusicAuthor = document.getElementById('MusicAuthor').value;
        var MusicGender = document.getElementById('MusicGender').value;
        var MusicName = document.getElementById('MusicName').value;

        if (MusicGender != "SELECIONE O GÊNERO") {

        }
    },
    "SearchAuthor": function() {
        var MusicAuthor = document.getElementById('MusicAuthor').value;
        var MusicGender = document.getElementById('MusicGender').value;
        var MusicName = document.getElementById('MusicName').value;

        if (MusicAuthor != "SELECIONE O CANTOR") {

        }
    }

}

function SEARCHaDVD() {

    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Consultar Música</h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><button class='btn  btn-info' onclick='SEARCHthisDVD.SearchName()'>PESQUISAR POR NOME</button><br/><br/><select class='form-control form-control-lg' id='MusicGender'><option>SELECIONE O GÊNERO</option></select><button class='btn  btn-info' onclick='SEARCHthisDVD.SearchGender()'>PESQUISAR POR GÊNERO</button><br/><br/><select class='form-control form-control-lg' id='MusicAuthor'><option>SELECIONE O CANTOR</option></select><button class='btn btn-info' onclick='SEARCHthisDVD.SearchAuthor()'>PESQUISAR POR AUTOR</button><button class='btn btn-block btn-info' onclick='SEARCHthisDVD.SearchAll()'>LISTA COMPLETA DE DVDs</button>"
    ADDaGENDERlist()

}

function REGISTaAUTHOR() {
    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Cadastrar Cantor </h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='AuthorName' placeholder='NOME DO CANTOR'><br/><select class='form-control form-control-lg' id='MusicGender'><option>SELECIONE O GÊNERO</option></select><button class='btn btn-block btn-info' onclick='ADDaAuthor()'>REGISTAR CANTOR</button>"
    ADDaGENDERlist()

}

function ADDaAuthor() {
    var AuthorName = document.getElementById('AuthorName').value;
    var GenderName = document.getElementById('MusicGender').value;
    if (AuthorName != "" && GenderName != "") {
        if (Music.gender[GenderName].authors.indexOf(AuthorName) == -1) {
            Music.gender[GenderName].authors.push(AuthorName);
            Music.authors.push(AuthorName);
            localStorage.Music = JSON.stringify(Music);
            audio.play();
            alert("CANTOR " + AuthorName + " ADICIONADO AO GÊNERO: " + GenderName + " COM SUCESSO!")

            REGISTaAUTHOR()
        } else {

            audio.play();
            alert("CANTOR " + AuthorName + " JÁ EXISTE")
        }
    } else {
        audio.play()
        alert("DIGITE UM VALOR VÁLIDO!!")

    }
}




//"<h1 class='text-primary lg'>Sound Paradise</h1> <br/><h1 class='text-primary sm'> Cadastrar Música</h1> <br/> <br/>
//<input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><br/>
//<select class='form-control form-control-lg' id='MusicGener'><option>SELECIONE O GÊNERO</option></select>"