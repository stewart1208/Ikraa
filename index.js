let hashMap = {};
hashMap[" "] = 0;
hashMap["أ"] = 1;
hashMap["ا"] = 1;
hashMap["ل"] = 2;
hashMap["ن"] = 3;
hashMap["م"] = 4;
hashMap["و"] = 5;
hashMap["ؤ"] = 5;
hashMap["ي"] = 6;
hashMap["ئ"] = 6;
hashMap["ه"] = 7;
hashMap["ر"] = 8;
hashMap["ب"] = 9;
hashMap["ك"] = 10;
hashMap["ت"] = 11;
hashMap["ع"] = 12;
hashMap["ف"] = 13;
hashMap["ق"] = 14;
hashMap["س"] = 15;
hashMap["د"] = 16;
hashMap["ذ"] = 17;
hashMap["ح"] = 18;
hashMap["ج"] = 19;
hashMap["خ"] = 20;
hashMap["ش"] = 21;
hashMap["ص"] = 22;
hashMap["ض"] = 23;
hashMap["ز"] = 24;
hashMap["ت"] = 25;
hashMap["ط"] = 26;
hashMap["غ"] = 27;
hashMap["ظ"] = 28;

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
