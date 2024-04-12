export default class Installment {

    constructor(readonly loanId: string, readonly amount: number, readonly amortization: number, readonly insterest: number, readonly balance: number) {

    } 
}