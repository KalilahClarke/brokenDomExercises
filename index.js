
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
const sum = (arr) => {
    let sum = 0; 
    for(let i = 0; i <= arr.length; i++) {
        const num = arr[i];
        sum += num
    }
    return sum; 
}
const average = (arr) => {
    let sumOfNums = sum(arr) 
    return sumOfNums / arr.length; 
}

const onlyOdds = arr => {
     arr.filter(num => num % 2 === 1)
}

const favoriteNumbers = () => {
    let list = Number(document.querySelectorAll("#favorite-numbers li").value);
    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent))
    })
    const sum = sum(arr);
    const averageOfNums = average(arr);
    const onlyOddsOfNums = onlyOdds(arr);

    const sumOfFav = document.querySelector("#sum-of-favorite-nums");
    sumOfFav.textContent += sumOfNums; 

    const aveOfFav = document.querySelector("#average-of-favorite-nums");
    aveOfFav.textContent += averageOfNums; 

    var oddList = document.querySelector("#list-of-odd-favorite-nums");
    
    const li = document.createElement("li");
    onlyOddsOfNums.forEach(odd => {
      li.innerText = odd;
      oddList.appendChild(li);
    });
}

favoriteNumbers();

const incrementCount = () => {
    const countr = Number(document.querySelector("#click-count"));
    counter.textContent = counter.textContent + 1;
}

const reset = () => {
    const counter = document.querySelector("#click-count");
    counter.displayContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector("ul");
    const input = document.querySelector(".add-item")
    const item = input;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem)
    input.value = "Empty";
}

const killButton = () => {
    const button = document.querySelector("#kill-button");
    button.removeChild(button)

    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}