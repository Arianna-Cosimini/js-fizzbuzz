const grigliaElement = document.querySelector ("#griglia")

for (let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.innerHTML= i;
    newElement.className ="square";
    newElement.style.backgroundColor="#1389b2";
    newElement.style.border=" 1px solid black";
    grigliaElement.append(newElement)
    
    if (i % 3 == 0){
        newElement.className += " fizz";
        newElement.innerHTML= "Fizz";
        newElement.style.backgroundColor="#0cd6a1";
    } else if (i % 5 == 0){
        newElement.className += " buzz";
        newElement.innerHTML= "Buzz";
        newElement.style.backgroundColor="#f6d667";
    } else if (i % 15 ==0){
        newElement.className += " fizzbuzz";
        newElement.innerHTML= "FizzBuzz";
    }
} console.log(grigliaElement)