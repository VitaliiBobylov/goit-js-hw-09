const storage_key = 'feedback-form';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const textarea = form.querySelector('textarea');

textarea.addEventListener('input', onTextareaInput);

populateTextarea();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(storage_key);

  formData = { email: '', message: '' };
}

function onTextareaInput(event) {
  formData.email = form.elements.email.value;

  formData.message = form.elements.message.value;

  localStorage.setItem(storage_key, JSON.stringify(formData));
}

function populateTextarea() {
  const savedFormData = localStorage.getItem(storage_key);

  if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);

    textarea.value = parsedData.message || '';
    form.elements.email.value = parsedData.email || '';

    formData = parsedData;
  }

  console.log(savedFormData);
}
