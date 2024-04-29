
import currency from "currency.js";
import Installment from "./Installment";
import Loan from "./Loan";

export default interface InstallmentsCalculator {
    calculate(loan: Loan): Installment[];
}

export class SACInstallmentCalculator implements InstallmentsCalculator {
    calculate(loan: Loan): Installment[] {
        const installments: Installment[] = [];
        let balance  = currency(loan.amount)
        return installments;

    }
}