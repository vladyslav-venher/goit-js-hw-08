document.addEventListener('DOMContentLoaded', handlerContent);
function handlerContent() {
    let loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', handlerSubmit);
        
    function handlerSubmit(event) {
        event.preventDefault();

        let email = loginForm.elements.email.value.trim();
        let password = loginForm.elements.password.value.trim();

        if (!email || !password) {
            alert('All form fields must be filled in');
            return;
        }

        let formData = {
            email: email,
            password: password,
        };

        console.log(formData);
        loginForm.reset();  
  };
};
