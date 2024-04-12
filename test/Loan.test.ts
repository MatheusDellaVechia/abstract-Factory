import { CarLoan, MortgageLoan } from "../src/Loan";

test("Deve criar um financiamento", function() {
    const loan = new MortgageLoan("abc", 100000, 10000, 240);
    expect(loan.loanId).toBeDefined();
    expect(loan.amount).toBe(100000);
    expect(loan.income).toBe(10000);
    expect(loan.installments).toBe(240);
});

test("Deve criar um financiamento imobiliário com prazo superior a 420 meses ", function() {
    expect(() => MortgageLoan.create(10000, 10000, 450)).toThrow("The maximum number of installment for mortgage loan is 420");
});

test("Não Deve criar um financiamento imobiliário caso a parcela ocupe um valor superior a 25% da renda mensal ", function() {
    expect(() => MortgageLoan.create(200000, 1000, 420)).toThrow("The installment amount cold not exced 25% of monthly income");
});

test("Deve criar um financiamento de carro com prazo superior a 60 meses ", function() {
    expect(() => CarLoan.create(10000, 10000, 72)).toThrow("The maximum number of installment for car loan is 60");
});

test("Não Deve criar um financiamento de carro  caso a parcela ocupe um valor superior a 30% da renda mensal ", function() {
    expect(() => CarLoan.create(300000, 1000, 60)).toThrow("The installment amount cold not exced 30% of monthly income");
});