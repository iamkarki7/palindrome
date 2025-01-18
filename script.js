// script.js

document.getElementById("check-btn").addEventListener("click", () => {
    const inputElement = document.getElementById("text-input");
    const resultElement = document.getElementById("result");
    const inputText = inputElement.value;

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters and lowercase the text

    const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");

    if (isPalindrome) {
        resultElement.textContent = `${inputText} is a palindrome`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome`;
    }
});
