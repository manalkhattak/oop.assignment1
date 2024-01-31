// ASSIGNMENT NO.1 
class person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.country)
    }
}

per1 = new person('Ahmed',26,'Pakistan')
per2 = new person('Noor',25,'Pakistan')

per1.displayDetails()
per2.displayDetails()

// ASSIGNMENT NO.2
class rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
    getArea(){
        return this.length*this.width
    }
    getPerimeter(){
        return 2*(length + width)
    }
    display(){
        console.log(`Area of the rectangle is ${rec1.getArea} and perimeter of the rectangle is ${rec1.getPerimeter}`)
    }
}
rec1 = new rectangle(2,3)
rec1.display()

// ASSIGNMENT NO.3
class bankAccount{
    constructor(accountNumber, accountHolderName, balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amt){
        this.balance = this.balance + amt
        alert("Your cash has been deposited in your account!")
    }
    withdraw(){
        if (this.balance < amt){
            alert("INSUFFICIENT BALANCE!")
        }
        else{
            this.balance = this.balance - amt
        }
    }
    transfer(beneficiaryAcc,amt){
        for (let a = 0; a < accounts.length; a++){
            if (accounts[a].accountNumber === beneficiaryAcc){
                accounts[a].balance = accounts[a].balance + amt
                this.balance = this.balance - amt
                alert("Amount transferred successfully!")
            }
        }
    }
    balance(){
        alert(`Your account balance is ${this.balance}`)
    }
}
acc1 = new bankAccount('1234','Manal',15000)
acc2 = new bankAccount('1235','Summaya',11000)
acc3 = new bankAccount('1236','Sohana',9000)

var accounts = []
accounts.push(acc1,acc2,acc3)