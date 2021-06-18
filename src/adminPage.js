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
                audio.play()
                alert("A MÚSICA " + MusicName + " JÁ EXISTE!!");

                window.Musicconfirm = false;
            } else {
                window.Musicconfirm = true;
            }

        });
        if (Musicconfirm === true) {
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
        var MusicName = document.getElementById('MusicName').value;
        if (MusicName != "") {
            playconfirm = 0
            Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Buscar Por Música</h1> <br/> <br/><div class='table-overflow'><table class='table table-lg table-striped table-dark'><thead><tr><th scope = 'col'>ID#</th><th scope = 'col'>Nome da Música</th><th scope = 'col'>Cantor</th><th scope = 'col'>Gênero</th></tr></thead><tbody id='tablebody'></tbody></table>"
            Music.songs.forEach((item, indice) => {
                if (item.name == MusicName) {
                    playconfirm++
                    $('#tablebody').append("<tr><th scope='row' id='tableid'>" + indice + "</th><td id='tablename'>" + item.name + "</td><td id='tableauthor'>" + item.author + "</td><td id='tablegender'>" + item.gender + "</td></tr>")
                }

            });
            if (playconfirm == 0) {

                audio.play()
                alert("ESTA MÚSICA NÃO EXISTE")

            }
        }
    },
    "SearchGender": function() {
        var MusicGender = document.getElementById('MusicGender').value;
        if (MusicGender != "SELECIONE O GÊNERO") {
            Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Buscar Por Música</h1> <br/> <br/><div class='table-overflow'><table class='table table-lg table-striped table-dark'><thead><tr><th scope = 'col'>ID#</th><th scope = 'col'>Nome da Música</th><th scope = 'col'>Cantor</th><th scope = 'col'>Gênero</th></tr></thead><tbody id='tablebody'></tbody></table>"
            Music.songs.forEach((item, indice) => {
                if (item.gender == MusicGender) {

                    $('#tablebody').append("<tr><th scope='row' id='tableid'>" + indice + "</th><td id='tablename'>" + item.name + "</td><td id='tableauthor'>" + item.author + "</td><td id='tablegender'>" + item.gender + "</td></tr>")
                }

            });
        }
    },
    "SearchAuthor": function() {
        var MusicAuthor = document.getElementById('MusicAuthor').value;
        if (MusicAuthor != "SELECIONE O CANTOR") {

            Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Buscar Por Música</h1> <br/> <br/><div class='table-overflow'><table class='table table-lg table-striped table-dark'><thead><tr><th scope = 'col'>ID#</th><th scope = 'col'>Nome da Música</th><th scope = 'col'>Cantor</th><th scope = 'col'>Gênero</th></tr></thead><tbody id='tablebody'></tbody></table>"
            Music.songs.forEach((item, indice) => {
                if (item.author == MusicAuthor) {

                    $('#tablebody').append("<tr><th scope='row' id='tableid'>" + indice + "</th><td id='tablename'>" + item.name + "</td><td id='tableauthor'>" + item.author + "</td><td id='tablegender'>" + item.gender + "</td></tr>")
                }

            });

        }
    },
    "SearchAll": function() {
        Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Buscar Por Música</h1> <br/> <br/><div class='table-overflow'><table class='table table-lg table-striped table-dark'><thead><tr><th scope = 'col'>ID#</th><th scope = 'col'>Nome da Música</th><th scope = 'col'>Cantor</th><th scope = 'col'>Gênero</th></tr></thead><tbody id='tablebody'></tbody></table>"
        Music.songs.forEach((item, indice) => {


            $('#tablebody').append("<tr><th scope='row' id='tableid'>" + indice + "</th><td id='tablename'>" + item.name + "</td><td id='tableauthor'>" + item.author + "</td><td id='tablegender'>" + item.gender + "</td></tr>")


        });
    }


}

function SEARCHaDVD() {

    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Consultar Música</h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><button class='btn  btn-info' onclick='SEARCHthisDVD.SearchName()'>PESQUISAR POR NOME</button><br/><br/><select class='form-control form-control-lg' id='MusicGender'><option>SELECIONE O GÊNERO</option></select><button class='btn  btn-info' onclick='SEARCHthisDVD.SearchGender()'>PESQUISAR POR GÊNERO</button><br/><br/><select class='form-control form-control-lg' id='MusicAuthor'><option>SELECIONE O CANTOR</option></select><button class='btn btn-info' onclick='SEARCHthisDVD.SearchAuthor()'>PESQUISAR POR AUTOR</button><button class='btn btn-block btn-info' onclick='SEARCHthisDVD.SearchAll()'>LISTA COMPLETA DE DVDs</button>"
    ADDaGENDERlist()
    Music.authors.forEach(element => {
        $('#MusicAuthor').append('<option>' + element + '</option>');
    });

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

function NewGender() {
    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Adicionar Gênero </h1> <br/> <br/><input type='text' class='form-control form-control-lg' id='GenderName' placeholder='NOME DO GÊNERO'><button class='btn btn-block btn-info' onclick='ADDGender()'>ADICIONAR GÊNERO</button>"
}

function ADDGender() {

    GenderName = document.getElementById("GenderName").value;
    if (Music.gender[GenderName]) {
        audio.play()
        alert("Gênero Existente")

    } else if (GenderName != "") {
        var Completer = {
            "authors": [],
            "songs": []
        }
        Music.gender[GenderName] = Completer
        localStorage.Music = JSON.stringify(Music)
        audio.play()
        alert("Gênero " + GenderName + " adicionado com Sucesso!")
        NewGender()
    } else {
        audio.play()
        alert("Valor Invalido")
    }
}

function ListPayments() {
    Screenmain.innerHTML = "<h1 class='text-info lg'>Sound Paradise</h1> <br/><h1 class='text-info sm'> Compras Efetuadas</h1> <br/> <br/><div class='table-overflow'><table class='table table-lg table-striped table-dark'><thead><tr><th scope = 'col'>ID#</th><th scope = 'col'>Nome da Música</th><th scope = 'col'>Data da Compra</th><th scope = 'col'>Comprador</th></tr></thead><tbody id='tablebody'></tbody></table>"
    Music.payment.forEach((item, indice) => {


        $('#tablebody').append("<tr><th scope='row' id='tableid'>" + indice + "</th><td id='tablename'>" + item.nameMusic + "</td><td id='tableauthor'>" + item.data + "</td><td id='tablegender'>" + item.nameUser + "</td></tr>")


    });
}



//"<h1 class='text-primary lg'>Sound Paradise</h1> <br/><h1 class='text-primary sm'> Cadastrar Música</h1> <br/> <br/>
//<input type='text' class='form-control form-control-lg' id='MusicName' placeholder='NOME DA MUSICA'><br/>
//<select class='form-control form-control-lg' id='MusicGener'><option>SELECIONE O GÊNERO</option></select>"