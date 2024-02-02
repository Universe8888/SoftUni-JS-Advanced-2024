function validate() {
    document.querySelector("#submit").type = "button";

    document.querySelector("#company").addEventListener("change", () => {
        const companyInfo = document.querySelector("#companyInfo");
        companyInfo.style.display = document.querySelector("#company").checked ? "block" : "none";
    });

    document.querySelector("#submit").addEventListener("click", () => {
        let isValid = true;

        const username = document.querySelector("#username");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirm-password");
        const companyNumber = document.querySelector("#companyNumber");

        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        const passwordPattern = /^[\w]{5,15}$/;

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = "red";
            isValid = false;
        } else {
            username.style.borderColor = "";
        }

        if (!emailPattern.test(email.value)) {
            email.style.borderColor = "red";
            isValid = false;
        } else {
            email.style.borderColor = "";
        }

        if (!passwordPattern.test(password.value) || password.value !== confirmPassword.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            isValid = false;
        } else {
            password.style.borderColor = "";
            confirmPassword.style.borderColor = "";
        }

        if (document.querySelector("#company").checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isValid = false;
            } else {
                companyNumber.style.borderColor = "";
            }
        }

        document.querySelector("#valid").style.display = isValid ? "block" : "none";
    });
}

//solution with nested functions

function validate() {
    document.querySelector("#submit").type = "button";

    document.querySelector("#company").addEventListener("change", toggleCompanyInfo);

    document.querySelector("#submit").addEventListener("click", validateForm);

    function toggleCompanyInfo() {
        const companyInfo = document.querySelector("#companyInfo");
        companyInfo.style.display = document.querySelector("#company").checked ? "block" : "none";
    }

    function validateForm() {
        let isValid = true;

        function validateUsername() {
            const username = document.querySelector("#username");
            const pattern = /^[A-Za-z0-9]{3,20}$/;
            if (!pattern.test(username.value)) {
                username.style.borderColor = "red";
                return false;
            } else {
                username.style.borderColor = "";
                return true;
            }
        }

        function validateEmail() {
            const email = document.querySelector("#email");
            const pattern = /^[^@.]+@[^@]*\.[^@]*$/;
            if (!pattern.test(email.value)) {
                email.style.borderColor = "red";
                return false;
            } else {
                email.style.borderColor = "";
                return true;
            }
        }

        function validatePassword() {
            const password = document.querySelector("#password");
            const confirmPassword = document.querySelector("#confirm-password");
            const pattern = /^[\w]{5,15}$/;
            if (!pattern.test(password.value) || password.value !== confirmPassword.value) {
                password.style.borderColor = "red";
                confirmPassword.style.borderColor = "red";
                return false;
            } else {
                password.style.borderColor = "";
                confirmPassword.style.borderColor = "";
                return true;
            }
        }

        function validateCompanyNumber() {
            if (document.querySelector("#company").checked) {
                const companyNumber = document.querySelector("#companyNumber");
                if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                    companyNumber.style.borderColor = "red";
                    return false;
                } else {
                    companyNumber.style.borderColor = "";
                    return true;
                }
            }
            return true;
        }

        isValid &= validateUsername();
        isValid &= validateEmail();
        isValid &= validatePassword();
        isValid &= validateCompanyNumber();

        document.querySelector("#valid").style.display = isValid ? "block" : "none";
    }
}