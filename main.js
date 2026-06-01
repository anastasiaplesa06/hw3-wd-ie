document.addEventListener("DOMContentLoaded", function() {
    
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        if (darkModeToggle) darkModeToggle.textContent = "☀️";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                darkModeToggle.textContent = "☀️";
            } else {
                localStorage.setItem("darkMode", "disabled");
                darkModeToggle.textContent = "🌙";
            }
        });
    }

    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.setAttribute('novalidate', true);

        form.addEventListener('submit', (e) => {
            let isValid = true;
            const inputs = form.querySelectorAll('input, select, textarea');

            inputs.forEach(input => {
                const existingError = input.parentNode.querySelector('.error-message');
                if (existingError) existingError.remove();
                
                input.setAttribute('aria-invalid', 'false');
                input.style.borderColor = ''; 

                if (!input.checkValidity()) {
                    isValid = false;
                    input.setAttribute('aria-invalid', 'true');
                    input.style.borderColor = '#ff3333'; 

                    const errorSpan = document.createElement('span');
                    errorSpan.className = 'error-message';
                    errorSpan.style.color = '#ff3333';
                    errorSpan.style.fontSize = '0.9em';
                    errorSpan.style.display = 'block';
                    errorSpan.style.marginTop = '5px';
                    errorSpan.style.fontWeight = 'bold';
                    errorSpan.setAttribute('role', 'alert'); 
                    
                    if (input.validity.valueMissing) {
                        errorSpan.textContent = "Error: This field is required.";
                    } else if (input.validity.typeMismatch) {
                        errorSpan.textContent = "Error: Please enter a valid format.";
                    } else {
                        errorSpan.textContent = `Error: ${input.validationMessage}`;
                    }
                    
                    input.parentNode.insertBefore(errorSpan, input.nextSibling);
                }
            });

            e.preventDefault(); 

            if (isValid) {
                const tbody = document.getElementById('project-list');
                
                if (tbody) {
                    const newRow = document.createElement('tr');
                    
                    const name = document.getElementById('proj-name').value;
                    const url = document.getElementById('proj-url').value;
                    const subject = document.getElementById('proj-subject').value;
                    const date = document.getElementById('proj-date').value;
                    const tech = document.getElementById('proj-tech').value;
                    const desc = document.getElementById('proj-desc').value;
                    const fileInput = document.getElementById('proj-image');
                    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No image';

                    newRow.innerHTML = `
                        <td>${name}</td>
                        <td>${url ? `<a href="${url}" target="_blank" style="color:#8b0000; font-weight:bold;">View Link</a>` : 'N/A'}</td>
                        <td>${subject}</td>
                        <td>${date}</td>
                        <td>${tech}</td>
                        <td>${fileName}</td>
                        <td>${desc}</td>
                    `;
                    
                    tbody.appendChild(newRow);
                    alert("Project successfully added!");
                } else {
                    alert("Form submitted successfully!");
                }
                
                form.reset(); 
            }
        });

        form.addEventListener('reset', () => {
            const errorMessages = form.querySelectorAll('.error-message');
            errorMessages.forEach(error => error.remove());
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.setAttribute('aria-invalid', 'false');
                input.style.borderColor = ''; 
            });
        });
    });
});