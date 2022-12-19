function displayText() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");

    const p = document.createElement("p");
    const div = document.createElement("div");

    if (input.value.length < 1) {
        alert("Text box is empty!");
    }
    else {
        p.textContent = input.value;

        p.classList.add("p-3");
        div.classList.add("text-center");
        div.classList.add("bg-dark");
        div.classList.add("rounded");

        output.appendChild(div);
        div.appendChild(p);

        input.value = "";
    }
}