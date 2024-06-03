import CashRegister from "../src/cashRegister.js";

describe("CashRegister", () => {
  describe("methods", () => {
    describe("constructor", () => {
      let cashRegister;
      beforeEach(() => {
        cashRegister = new CashRegister();
      });

      it("creates instance", () => {
        expect(cashRegister instanceof CashRegister).toBeTruthy();
      });

      it("initializes total to zero", () => {
        expect(cashRegister.getTotal()).toEqual(0);
      });
    });

    describe("addItem", () => {
      let cashRegister;
      beforeEach(() => {
        cashRegister = new CashRegister();
      });

      it("increases total", () => {
        cashRegister.addItem(10.99);
        expect(cashRegister.getTotal()).toEqual(10.99);
        cashRegister.addItem(5.5);
        expect(cashRegister.getTotal()).toEqual(16.49);
      });
    });

    describe("getTotal", () => {
      let cashRegister;
      beforeEach(() => {
        cashRegister = new CashRegister();
      });

      it("gets the total", () => {
        cashRegister.addItem(10.99);
        expect(cashRegister.getTotal()).toEqual(10.99);
      });
    });

    describe("processPayment", () => {
      let cashRegister;
      beforeEach(() => {
        cashRegister = new CashRegister();
      });

      it("returns the correct change", () => {
        cashRegister.addItem(100.99);
        cashRegister.addItem(14.99);
        expect(cashRegister.processPayment(120.0)).toEqual({
          amountDue: 115.98,
          billsReturned: { 1: 4 },
          changeDue: 4.02,
          coinsReturned: {
            0.01: 2,
          },
          payment: 120,
        });
      });
    });
  });
});
