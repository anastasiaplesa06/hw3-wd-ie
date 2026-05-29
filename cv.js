const projectForm = document.getElementById('project-form');
const projectList = document.getElementById('project-list');

projectForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

    function showError(inputId, errorId, message) {
        const input = document.getElementById(inputId);
        const errorSpan = document.getElementById(errorId);
        
        input.classList.add('error-border');
        errorSpan.textContent = message;
        isValid = false;
    }

    function clearErrors() {
        const inputs = document.querySelectorAll('.error-border');
        inputs.forEach(input => input.classList.remove('error-border'));
        
        const spans = document.querySelectorAll('.error-message');
        spans.forEach(span => span.textContent = '');
    }

    clearErrors();

    const name = document.getElementById('proj-name').value.trim();
    const url = document.getElementById('proj-url').value.trim();
    
    // UPDATED: Now looks for proj-subject
    const subject = document.getElementById('proj-subject').value;
    
    const date = document.getElementById('proj-date').value;
    const desc = document.getElementById('proj-desc').value.trim();

    if (name === "") {
        showError('proj-name', 'name-error', 'Error: Project Name is required.');
    }

    if (url !== "" && !url.startsWith('http')) {
        showError('proj-url', 'url-error', 'Error: URL must start with http:// or https://');
    }
    
    if (subject === "") {
        showError('proj-subject', 'subject-error', 'Error: Please select a subject area from the dropdown.');
    }

    if (date === "") {
        showError('proj-date', 'date-error', 'Error: A completion date is required.');
    }

    if (desc === "") {
        showError('proj-desc', 'desc-error', 'Error: Please provide a short description.');
    }

    if (isValid === true) {
        
        const newRow = document.createElement('tr');

        const linkHTML = url !== "" ? `<a href="${url}" target="_blank">View Project</a>` : 'N/A';

        newRow.innerHTML = `
            <td><strong>${name}</strong></td>
            <td>${subject}</td>
            <td>${date}</td>
            <td>${desc}</td>
            <td>${linkHTML}</td>
        `;

        projectList.appendChild(newRow);

        projectForm.reset();
    }
});

projectForm.addEventListener('reset', function() {
    const inputs = document.querySelectorAll('.error-border');
    inputs.forEach(input => input.classList.remove('error-border'));
    
    const spans = document.querySelectorAll('.error-message');
    spans.forEach(span => span.textContent = '');
});