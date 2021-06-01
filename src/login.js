if (localStorage.Music) {
    console.log("LOAD DATABASE SUCCESSFUL")
} else {
    var db = {
        gêneros: {
            "Axé": [],
            "Blues": [],
            "Country": [],
            "Eletrônica": [],
            "Forró": [],
            "Funk": [],
            "Gospel": [],
            "Hip Hop": [],
            "Jazz": [],
            "MPB": [],
            "Música clássica": [],
            "Pagode": [],
            "Pop": [],
            "Rap": [],
            "Reggae": [],
            "Rock": [],
            "Samba": [],
            "Sertanejo": []
        },
        artistas: {

        },
        musicas: {


        },
        cont: 0


    }
    localStorage.setItem("Music", JSON.stringify(db));
    console.log("CREATE DATABASE SUCCESSFUL");
}

function CreateUserPage() {

    createPage.innerHTML = "<h1 class='text-primary'>SOUND PARADISE</h1><br><h2>CADASTRE-SE</h2><br><input class='form-control form-control-lg' type='email' id='EMAIL' placeholder='INSIRA SEU EMAIL'><input class='form-control form-control-lg' type='email' id='USER' placeholder='INSIRA SEU NOME DE USUÀRIO'><input class='form-control form-control-lg' type='cpf' id='CPF' oninput='mascara(this)' placeholder='INSIRA SEU CPF'><input class='form-control form-control-lg' type='password' id='PASSWORD' placeholder='INSIRA SUA SENHA' ><button class='btn btn-primary btn-block' onclick='CreateUser()'> CRIAR USUÁRIO</button> <a href='login.html' class='btn btn-danger btn-block'> VOLTAR </a>"


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