---

sidebar_position: 2

---

# Installation

> **Note:** Experimental Trivule 2.0.

## Downloading or Using CDN

To use Trivule, follow these steps:

1. **[Download](https://trivule.github.io/documentation/Trivule.2-alpha.js)** the Trivule library from [here](https://trivule.github.io/documentation/Trivule.2-alpha.js). Alternatively, you can directly use the link: `https://trivule.github.io/documentation/Trivule.2-alpha.js`.
2. Include the Trivule library in your web page as you would any other JavaScript file.

## Installation via npm

1. Go to your project directory and enter the following command:

```bash
npm install Trivule@2.0.0-alpha.2
```

After installation, you can use Trivule in your project as needed:

- For a single form field:

```js
import { TrInput } from 'Trivule';
const trInput = new TrInput('selector');
trInput.init();
```

- For an entire form:

```js
import { TrForm } from 'Trivule';
const trForm = new TrForm('selector');
trForm.init();
```

- For all forms:

```js
import { Trivule } from 'Trivule';
const tr = new Trivule();
tr.init();
```

## Complete Example

```html
<form id="myForm">
    <div>
        <label class="label">Phone</label>
        <input type="text" data-tv-rules="required|phone:FR" name="phone" />
        <div data-tv-feedback="phone"></div>
    </div>
    <div>
        <label class="label">Date</label>
        <input
            type="date"
            data-tv-rules="required|date|after:now"
            name="date"
        />
        <div data-tv-feedback="date"></div>
    </div>
    <div>
        <label class="label">File</label>
        <input
            type="file"
            data-tv-rules="required|file|maxFileSize:1MB"
            name="file"
        />
        <div data-tv-feedback="file"></div>
    </div>
    <p><button type="submit" data-tv-submit>Submit</button></p>
</form>

<script src="https://trivule.github.io/documentation/Trivule.2-alpha.js"></script>
<script>
const tr = new Trivule();
tr.init();
</script>
```