
function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

// Interactive visualization logic
let clickCount = 0;
let executionCount = 0;

const clickBtn = document.getElementById("clickBtn");
const clickCountDisplay = document.getElementById("clickCountDisplay");
const executionCountDisplay = document.getElementById("executionCountDisplay");
const statusIndicator = document.getElementById("statusIndicator");

// Attach debounced handler (500ms delay)
const debouncedHandler = debounce((time) => {
  executionCount++;
  executionCountDisplay.textContent = executionCount;

  statusIndicator.textContent = "Executed";
  statusIndicator.classList.remove("cooldown");

  // Return to Ready after showing execution feedback
  setTimeout(() => {
    statusIndicator.textContent = "Ready";
  }, 500);
}, 500);

clickBtn.addEventListener("click", () => {
  clickCount++;
  clickCountDisplay.textContent = clickCount;

  statusIndicator.textContent = "Waiting...";
  statusIndicator.classList.add("cooldown");

  // Pass the current timestamp as an argument
  debouncedHandler(Date.now());
});

// Make debounce globally accessible for evaluation
window.debounce = debounce;
