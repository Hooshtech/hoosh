function toggleFaq(clickedCard) {
            const isActive = clickedCard.classList.contains('active');

            // Close all cards
            document.querySelectorAll('.faq-card').forEach(card => {
                card.classList.remove('active');
                card.querySelector('.faq-toggle').innerText = '+';
            });

            // Toggle current one
            if (!isActive) {
                clickedCard.classList.add('active');
                clickedCard.querySelector('.faq-toggle').innerText = '×';
            }
        }

        const fullName = document.getElementById('fullName');
        const emailAddress = document.getElementById('emailAddress');
        const message = document.getElementById('message');
        const sendButton = document.getElementById('sendButton');

        function validateForm() {
            const isValid =
                fullName.value.trim() !== '' &&
                emailAddress.value.trim() !== '' &&
                message.value.trim() !== '';

            sendButton.disabled = !isValid;
        }

        fullName.addEventListener('input', validateForm);
        emailAddress.addEventListener('input', validateForm);
        message.addEventListener('input', validateForm);



        // navbar
        