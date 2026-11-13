// Attach event listener to the document to handle dynamically loaded elements
document.addEventListener('input', function(event) {
    // Check if the input is coming from the phone number field
    if (event.target && event.target.id === 'exampleInputPhone') {
        
        // Remove any spaces or non-digit characters from the input
        let phoneNumber = event.target.value.replace(/\D/g, '');
        
        // Check if the exact length is 10 digits
        if (phoneNumber.length === 10) {
            // Find the email input field
            let emailInput = document.querySelector('input[name="email"]');
            let lastName = document.querySelector('input[name="l_name"]');
            let firstName = document.querySelector('input[name="f_name"]');
            let city = document.querySelector('input[name="city"]');
            
            // If email field exists, set the auto-generated email
            if (emailInput) {
                emailInput.value = `customers+${phoneNumber}@pos.nest.com.bd`;
                firstName.value = `0${phoneNumber}`;
                lastName.value = `0${phoneNumber}`;
                city.value = `Dhaka`;
            }
        }
    }
    // emailInput.value = `customers+${phoneNumber}@pos.nest.com.bd`;
});
