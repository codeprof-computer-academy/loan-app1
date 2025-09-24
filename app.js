// logic to display current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// logic to caluclate the interest and amount
const loan_form = document.querySelector(".loan-form")
 // target the loan details
    const loan_details = document.querySelector(".loan-details")

loan_form.addEventListener('submit', calculate_loan)

function calculate_loan(event){
    event.preventDefault() // prevent the page from reloading
   
    let loan_amount =  Number(document.querySelector(".loan-amount-input").value)
    let duration =  Number(document.querySelector(".duration-select").value)
    let rate = 0.2

    // calculate the interest
    let interest = (loan_amount * duration * 0.2) / 12
    let total_payment = loan_amount + interest


   
    loan_details.style.display = "flex"
   

    document.querySelector(".loan-amount").innerHTML = loan_amount.toLocaleString()
    document.querySelector(".loan-duration").innerHTML = duration
    document.querySelector(".loan-rate").innerHTML = rate
    document.querySelector(".loan-interest").innerHTML = interest.toLocaleString()
    document.querySelector(".loan-payment").innerHTML = total_payment.toLocaleString()

    // logic to print
    document.querySelector(".print-btn").addEventListener('click', function(){
          print()
    })
}



loan_form.addEventListener('reset', reset_app)

function reset_app(){
    loan_details.style.display = "none"
}