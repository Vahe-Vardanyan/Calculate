//
let log = console.log;
let btn = document.querySelectorAll(".but");
let arajin = 0;
let gorcoxutyun = " ";
let arjeq = " ";
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", F)

}

if (arjeq = " ") {
    document.getElementById("inp").value = 0;
}

function F() {
    let isVal = this.innerText;

    if (isVal == '*' || isVal == '/' || isVal == '+' || isVal == '-') {
        arajin = arjeq;
        arjeq = " ";
        gorcoxutyun = isVal;
        document.getElementById("inp").value = isVal;

    } else if (isVal == 'CE') {
        document.getElementById("inp").value = 0;
    } else if (isVal == 'POW') {
        arajin = arjeq;
        arjeq = " ";
        gorcoxutyun = isVal;
        document.getElementById("inp").value = isVal;
    } else {
        arjeq = arjeq + isVal;
        document.getElementById("inp").value = arjeq;

    }

}

function equal() {
    let patasxan = 0;
    switch (gorcoxutyun) {
        case "-":
            patasxan = Number(arajin - arjeq)
            break;
        case "+":
            patasxan = Number(arajin) + Number(arjeq)
            break;
        case "/":
            patasxan = Number(arajin / arjeq)
            break;
        case "*":
            patasxan = Number(arajin * arjeq)
            break;
        case "CE":
            document.getElementById("inp").value = 0;
            break;
        case "POW":
            patasxan = Math.pow(arajin, arjeq);
            break;
        default:
            document.getElementById("inp").value = 0;
    }
    document.getElementById("inp").value = patasxan;
}

function sqrt() {
    document.getElementById("inp").value = Math.sqrt(arjeq);
}

function sin() {
    document.getElementById("inp").value = Math.sin(arjeq);
}

function cos() {
    document.getElementById("inp").value = Math.cos(arjeq);
}