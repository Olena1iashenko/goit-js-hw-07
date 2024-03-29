const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
    if (!inputEl.value.trim()) {
        spanEl.textContent = "Anonymous";
        return;
  }
 spanEl.textContent = inputEl.value;
});

