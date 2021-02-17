
const disemvowel = () => {
    const el = document.querySelector("#name-to-disemvowel");
    const p = document.getElementById("disemvowel-string");
    const str = el.value;
    let output = "";
    const vowels = "aeiouAEIOU"; 
    for(const char of str) {
        if(!vowels.includes(char)) {
            output += char;
        }
    }
    p.textContent = output;
}

const isPalindrome = () => {
    const str = document.querySelector("#is-palindrome-input").value;
    const p = document.querySelector("#is-palindrome-p");
    let result = false; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[str.length - i - 1]) {
            result = true
        } else {
            result = false
        }
    }
    p.textContent = result;
}
let sum = (arr) => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        sum += num
    }
    return sum; 
}
let average = (arr) => {
    let sumOfNums = sum(arr) 
    return sumOfNums / arr.length; 
}

let onlyOdds = arr => {
     return arr.filter(num => num % 2 === 1)
}

const favoriteNumbers = () => {
    let list = document.querySelectorAll("#favorite-numbers li");
    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent))
    })
   
    const sumOfNums = sum(arr);
    const averageOfNums = average(arr);
    const onlyOddsOfNums = onlyOdds(arr);


    const sumOfFav = document.querySelector("#sum-of-favorite-nums");
    sumOfFav.textContent += sumOfNums; 
    

    const aveOfFav = document.querySelector("#average-of-favorite-nums");
    aveOfFav.textContent += averageOfNums; 

    const oddList = document.querySelector("#list-of-odd-favorite-nums");
    
    onlyOddsOfNums.forEach(odd => {
      let li = document.createElement("li");
      li.textContent = odd;
      oddList.appendChild(li);
    });
    
}

favoriteNumbers();

const incrementCount = () => {
    let counter = document.querySelector("#click-count");
    counter.textContent++
}



const reset = () => {
    const counter = document.querySelector("#click-count");
    counter.textContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector(".shopping-list");
    const input = document.querySelector("#add-item")
    //const item = input;
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    shoppingList.appendChild(listItem)
    //input.value = "Empty";
}

const killButton = () => {
    const button = document.querySelector("#kill-button");
    button.parentNode.removeChild(button)

    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}