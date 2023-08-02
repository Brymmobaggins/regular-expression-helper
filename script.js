
// const userform = document.querySelector('form')
// const userInputElement = document.querySelector('regexInput').value
// const submitButton = document.querySelector('button');

// submitButton.addEventListener('click', validateRegex);

// function validateRegex() {
//     const regexString = new RegExp(userInputElement)
//     // Get the user input value when the button is clicked 
//     const regexString = userInputElement.value;

// }


function showWarning() {
    if (userInputElement == "") {
        alert("Please enter a regular expression")
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showDropDown() {
    document.getElementById("drop").classList.toggle('show')

}
window.onclick