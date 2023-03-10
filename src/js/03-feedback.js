import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const feedbackEmailInput = form.querySelector('input');
const feedbackMessageTextarea = form.querySelector('textarea');

fillForm();

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormInput, 500));

function handleFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}
function handleFormInput(e) {
  const formData = {
    email: feedbackEmailInput.value,
    message: feedbackMessageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function fillForm() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    feedbackEmailInput.value = parsedFormData.email;
    feedbackMessageTextarea.value = parsedFormData.message;
  }
}

