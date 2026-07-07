/**
 * SCAC — Loan Calculator
 */
function calculateLoan() {
    const amountEl = document.getElementById('loanAmount');
    const termEl = document.getElementById('loanTerm');
    const rateEl = document.getElementById('interestRate');
    if (!amountEl || !termEl || !rateEl) return;

    const amount = parseFloat(amountEl.value);
    const term = parseInt(termEl.value, 10);
    const rate = parseFloat(rateEl.value) / 100 / 12;

    document.getElementById('loanAmountValue').textContent = '$' + amount.toLocaleString();
    document.getElementById('interestRateValue').textContent = rateEl.value;

    let monthlyPayment = 0;
    if (rate > 0) {
        monthlyPayment = amount * (rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    } else {
        monthlyPayment = amount / term;
    }

    const totalRepayment = monthlyPayment * term;
    const totalInterest = totalRepayment - amount;

    document.getElementById('monthlyPayment').textContent = '$' + Math.round(monthlyPayment).toLocaleString();
    document.getElementById('totalInterest').textContent = '$' + Math.round(totalInterest).toLocaleString();
    document.getElementById('totalRepayment').textContent = '$' + Math.round(totalRepayment).toLocaleString();
}

function initCalculator() {
    const loanSlider = document.getElementById('loanAmount');
    const rateSlider = document.getElementById('interestRate');
    const termSelect = document.getElementById('loanTerm');

    if (!loanSlider) return;

    loanSlider.addEventListener('input', calculateLoan);
    rateSlider.addEventListener('input', calculateLoan);
    termSelect.addEventListener('change', calculateLoan);
    setTimeout(calculateLoan, 100);
}
