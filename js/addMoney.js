const addMpneyBtn = document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const balanceMoney = document.getElementById('balance').innerText;
    const convertedBalanceMoney = parseFloat(balanceMoney)
    const inputAmount = document.getElementById('input-amount').value ;
    const ConvertedAmount = parseFloat(inputAmount);
    const inputPassword = document.getElementById('input-password').value ;
    const pin = parseInt(inputPassword)
    if(pin === 1234){
        const sum = convertedBalanceMoney + ConvertedAmount
        console.log(sum)
        document.getElementById('balance').innerText = sum
    }
})

