// var btnTranslate = document.querySelector("#btn-translate");
// btnTranslate.addEventListener("click", function translateText() {
//     console.log("translate event")
// })
var inputText = document.querySelector("#user_input");
var outputText = document.querySelector("#user_output");
var apiUrl = "https://api.funtranslations.com/translate/minion.json?text=";

function getUrl(txt) {
    console.log(apiUrl + txt);
    return apiUrl + inputText.value;
}

function translateInput() {
    var txt = inputText.value;
    console.log(" clicked", txt);


    fetch(getUrl(txt)).then(resp => {
            return resp.json();
        }).then(json => {
            console.log(json);
            outputText.innerHTML = json.contents.translated;
        }).catch(function(error) {
            console.log("error msg", error.message);
        })
        // outputText.innerHTML = inputText.value;
}
//quertSelector is one of API which each browser has to communicate to Html element with its id or class selector

//GUI ->graphical user interface when user interacts with programs using graphics