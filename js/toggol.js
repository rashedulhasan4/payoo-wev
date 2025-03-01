document.getElementById('add-money-container').style.display = 'block'
document.getElementById('cashout-container').style.display = 'none'

document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('add-money-container').style.display = 'block'
    document.getElementById('cashout-container').style.display = 'none'
})

document.getElementById('cashout-box').addEventListener('click', function () {
    document.getElementById('add-money-container').style.display = 'none'
    document.getElementById('cashout-container').style.display = 'block'
})