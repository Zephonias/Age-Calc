//get elements from HTML
const date = document.getElementById("date");
const calculate = document.getElementById("calculate");
const display = document.getElementById("display");

//limit entry until today
let today = new Date().toISOString().split('T')[0];
date.setAttribute("max", today);

//age calculate function
function calculateAge(){
    //initialize the difference age variables
    let year, month, day;

    //assign the input birth date to a value
    let dateValue = new Date(date.value);

    //get the date, month and year from the user input
    let birthDate = dateValue.getDate();
    let birthMonth = dateValue.getMonth() + 1;
    let birthYear = dateValue.getFullYear();

    //get the current date, month and year
    let today = new Date();

    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    //Calculate the year
    year = currentYear - birthYear;

    //calculate month based on the current month
    if(birthMonth > currentMonth){
        year--;
        month = 12 + currentMonth - birthMonth;
    }
    else{
        month = currentMonth - birthMonth;
    }


    //calculate date based on the current date and amount of days in a month
    if(currentDate >= birthDate){
        day = currentDate - birthDate;
    }
    else{
        // alert(day);
        month--;
        day = getDaysInMonth(birthYear, birthMonth) + currentDate - birthDate;
        if(month <= 0){
            month = 11;
            year--;
        }
    }


    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }


    display.textContent = "You are " + year + " years, " + month + " months and " + day + " days old";


}

//calculate button event trigger
calculate.addEventListener('click', () => {
    // const dateValue = date.value;
    // alert(dateValue);
    calculateAge();
})



