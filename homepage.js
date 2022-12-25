function displayText() {
    let inputBox = document.getElementById("input");
    let outputDiv = document.getElementById("output");

    const newDiv = document.createElement("div");
    const newText = document.createElement("p");
    const newBtn = document.createElement("button");

    newText.textContent = input.value;
    newText.classList.add("p-3");

    newDiv.classList.add("accent");
    newDiv.classList.add("rounded");
    newDiv.classList.add("animate__animated");
    newDiv.classList.add("animate__fadeInDown");

    newBtn.setAttribute("type", "button");
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-secondary");
    newBtn.classList.add("float-right");
    newBtn.innerHTML = "Delete";
    newBtn.setAttribute("onclick", "");

    outputDiv.appendChild()

    //reset inputbox
    inputBox.value = "";
}
