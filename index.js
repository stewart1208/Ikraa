let hashMap = {};
hashMap[" "] = 0;
hashMap["أ"] = 1;
hashMap["ا"] = 1;
hashMap["ب"] = 2;
hashMap["ت"] = 3;
hashMap["ث"] = 4;
hashMap["ج"] = 5;
hashMap["ح"] = 6;
hashMap["خ"] = 7;
hashMap["د"] = 8;
hashMap["ذ"] = 9;
hashMap["ر"] = 10;
hashMap["ز"] = 11;
hashMap["س"] = 12;
hashMap["ش"] = 13;
hashMap["ص"] = 14;
hashMap["ض"] = 15;
hashMap["ط"] = 16;
hashMap["ظ"] = 17;
hashMap["ع"] = 18;
hashMap["غ"] = 19;
hashMap["ف"] = 20;
hashMap["ق"] = 21;
hashMap["ك"] = 22;
hashMap["ل"] = 23;
hashMap["م"] = 24;
hashMap["ن"] = 25;
hashMap["ه"] = 26;
hashMap["و"] = 27;
hashMap["ي"] = 28;

function handle(event) {
    event.preventDefault();

    var ayaa = document.getElementById("ayaa").value;
    var resultInput = document.getElementById("result");
    var resulta = 0;
    var word = "";
    var wordList = document.getElementById("wordList");
    wordList.innerHTML = ""; 

    for (var i = 0; i < ayaa.length; i++) {
        if (ayaa[i] !== " ") {
            word += ayaa[i];
        } else {
            resulta += readW(word);
            wordList.innerHTML += `<p>${word}: ${readW(word)}</p>`;
            word = "";
        }
    }

    if (word !== "") {
        resulta += readW(word);
        wordList.innerHTML += `<p>${word}: ${readW(word)}</p>`;
    }

    resultInput.value = resulta;
    wordList.innerHTML += `<p>النتيجة النهائية: ${resulta}</p>`;
    console.log(resulta);
}

function readW(word) {
    var res = 0
    for (var i = 0; i < word.length; i++) {
        res += hashMap[word.charAt(i)];
    }
    console.log(word + ":" + res);
    return res;
}
