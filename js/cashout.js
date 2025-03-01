document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balanceMoney = document.getElementById('balance').innerText;
    const convertedBalanceMoney = parseFloat(balanceMoney)
    const inputAmount = document.getElementById('c-input-amount').value ;
    const ConvertedAmount = parseFloat(inputAmount);
    const inputPassword = document.getElementById('c-input-password').value ;
    const pin = parseInt(inputPassword)
    if(pin === 1234){
        const sum = convertedBalanceMoney - ConvertedAmount;
        document.getElementById('balance').innerText = sum;
        console.log(sum)
    }
    else{
        alert('Wrong Pin')
    }
})

