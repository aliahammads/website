document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function(event) {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const resume = document.querySelector('#resume').value;
        const role = document.querySelector('#role').value;
        const experience = document.querySelector('#experience').value;

        if (!name || !email || !phone || !resume || !role || !experience) {
            event.preventDefault();
            document.querySelector('.error').innerHTML = 'Please fill in all fields.';
        }
    };
});
