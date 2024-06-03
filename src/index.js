import CashRegister from './cashRegister.js';

const cashRegister = new CashRegister();
cashRegister.addItem(10.99);
cashRegister.addItem(4.25);
console.log(cashRegister.processPayment(20.0));
