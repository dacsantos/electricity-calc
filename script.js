window.onload = function() {
 
    const billForm = document.getElementById('calculate-bill-form')
    billForm.addEventListener('submit', function(e) {
        e.preventDefault()
        const electricityUnits = document.getElementById('electricity-units').value;
        const billingPeriod = document.getElementById('billing-period').value;

        var totalLessVat = 0,
            flatRate = 20,
            standardCharge = 4;
            vat = 13.5;

        totalLessVat = ((parseFloat(electricityUnits) * (parseFloat(flatRate/100))) + (parseFloat(billingPeriod) * (parseFloat(standardCharge/100))));
        totalPayable = parseFloat(totalLessVat) + parseFloat(totalLessVat)* vat/100;

        document.getElementById('total-less-vat').textContent = "€ " + parseFloat(totalLessVat).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-pay').textContent = "€ " + parseFloat(totalPayable).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('vat').textContent = "€ " + parseFloat(parseFloat(totalLessVat)* vat/100).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('table-title').style.display = 'block';
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
     })

    billForm.addEventListener('reset', function(e) {
            document.getElementById('total-less-vat').textContent = "";
            document.getElementById('total-pay').textContent = "";
            document.getElementById('vat').textContent = "";
            document.getElementById('table-title').style.display = 'none';
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
    })
}

