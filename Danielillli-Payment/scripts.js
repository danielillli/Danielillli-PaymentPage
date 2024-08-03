document.addEventListener('DOMContentLoaded', () => {
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = 0;

    deliveryOptions.forEach(option => {
        option.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
        totalAmount = parseFloat(selectedDelivery.value);
        totalAmountElement.textContent = totalAmount.toFixed(2);
    }

    updateTotal(); // Initialize total amount based on default selection
});

function finishPayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').id;

    if (paymentMethod === 'paypal') {
        window.open('https://www.paypal.com', '_blank');
    } else {
        const cardNumber = document.getElementById('cardnumber').value;
        const expiry = document.getElementById('expiry').value;
        const cvc = document.getElementById('cvc').value;

        if (!cardNumber || !expiry || !cvc) {
            alert('Please fill in all card details.');
            return;
        }

        alert('Payment successful with Credit/Debit Card!');
    }
}
