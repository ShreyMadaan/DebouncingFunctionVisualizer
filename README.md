# Debouncing Function Visualizer

An interactive, dependency-free visualizer for understanding how JavaScript
debouncing works.

Click **Trigger Event** repeatedly and compare:

- **Total Clicks**: every click received by the button.
- **Debounced Calls**: executions that happen only after the button has not
  been clicked for 500 ms.
- **Status**: whether the debounced callback is waiting or has executed.

## Demo behavior

The project includes a reusable `debounce` function:

```js
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
```

Each click resets the timer. As a result, a rapid sequence of clicks produces
one debounced execution after the final click, rather than one execution per
click.

## Getting started

No build step or package installation is required.

1. Clone or download the repository.
2. Open `index.html` in a modern web browser.
3. Click **Trigger Event** once or several times.
4. Pause for at least 500 ms to see the debounced call count increase.

For a better local development experience, serve the directory with any static
HTTP server and open the provided local URL. For example, with Python
installed:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Project structure

```text
.
├── index.html   # Page markup and visualizer controls
├── script.js    # Debounce implementation and interaction logic
├── styles.css   # Responsive dark-theme styling
└── README.md    # Project documentation
```

## Customization

To change the debounce interval, update the delay passed to
`debounce` in [`script.js`](./script.js):

```js
const debouncedHandler = debounce((time) => {
  // Debounced work
}, 500);
```

The `debounce` function is also exposed as `window.debounce`, making it
available for experimentation from the browser developer console.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Author

Created by **Shrey Madaan**.
