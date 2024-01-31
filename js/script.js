const grigliaElement = document.querySelector ("#griglia")

for (let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.innerHTML= i;
    newElement.className ="square";
    newElement.style.border=" 1px solid black";
    grigliaElement.append(newElement)
    // grigliaElement.innerHTML += `<div class="square">${i}</div>`;
    // grigliaElement.style.border ="1px solid black"
} console.log(grigliaElement)