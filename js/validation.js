document.addEventListener('DOMContentLoaded', () => {
    
    // Role Selectors (Login & Signup)
    const roleBtns = document.querySelectorAll('.role-btn');
    roleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from siblings
            const parent = this.parentElement;
            parent.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            
            // Update hidden input
            const roleInput = parent.nextElementSibling;
            if (roleInput && (roleInput.id === 'loginRole' || roleInput.id === 'signupRole')) {
                roleInput.value = this.dataset.role;
            }
        });
    });

    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const email = document.getElementById('email').value.trim();
            const pwd = document.getElementById('password').value;
            const role = document.getElementById('loginRole').value;
            
            // Basic Email Validation
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
            
            // Basic Pwd Validation
            if (!pwd) {
                document.getElementById('pwdError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('pwdError').style.display = 'none';
            }
            
            if (isValid) {
                // Simulate Login Request
                const btn = loginForm.querySelector('button[type="submit"]');
                const origText = btn.innerText;
                btn.innerText = 'Logging in...';
                btn.disabled = true;
                
                setTimeout(() => {
                    if (role === 'admin') {
                        window.location.href = 'adminDashboard.html';
                    } else {
                        window.location.href = 'clientDashboard.html';
                    }
                }, 800);
            }
        });
    }

    // Signup Form Validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('fullname').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const pwd = document.getElementById('regPassword').value;
            const confirmPwd = document.getElementById('confirmPwd').value;
            
            if (!name) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
            
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                document.getElementById('regEmailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('regEmailError').style.display = 'none';
            }
            
            if (!pwd || pwd.length < 8) {
                document.getElementById('regPwdError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('regPwdError').style.display = 'none';
            }
            
            if (pwd !== confirmPwd || !confirmPwd) {
                document.getElementById('confirmPwdError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('confirmPwdError').style.display = 'none';
            }
            
            if (isValid) {
                const btn = signupForm.querySelector('button[type="submit"]');
                btn.innerText = 'Creating Account...';
                btn.disabled = true;
                
                setTimeout(() => {
                    document.getElementById('signupSuccess').style.display = 'block';
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1500);
                }, 800);
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const reqFields = ['cName', 'cEmail', 'cPhone', 'cSubject', 'cMessage'];
            reqFields.forEach(id => {
                const el = document.getElementById(id);
                const err = document.getElementById(id + 'Error');
                if (!el.value.trim()) {
                    err.style.display = 'block';
                    isValid = false;
                } else {
                    err.style.display = 'none';
                }
            });
            
            if (isValid) {
                const btn = contactForm.querySelector('button[type="submit"]');
                btn.innerText = 'Sending...';
                btn.disabled = true;
                
                setTimeout(() => {
                    document.getElementById('contactSuccess').style.display = 'block';
                    contactForm.reset();
                    btn.innerText = 'Send Message';
                    btn.disabled = false;
                    setTimeout(() => {
                        document.getElementById('contactSuccess').style.display = 'none';
                    }, 4000);
                }, 1000);
            }
        });
    }
});
