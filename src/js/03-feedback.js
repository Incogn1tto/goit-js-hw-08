import { throttle } from 'lodash';
const feedbackFromEl = document.querySelector('.feedback-form');
const emailInputEl = feedbackFromEl.querySelector('input[name="email"]');
const messageInputEl = feedbackFromEl.querySelector('textarea[name="message"]');

feedbackFromEl.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInputEl.value,
      message: messageInputEl.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInputEl.value = formData.email;
    messageInputEl.value = formData.message;
  }
});

feedbackFromEl.addEventListener('submit', e => {
  e.preventDefault();

  const formData = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInputEl.value = '';
  messageInputEl.value = '';
});
