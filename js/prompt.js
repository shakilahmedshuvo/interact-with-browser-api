// alert('How are you')
const showAlert = () => {
    alert('Dost taka dite parbi , just 500?');
};
const lendMoney = () => {
    const result = confirm('Will you lend me 500 Taka?');
    console.log(result);
    if (result === true) {
        alert('Tui amer jan er dosto!!!')
    }
    else {
        alert('DGM....... toke ajke e block maira dimu.!')
        console.log('DGM....... toke ajke e block maira dimu.!')
    }
}

const getInfo = () => {
    //  alert
    // confirm
    const name = prompt('Tell me your name')
    console.log(name);
    if (name === null){
        alert('Naam na dile kaam nai !! ja foooooot')
    }
    else{
        alert('Welcome to this world!!!')
        console.log('Welcome to this world!!!')
    }
}