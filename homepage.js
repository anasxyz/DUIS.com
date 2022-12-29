let inputBox = document.getElementById("input");
let outputDiv = document.getElementById("output");

function displayText() {
    const rowDiv = document.createElement("div");
    const div1 = document.createElement("div");
    const text1 = document.createElement("p");
    const dltBtn1 = document.createElement("button");

    text1.textContent = input.value;
    text1.classList.add("p-3");

    rowDiv.classList.add("row");
    
    div1.classList.add("col-12");
    div1.classList.add("accent");
    div1.classList.add("rounded");
    div1.classList.add("mt-3");
    div1.classList.add("animate__animated");
    div1.classList.add("animate__fadeInDown");
    childrenCount = outputDiv.childElementCount;
    
    rowDiv.setAttribute("id", "textDiv" + (childrenCount + 1));

    dltBtn1.setAttribute("type", "button");
    dltBtn1.classList.add("btn");
    dltBtn1.classList.add("btn-secondary");
    dltBtn1.classList.add("float-right");
    dltBtn1.innerHTML = "🗑️";
    dltBtn1.setAttribute("onclick", "deleteText(this, " + (childrenCount + 1) + ")");

    text1.appendChild(dltBtn1);
    div1.appendChild(text1);
    rowDiv.appendChild(div1);
    outputDiv.appendChild(rowDiv);

    //reset inputbox
    inputBox.value = "";
}

function deleteText(btnstate, divNum) {
    var removeDiv = document.getElementById("textDiv" + divNum);
    outputDiv.removeChild(removeDiv);
}
