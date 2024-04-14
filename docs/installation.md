---

sidebar_position: 1

---

# Installation

> **Note:** Experimental Quickv 2.0.

## Downloading or Using CDN

To use Quickv, follow these steps:

1. **[Download](https://quick-v.github.io/documentation/quickv.2-alpha.js)** the Quickv library from [here](https://quick-v.github.io/documentation/quickv.2-alpha.js). Alternatively, you can directly use the link: `https://quick-v.github.io/documentation/quickv.2-alpha.js`.
2. Include the Quickv library in your web page as you would any other JavaScript file.

## Installation via npm

1. Go to your project directory and enter the following command:

```bash
npm install quickv@2.0.0-alpha.2
```

After installation, you can use Quickv in your project as needed:

- For a single form field:

```js
import { QvInput } from 'quickv';
const qvInput = new QvInput('selector');
qvInput.init();
```

- For an entire form:

```js
import { QvForm } from 'quickv';
const qvForm = new QvForm('selector');
qvForm.init();
```

- For all forms:

```js
import { Quickv } from 'quickv';
const qv = new Quickv();
qv.init();
```

## Complete Example

```html
<form id="myForm">
    <div>
        <label class="label">Phone</label>
        <input type="text" data-qv-rules="required|phone:FR" name="phone" />
        <div data-qv-feedback="phone"></div>
    </div>
    <div>
        <label class="label">Date</label>
        <input
            type="date"
            data-qv-rules="required|date|after:now"
            name="date"
        />
        <div data-qv-feedback="date"></div>
    </div>
    <div>
        <label class="label">File</label>
        <input
            type="file"
            data-qv-rules="required|file|maxFileSize:1MB"
            name="file"
        />
        <div data-qv-feedback="file"></div>
    </div>
    <p><button type="submit" data-qv-submit>Submit</button></p>
</form>

<script src="https://quick-v.github.io/documentation/quickv.2-alpha.js"></script>
<script>
const qv = new Quickv();
qv.init();
</script>
```