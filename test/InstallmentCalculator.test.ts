import { SACInstallmentCalculator } from "../src/InstallmentCalculator";
import { MortgageLoan } from "../src/Loan";

test("deve calcular as parecelas utiliznando SAC", function() {
    const installmentsCalculator = new SACInstallmentCalculator();
    const loan = MortgageLoan.create(100000,1000, 360);

});