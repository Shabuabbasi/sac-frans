/**
 * SCAC — Multi-step Application Form
 */
let currentStep = 1;
const totalSteps = 4;

const stepLabels = [
    'Step 1 of 4 — Personal Information',
    'Step 2 of 4 — Employment & Income',
    'Step 3 of 4 — Loan Request Details',
    'Step 4 of 4 — Review & Submit'
];

function showStep(step) {
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));
    const activeStep = document.getElementById('step' + step);
    if (activeStep) {
        activeStep.classList.add('active');
    }

    const progress = Math.round((step / totalSteps) * 100);
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    const stepText = document.getElementById('stepText');
    if (progressBar) progressBar.style.width = progress + '%';
    if (progressPercent) progressPercent.textContent = progress + '%';
    if (stepText) stepText.textContent = stepLabels[step - 1];

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'flex';

    if (step === totalSteps) {
        if (nextBtn) nextBtn.style.display = 'none';
        if (submitBtn) submitBtn.style.display = 'flex';
        updateReview();
    } else {
        if (nextBtn) nextBtn.style.display = 'flex';
        if (submitBtn) submitBtn.style.display = 'none';
    }
}

function nextStep() {
    const currentFormStep = document.getElementById('step' + currentStep);
    const requiredFields = currentFormStep ? currentFormStep.querySelectorAll('[required]') : [];
    let valid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('!border-red-500');
            field.setAttribute('aria-invalid', 'true');
            valid = false;
        } else {
            field.classList.remove('!border-red-500');
            field.removeAttribute('aria-invalid');
        }
    });

    if (!valid) {
        alert('Please fill out all required fields before continuing.');
        return;
    }

    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function updateReview() {
    const first = document.getElementById('firstName').value;
    const last = document.getElementById('lastName').value;
    document.getElementById('reviewName').textContent = `${first} ${last}`;
    document.getElementById('reviewPhone').textContent = document.getElementById('phone').value;
    document.getElementById('reviewEmail').textContent = document.getElementById('email').value;
    document.getElementById('reviewIncome').textContent = '$' + parseInt(document.getElementById('monthlyIncome').value || 0, 10).toLocaleString() + '/mo';
    document.getElementById('reviewLoanType').textContent = document.getElementById('loanType').options[document.getElementById('loanType').selectedIndex].text;
    document.getElementById('reviewAmount').textContent = '$' + parseInt(document.getElementById('requestedAmount').value || 0, 10).toLocaleString();
}

function toggleEmploymentFields() {
    const status = document.getElementById('employmentStatus').value;
    const employer = document.getElementById('employerField');
    const jobTitle = document.getElementById('jobTitleField');

    if (status === 'employed') {
        if (employer) employer.style.display = 'block';
        if (jobTitle) jobTitle.style.display = 'block';
    } else if (status === 'self' || status === 'retired' || status === 'other') {
        if (employer) employer.style.display = 'none';
        if (jobTitle) jobTitle.style.display = 'none';
    }
}

function validateUpload(input) {
    const file = input.files && input.files[0];
    const message = document.getElementById(input.dataset.messageId);
    if (!message) return false;

    if (!file) {
        message.innerHTML = '';
        return false;
    }

    const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'doc', 'docx'];
    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const allowedTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedExtensions.includes(ext) || (!allowedTypes.includes(file.type) && file.type)) {
        message.innerHTML = '<span class="text-red-600">Unsupported file type. Please upload PDF, JPG, PNG, DOC, or DOCX.</span>';
        input.value = '';
        return false;
    }

    if (file.size > 10 * 1024 * 1024) {
        message.innerHTML = '<span class="text-red-600">File is too large. Please keep uploads under 10 MB.</span>';
        input.value = '';
        return false;
    }

    message.innerHTML = `<span class="text-emerald-700">✓ ${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)</span>`;
    return true;
}

function normalizeFormFields() {
    const form = document.getElementById('creditAppForm');
    if (!form) return;

    Array.from(form.elements).forEach((element) => {
        if (!element.name && element.id) {
            element.name = element.id;
        }
    });
}

function getFormFieldEntries() {
    const form = document.getElementById('creditAppForm');
    if (!form) return [];

    normalizeFormFields();
    const entries = [];
    Array.from(form.elements).forEach((element) => {
        if (!element.name || element.disabled) return;
        if (element.tagName === 'BUTTON') return;
        if (element.type === 'file') return;
        if (element.type === 'button' || element.type === 'submit' || element.type === 'reset') return;
        if (element.type === 'checkbox' || element.type === 'radio') {
            if (element.checked) {
                entries.push([element.name, element.value || 'on']);
            }
            return;
        }
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
            entries.push([element.name, element.value]);
        }
    });
    return entries;
}

function collectApplicationData() {
    return getFormFieldEntries()
        .filter(([key]) => key !== 'bot-field' && key !== 'form-name')
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
}

function submitApplication(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="flex items-center gap-3"><i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Submitting...</span>';
    }

    const form = document.getElementById('creditAppForm');

    if (!form) {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit My Application <i class="fas fa-check" aria-hidden="true"></i>';
        }
        return;
    }

    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.setAttribute('aria-hidden', 'false');
    }

    window.setTimeout(() => {
        form.submit();
    }, 400);
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initForm() {
    normalizeFormFields();
    showStep(1);
    const empSelect = document.getElementById('employmentStatus');
    if (empSelect) {
        empSelect.addEventListener('change', toggleEmploymentFields);
    }

    document.querySelectorAll('input[type="file"][data-message-id]').forEach(input => {
        input.addEventListener('change', () => validateUpload(input));
    });

    const form = document.getElementById('creditAppForm');
    if (form) {
        form.addEventListener('submit', submitApplication);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && document.activeElement.tagName === 'INPUT') {
            const nextButton = document.getElementById('nextBtn');
            if (nextButton && nextButton.style.display !== 'none') {
                e.preventDefault();
                nextButton.click();
            }
        }
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}
