---
sidebar_position: 2
title: Installation
---

# Installation

## Downloading or Using CDN

To use Trivule, follow these steps:

1. **[Download](https://cdn.jsdelivr.net/npm/trivule@1.0.0/dist/index.umd.js)** the Trivule library from [here](https://cdn.jsdelivr.net/npm/trivule@1.0.0/dist/index.umd.js). Alternatively, you can directly use the link: `https://cdn.jsdelivr.net/npm/trivule@1.0.0/dist/index.umd.js`.
2. Include the Trivule library in your web page as you would any other JavaScript file.

## Installation via npm

1. Go to your project directory and enter the following command:

```bash
npm i trivule
```

After installation, you can use Trivule in your project as needed:

- For a single form field:

```js
import { TrInput } from 'trivule';
const trInput = new TrInput('selector');
trInput.init();
```

- For an entire form:

```js
import { TrForm } from 'trivule';
const trForm = new TrForm('selector');
trForm.init();
```

- For all forms:

```js
import { Trivule } from 'trivule';
const tr = new Trivule();
tr.init();
```

## Complete Example

```html
<form id="myForm">
    <div>
        <label class="label">Phone</label>
        <input type="text" data-tr-rules="required|phone:FR" name="phone" />
        <div data-tr-feedback="phone"></div>
    </div>
    <div>
        <label class="label">Date</label>
        <input
            type="date"
            data-tr-rules="required|date|after:now"
            name="date"
        />
        <div data-tr-feedback="date"></div>
    </div>
    <div>
        <label class="label">File</label>
        <input
            type="file"
            data-tr-rules="required|file|maxFileSize:1MB"
            name="file"
        />
        <div data-tr-feedback="file"></div>
    </div>
    <p><button type="submit" data-tr-submit>Submit</button></p>
</form>

<script src="https://cdn.jsdelivr.net/npm/trivule@1.0.0/dist/index.umd.js"></script>
<script>
const tr = new Trivule();
tr.init();
</script>
```