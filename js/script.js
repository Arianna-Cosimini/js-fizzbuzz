const grigliaElement = document.querySelector ("#griglia")

for (let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    newElement.innerHTML= i;
    newElement.className ="square";
    newElement.style.backgroundColor="#1389b2";
    newElement.style.border=" 1px solid black";
    newElement.style.  width= "calc(100% / 10 - 10px)";
    newElement.style.display="flex";
    newElement.style.justifyContent="center";
    newElement.style.alignItems="center";
    newElement.style.height= "80px";
    newElement.style.fontSize="20px";

    grigliaElement.append(newElement)
    
    if  (i % 5 == 0 && i % 3 == 0){
        newElement.className += " fizzbuzz";
        newElement.innerHTML= "FizzBuzz";
        newElement.style.backgroundColor="#f0466f";
        newElement.style.fontWeight="bold";
        newElement.style.color="yellow";
        newElement.style.fontSize="15px";

0
    } else if (i % 5 == 0){
        newElement.className += " buzz";
        newElement.innerHTML= "Buzz";
        newElement.style.backgroundColor="#f6d667";
        newElement.style.fontWeight="bold";
        newElement.style.fontSize="20px"
        newElement.style.color="red";

    } else if (i % 3 == 0){
        newElement.className += " fizz";
        newElement.innerHTML= "Fizz";
        newElement.style.backgroundColor="#0cd6a1";
        newElement.style.fontWeight="bold";
        newElement.style.fontSize="25px";
        newElement.style.color="white";


    }
}