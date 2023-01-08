let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".disp");
let oldnum = null;
let sign = null;
let dotCounter = 0;
function Button_click(event) {
    let text = event.currentTarget.innerText;
    if (text == "c") {
        display.innerText = "0";
        sign = null;
        dotCounter = 0;
        oldnum = null;
    } else if (text == "+" || text == "-" || text == "✖" || text == "%") {
        if (sign != "=") {
            console.log(`нажат знак ${text}`);
            sign = text;
            if (oldnum == null) {
                oldnum = Parse(display.innerText);
            } else {
                display.innerText = Task(Parse(display.innerText));
            }
            display.innerText = "0";
            dotCounter = 0;
        } else {
            sign = text;
            dotCounter = 0;
            display.innerText = "0";
        }
    } else if (text == "·") {
        if (dotCounter == 0) {
            display.innerText += ".";
            dotCounter++;
        }
    } else if (text == "=") {
        if (sign != "=" && sign != null) {
            display.innerText = Task(Parse(display.innerText));
            sign = text;
        }
    } else {
        if (display.innerText.length < 8) {
            if (display.innerText == "0") {
                display.innerText = text;
            } else {
                display.innerText += text;
            }
        }
    }
}

function Parse(elem) {
    let res;
    if (elem.includes(".")) {
        res = parseFloat(elem);
    } else {
        res = parseInt(elem);
    }
    return res;
}
function Task(elem) {
    let res;
    switch (sign) {
        case "+":
            res = oldnum + elem;
            break;
        case "-":
            res = oldnum - elem;
            break;
        case "✖":
            res = oldnum * elem;
            break;
        case "%":
            res = oldnum / elem;
            break;
    }
    // let resString=toString(res);
    // if(resString.length>8){
    //     resString=resString.slice(0,7);
    //     res=Parse(resString);
    // }
    oldnum = res;
    return res;
}
btns.forEach((elem) =>
    elem.addEventListener("click", (event) => Button_click(event))
);
