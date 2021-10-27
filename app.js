const billIn = document.querySelector('#bill');
const peopleIn = document.querySelector('#number-of-people');
const tipAmount = document.querySelector('#tip-amount');
const totalNumber = document.querySelector('#total-number');
const btns = document.querySelectorAll('.btn');
const customIn = document.querySelector('#custom-tip');
const infoDisplay = document.querySelector('.display-info');
const resetBtn = document.querySelector('.reset');
let tip;
let total;

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(billIn.value !== "" && billIn.value !== 0 && peopleIn.value !== 0 && peopleIn.value !== "") {
            switch(e.target.textContent) {
                case '5%':
                    tip = (billIn.value * (5/100)) * peopleIn.value;
                    break;
                case '10%':
                    tip = (billIn.value * (10/100)) * peopleIn.value;
                    break;
                case '15%':
                    tip = (billIn.value * (15/100)) * peopleIn.value;
                    break;
                case '25%':
                    tip = (billIn.value * (25/100)) * peopleIn.value;
                    break;
                case '50%':
                    tip = (billIn.value * (50/100)) * peopleIn.value;
                    break;
            }
            total = billIn.value + tip;
            tipAmount.textContent = tip;
            totalNumber.textContent = parseInt(billIn.value) + tip;
        } else {
            infoDisplay.textContent = 'please fill in all the required information!';
            setInterval(() => {
                infoDisplay.textContent = '';
            }, 3000);
        }
    })
});

customIn.addEventListener('keyup', (e)=>{
    const customTip = parseInt(e.target.value);
    console.log(customTip);
    if(customTip !== '' && customTip !== 0) {
        tip = (billIn.value * (customTip/100)) * peopleIn.value;
    }
    total = billIn.value + tip;
    tipAmount.textContent = tip;
    totalNumber.textContent = parseInt(billIn.value) + tip;
});

resetBtn.addEventListener('click', ()=>{
    window.location.reload();
});