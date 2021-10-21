
// merkkaa tsekatuksi kuuntelijalla
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


//rivin sulkeminen
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// lisätään listaan uusi kohta
function newElement() {
    var todoli = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var closeText = document.createTextNode(inputValue);
    todoli.appendChild(closeText);
    var todoInput = document.getElementById("myInput");
    if (inputValue == '' || inputValue == null || inputValue.length < 3) {
        todoInput.style.borderColor = "red";
        alert("You must write something!");
    } else {
        todoInput.style.borderColor = "#3682f4";
        document.getElementById("myUL").appendChild(todoli);
        var savedList = localStorage.getItem("savedList"); //tallennus localstorageen listaan
        if (!savedList) {
            savedList = []; // jos ei ole listaa, niin se luo
        } else {
            savedList = JSON.parse(savedList); //parsetaan oikeaksi
        }
        savedList.push({ text: inputValue, checked: false }); // lisää uusi rivi listaan
        localStorage.setItem("savedList", JSON.stringify(savedList)); //korvataan uudella, muutetaan tässä STRING

    }
    document.getElementById("myInput").value = "";

    // tässä luodaan ruksit ja delete 
    var closeButton = document.createElement("SPAN");
    var closeText = document.createTextNode("\u00D7");
    closeButton.className = "close";
    closeButton.appendChild(closeText);
    todoli.appendChild(closeButton);

    // poistaa rivin
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}





