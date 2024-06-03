export default class CashRegister {
  constructor() {
    this.total = 0;
  }

  bills = [100, 50, 20, 10, 5, 1];
  coins = [0.25, 0.1, 0.05, 0.01];

  addItem(price) {
    this.total = parseFloat((this.total + price).toFixed(2));
    return this;
  }

  getTotal() {
    return this.total;
  }

  processPayment(payment) {
    const amountDue = this.total;
    const changeDue = parseFloat(Math.abs(amountDue - payment).toFixed(2));
    const billsReturned = {};
    const coinsReturned = {};

    let billTotal = Math.floor(changeDue);
    this.bills.forEach((bill) => {
      const currentBillVal = Math.floor(billTotal / bill);
      if (currentBillVal > 0) {
        billsReturned[bill] = currentBillVal;
      }
      billTotal = billTotal - currentBillVal * bill;
    });

    let coinTotal = (Math.abs(changeDue) - Math.floor(changeDue)).toPrecision(
      2
    );
    this.coins.forEach((coin) => {
      let currentCoinVal = Math.floor(coinTotal / coin);
      if (currentCoinVal > 0) {
        coinsReturned[coin] = currentCoinVal;
      }
      coinTotal = parseFloat((coinTotal - currentCoinVal * coin).toFixed(2));
    });

    this.total = 0;

    return {
      amountDue: amountDue,
      payment: payment,
      changeDue: changeDue,
      billsReturned: billsReturned,
      coinsReturned: coinsReturned,
    };
  }
};
