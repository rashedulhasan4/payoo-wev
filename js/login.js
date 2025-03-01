const loginBtn = document.getElementById('login-btn').addEventListener('click', function(event){
    const inputAccount = document.getElementById('input-account').value
    const inputPassword = document.getElementById('input-password').value
    event.preventDefault();
    console.log(inputAccount, inputPassword)
    const pin = parseInt(inputPassword)
    if(inputAccount.length === 11){
        if(pin === 1234){
            console.log('Pin number is correct')
        }
        else{
            console.log('Pin is Incorrect')
        }
    }
    else{
        console.log('Account Number is Invail')
    }
})
