const txtInput = document.querySelector(".takinginput input"),
    checkBtn = document.querySelector(".takinginput button"),
    answertext = document.querySelector(".answertext");
checkBtn.addEventListener("click", () => {
    //spliting user charcter
    // revering and joining
    let reverseInput = filterInput.split("").reverse().join("");
    answertext.style.display = "block";
    if (filterInput != reverseInput) {
        return answertext.innerHTML = 'No,<span>' + filterInput + ' </span> is not a palindrome!';
    }
    answertext.innerHTML = 'Yes,<span> ' + filterInput + ' </span> is a palindrome!';
});
txtInput.addEventListener("keyup", () => {
    //removing spaces &all special character in given output
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    answertext.style.display = "none";
    checkBtn.classList.remove("active");

});