const storage_key = 'feedback-form';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const textarea = form.elements.message;

populateForm();

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onFormInput);

function handleSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    return;
  }

  console.log(formData);

  form.reset();

  localStorage.removeItem(storage_key);

  formData = { email: '', message: '' };
}

function onFormInput(event) {
  formData.email = form.elements.email.value;

  formData.message = form.elements.message.value;

  localStorage.setItem(storage_key, JSON.stringify(formData));
}

function populateForm() {
  const savedFormData = localStorage.getItem(storage_key);

  if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);

    textarea.value = parsedData.message || '';
    form.elements.email.value = parsedData.email || '';

    formData = parsedData;
  }
}
