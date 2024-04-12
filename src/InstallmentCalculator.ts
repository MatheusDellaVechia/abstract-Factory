
import Installment from "./Installment";
import Loan from "./Loan";

export default interface InstallmentsCalculator {
    calculate(loan: Loan): Installment[];
}

export class SACInstallmentCalculator implements InstallmentsCalculator {
    calculate(loan: Loan): Installment[] {
        const installments: Installment[] = [];
        return installments;

    }
}