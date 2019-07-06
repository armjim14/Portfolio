var contact = document.getElementById("contact");
var portfolio = document.getElementById("portfolio");
var home = document.getElementById("home");
var resume = document.getElementById("resume");

contact.addEventListener("click", function(){
    window.location.href = 'contact.html'
})

portfolio.addEventListener("click", function(){
        window.location.href = 'portfolio.html'
})

home.addEventListener("click", function(){
        window.location.href = 'index.html'
})

var getInfo = document.getElementById("special");

var firebaseConfig = {
        apiKey: "AIzaSyAAjTkTaaAYcp4y6U4karifugJsRENeiM4",
        authDomain: "game1-e50a2.firebaseapp.com",
        databaseURL: "https://game1-e50a2.firebaseio.com",
        projectId: "game1-e50a2",
        storageBucket: "game1-e50a2.appspot.com",
        messagingSenderId: "400261651315",
        appId: "1:400261651315:web:64034034e67c5cc5"
      };

      firebase.initializeApp(firebaseConfig)

      var database = firebase.database();

getInfo.addEventListener("click", function(){ getInfomation(); })

document.onkeyup = function(e){ var code = e.key; if ( code == "Enter" ){ getInfomation(); } }

function getInfomation(){
        var name = document.getElementById("fullname");
        var email = document.getElementById("fullemail");
        var msg = document.getElementById("fullmsg");
        var error = document.getElementById("foremail");
        
        if ( !email.value ){
                error.textContent = "Please Enter A Email";
                error.style.color = "lightcoral";
                error.style.display = "block";
        } else {
                error.textContent = "Sucessfully send!";
                error.style.color = "#447b7b";
                error.style.display = "block";

                database.ref().push({
                        name: name.value,
                        email: email.value,
                        msg: msg.value
                })

                name.value = "";
                email.value = "";
                msg.value = "";
        }
}