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
    // Prevent default form submission behavior
    event.preventDefault();

    var ayaa = document.getElementById("ayaa").value;
    var resultInput = document.getElementById("result");
    var resulta = 0;
    
    // Loop through each character in the ayaa string
    for (var i = 0; i < ayaa.length; i++) {
        // Access the character at index i and convert it to its corresponding value
        resulta += hashMap[ayaa.charAt(i)];
    }

    // Set the calculated result to the result input field
    resultInput.value = resulta;
    console.log(resulta);
}
