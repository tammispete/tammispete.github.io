
// Ruksit to do listan perään
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// poista tehtävä
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// merkkaa tsekatuksi
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// lisätään listaan uusi kohta
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    var todoInput = document.getElementById("myInput");
    if (inputValue == '' || inputValue == null || inputValue.length < 3) {
        todoInput.style.borderColor = "red";
        alert("You must write something!");
    } else {
        todoInput.style.borderColor = "#3682f4";
        document.getElementById("myUL").appendChild(li);
        var savedList = localStorage.getItem("savedList"); //haetaan lista 
        if (!savedList) {
            savedList = []; // jos ei ole listaa, niin se luo
        } else {
            savedList = JSON.parse(savedList); //paristaan oikeaksi
        }
        savedList.push({ text: inputValue, checked: false }); // lisää uusi rivi listaan
        localStorage.setItem("savedList", JSON.stringify(savedList)); //korvataan uudella, muutetaan tässä STRING

    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}





