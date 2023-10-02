function createAccount(pin, amount) {
    let accountPIN = pin;
    let balance = amount;
    return {
        checkBalance(pin){
            if(pin == accountPIN){
                console.log(balance)
            } else{
                console.log('Invalid PIN.')
            }
        },
        deposit(pin, amount){
            if(!(amount > 0)){
                console.log('Cannot deposit negative money!');
                return
            }
            if(pin == accountPIN){
                balance += amount;
                console.log(`Successfully deposited $${amount}. Current balance: $${balance}`);
            } else {
                console.log(`Invalid PIN.`);
            }
        },
        withdraw(pin, amount){
            if(!(amount > 0)){
                console.log('Cannot withdraw negative money!');
                return
            }
            if(pin == accountPIN){
                if(balance - amount > 0){
                    balance -= amount;
                    console.log(`Successfully withdrew $${amount}. Current balance: $${balance}`);
                    return
                }
                console.log('Withdrawl amount exceeds account balance. Transaction cancelled.');
            } else {
                console.log(`Invalid PIN.`);
            }
        },
        changePin(oldPIN, newPIN){
            if (oldPIN == pin){
                accountPIN = newPIN;
                console.log('PIN successfully changed.')
            } else{
                console.log('Old PIN is incorrect.')
            }
        }
    }
}

module.exports = { createAccount };
