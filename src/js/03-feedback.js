import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let formState = {};

const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);
window.addEventListener('load', onLoad);

function onInput(e) {
  const { value, name } = e.target;
  formState[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}
function onSubmit(e) {
  e.preventDefault();
  formState = {};
  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}
function onLoad() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    formState = JSON.parse(data);
    Object.entries(formState).forEach(([key, value]) => {
      formEl.elements[key].value = value;
    });
  } catch ({ message }) {}
}
