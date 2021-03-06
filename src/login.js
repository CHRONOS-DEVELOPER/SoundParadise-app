if (localStorage.Music) {
    console.log("LOAD DATABASE SUCCESSFUL")
} else {
    var db = {
        gender: {
            "Axé": {
                "authors": [],
                "songs": []
            },
            "Blues": {
                "authors": [],
                "songs": []
            },
            "Country": {
                "authors": [],
                "songs": []
            },
            "Eletrônica": {
                "authors": [],
                "songs": []
            },
            "Forró": {
                "authors": [],
                "songs": []
            },
            "Funk": {
                "authors": [],
                "songs": []
            },
            "Gospel": {
                "authors": [],
                "songs": []
            },
            "Hip Hop": {
                "authors": [],
                "songs": []
            },
            "Jazz": {
                "authors": [],
                "songs": []
            },
            "MPB": {
                "authors": [],
                "songs": []
            },
            "Música clássica": {
                "authors": [],
                "songs": []
            },
            "Pagode": {
                "authors": [],
                "songs": []
            },
            "Pop": {
                "authors": [],
                "songs": []
            },
            "Rap": {
                "authors": [],
                "songs": []
            },
            "Reggae": {
                "authors": [],
                "songs": []
            },
            "Rock": {
                "authors": [],
                "songs": []
            },
            "Samba": {
                "authors": [],
                "songs": []
            },
            "Sertanejo": {
                "authors": [],
                "songs": []
            },
            "Pisadinha": {
                "authors": [],
                "songs": []
            }
        },

        songs: [
            { "name": "name", "author": "author", "gender": "gender" }
        ],
        authors: [],
        payment: [{ "nameMusic": "leticia", "data": "18/06/2021", "nameUser": "José Sávio" },
            { "nameMusic": "Letícia", "data": "18/06/2021", "nameUser": "José Sávio" },
            { "nameMusic": "Não Era Amor", "data": "18/06/2021", "nameUser": "Pedro Augusto" },
            { "nameMusic": "Volta Comigo BB", "data": "18/06/2021", "nameUser": "Victor Hugo" },
            { "nameMusic": "Beliver", "data": "18/06/2021", "nameUser": "Joyce" },
            { "nameMusic": "Teste", "data": "18/06/2021", "nameUser": "Teste" },
            { "nameMusic": "teste", "data": "18/06/2021", "nameUser": "teste" }
        ]





    }
    localStorage.setItem("Music", JSON.stringify(db));
    console.log("CREATE DATABASE SUCCESSFUL");
}

function CreateUserPage() {

    createPage.innerHTML = "<h1 class='text-primary'>SOUND PARADISE</h1><br><h2>CADASTRE-SE</h2><br><input class='form-control form-control-lg' type='email' id='EMAIL' placeholder='INSIRA SEU EMAIL'><input class='form-control form-control-lg' type='email' id='USER' placeholder='INSIRA SEU NOME DE USUÀRIO'><input class='form-control form-control-lg' type='cpf' id='CPF' oninput='mascara(this)' placeholder='INSIRA SEU CPF'><input class='form-control form-control-lg' type='password' id='PASSWORD' placeholder='INSIRA SUA SENHA' ><button class='btn btn-primary btn-block' onclick='CreateUser()'> CRIAR USUÁRIO</button> <button onclick='loginpage()' class='btn btn-danger btn-block'> VOLTAR </button>"

}

function loginpage() {

    createPage.innerHTML = "<h1 class='text-primary'>SOUND PARADISE</h1><br><h2>LOGIN</h2><br><input class='form-control form-control-lg' type='email' id='EMAIL' placeholder='INSIRA SEU EMAIL'><input class='form-control form-control-lg' type='password' id='PASSWORD' placeholder='INSIRA SUA SENHA'><button class='btn btn-primary btn-block' onclick='Login()'>LOGIN</button><button class='btn btn-danger btn-block' onclick='CreateUserPage()'> CRIAR USUÁRIO</button>"

}

function mascara(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}


function CreateUser() {
    let email = document.getElementById("EMAIL").value;
    let user = document.getElementById("USER").value;
    let password = document.getElementById("PASSWORD").value;
    let cpf = document.getElementById("CPF").value;
    if (user != "" && password != "" && email != "" && cpf != "" && cpf.length == 14) {
        if (email == "admin@admin.admin") {
            audio.play();
            alert("ESTA CONTA JA EXISTE")
        } else if (localStorage.getItem(email) == null) {
            let userInfor = {
                "user": user,
                "password": password,
                "cpf": cpf

            }

            localStorage.setItem(email, JSON.stringify(userInfor));
            let sessionUser = {
                "user": user,
                "email": email,
                "password": password
            }
            sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));
            window.location = "indexPage.html"
        } else {
            audio.play();
            alert("ESTA CONTA JA EXISTE");

        }
    } else {
        audio.play();
        alert("POR FAVOR DIGITE DADOS VÁLIDOS");

    }
}

function Login() {
    let email = document.getElementById("EMAIL").value;
    let password = document.getElementById("PASSWORD").value;
    let infor = JSON.parse(localStorage.getItem(email));
    if (email != "" && password != "") {
        if (email == "admin@admin.admin" && password == "admin123456") {
            window.location = "adminPage.html"
        } else if (infor != null) {

            if (infor.password == password) {
                let sessionUser = {
                    "user": infor.user,
                    "email": email,
                    "password": password
                }
                sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));
                window.location = "indexPage.html"
            } else {
                audio.play();
                alert("Senha Inválida")
            }
        } else {
            audio.play();
            alert("Email ou Senha inválidos ou inesistentes. Por favor tente novamente ou cadastre-se já!")
        }
    } else {
        audio.play();
        alert("POR FAVOR DIGITE UM EMAIL E UMA SENHA VALIDA")
    }
}