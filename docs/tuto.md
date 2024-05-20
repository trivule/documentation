---
sidebar_position: 1
title: Quick start tutorial
---
 
 
Welcome to the Trivule introductory tutorial! In this guide, we'll walk through using Trivule to validate a contact form. We'll explore both declarative and imperative validation methods to suit different validation needs.

## Step 1: Include Trivule

To get started with Trivule, include the library in your project. You can either add it directly from the CDN or follow the installation instructions on our [installation page](/docs/installation).

```html
<script src="https://cdn.jsdelivr.net/npm/trivule@latest/dist/index.umd.js"></script>
```

## Step 2: Form Validation

Create an HTML form with fields to validate using Trivule.

### Imperative Validation

```html
<form>
  <label for="name">Name</label>
  <div>
    <input type="text" id="name" name="name" />
    <div class="invalid-feedback"></div>
  </div>
  <label for="email">Email</label>
  <div>
    <input type="text" id="email" name="email" />
    <div class="invalid-feedback"></div>
  </div>
  <label for="message">Message</label>
 <div>
  <textarea id="message" name="message"></textarea>
  <div class="invalid-feedback"></div>
 </div>
  <p>
    <button type="submit" value="Submit" data-tr-submit>
      Submit
    </button>
  </p>
</form>
```

```js
const trivuleForm = new TrivuleForm("form", {
  feedbackSelector: ".invalid-feedback",
});

trivuleForm.make({
    name: { 
        rules: "required|between:2,80|only:string",
    },
    email: { 
        rules: "required|email|maxlength:32",
    },
    message: {
        rules: "required|between:2,250|endWith:.",
        messages: {
            endWith: "The message must end with a period (.)",
        }
    }
});
```

#### Form Submission

You can use the `onPasses` method to be notified when the form is valid.

```js
trivuleForm.onPasses((trivuleForm)=>{
  const allInputs = trivuleForm.inputs(true);
})
```

Alternatively, the `onFails` method allows you to be notified when the form is invalid.

```js
trivuleForm.onFails((trivuleForm)=>{
  // Do something
})
```

To prevent form submission, which is not mandatory as Trivule will prevent submission if it's not valid by default:

```js
trivuleForm.on('submit', (e)=>{
  if(!trivuleForm.valid){
    e.preventDefault();
  }
})
```

### Declarative Validation

```html
<form>
  <label class="label">Name</label>
  <div>
    <input
      data-tr-rules="required|between:2,80|only:string"
      type="text"
      name="name"
      required
    />
    <div data-tr-feedback="name"></div>
  </div>
  <label>Email</label>
  <div>
    <input type="text" data-tr-rules="required|email|maxlength:32" name="email" />
    <div data-tr-feedback="email"></div>
  </div>
  <label>Message</label>
  <div>
    <textarea
      data-tr-rules="required|between:2,250|endWith:."
      name="message"
    ></textarea>
    <div data-tr-feedback="message"></div>
  </div>
  <p>
    <button type="submit" value="Submit" data-tr-submit>
      Submit
    </button>
  </p>
</form>
```

In this example, we have added `data-tr-rules` attributes to the form fields to specify validation rules and `data-tr-feedback` attributes to certain `div` elements to display validation feedback.

## Step 3: Initialize Trivule

Now that we've defined our form, let's link it to Trivule to perform validation. Add the following JavaScript code at the end of your page, just before the closing `</body>` tag:

```html
<script>
    new TrivuleForm("form"); 
</script>
```

And that's it! Now, when you submit the form or when field values change, Trivule will validate according to the rules you've defined and display appropriate validation feedback.

Feel free to customize the validation rules and error messages according to your needs. You can also refer to the Trivule documentation for more information on advanced features.

I hope this tutorial was helpful for you to get started with Trivule with a concrete example. Have fun validating your forms with ease!

## Further Reading

Trivule offers many customization and configuration options to meet your specific needs. Here are some additional resources to help you explore these features:

- [Customizing Messages](/docs/messages): Learn how to customize the error messages and text displayed by Trivule.
- [Other Validation Rules](/docs/rules): Explore the different validation rules available in Trivule, such as length validation, regular expression validation, and more.
- [Validation Events](/docs/events): Learn about validation events to interact with Trivule during form validation.
- [Validating Individual Inputs](/docs/input-validation): Discover how to validate an individual form field with Trivule.
- [Validating an Individual Form](/docs/form-validation): Learn how to validate a specific form using Trivule. 
- [Examples](/docs/example): Check out real-world examples of Trivule's use for form validation.
- [Framework Integration (React, Angular, etc.)](#): Get instructions on integrating Trivule into popular frameworks like React, Angular, Vue.js, etc.
- [Contribution](/docs/contribution): Contribute to Trivule's development by providing suggestions, bug reports, or proposing improvements.
- [Development](/docs/contribution): If you are interested in Trivule development, see this documentation for information on how to contribute to the project.

These resources will help you deepen your knowledge and make the most of Trivule for your form validation. Enjoy the power and flexibility of Trivule in your projects!

### Form Style
To create a clean form style, add the following CSS code to your page. You can customize it as you like.

 
```css
form {
  width: 80%;
  min-width: 355px;
  margin: 0 auto;
}

form > div {
  margin-bottom: 0.75rem;
}

[data-tr-feedback] {
  color: red;
}

input,
textarea,
select,
input[type="file"] {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: block;
  width: 100%;
  border-radius: 5px;
}

input,
textarea,
select {
  border: 1px solid #ccc;
  padding: 8px;
  transition: border-color 0.3s ease;
}

input:hover,
textarea:hover,
select:hover,
input[type="file"]:hover {
  border-color: #999;
}

input:focus,
textarea:focus,
select:focus,
input[type="file"]:focus {
  border-color: #007bff;
}

input.is-invalid,
textarea.is-invalid,
select.is-invalid,
input[type="file"].is-invalid {
  border-left: 4px solid #ff0000;
  border-color: #ff0000;
}

input.success,
textarea.success,
select.success,
input[type="file"].success {
  border-left: 4px solid #28a745;
  border-color: #28a745;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.help {
  display: block;
  margin-top: 4px;
  font-size: 14px;
  color: #777;
}

button,
input[type="button"],
input[type="submit"],
input[type="reset"] {
  display: inline-block;
  margin: 0;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}

button:not(:disabled):hover,
input[type="button"]:not(:disabled):hover,
input[type="submit"]:not(:disabled):hover,
input[type="reset"]:not(:disabled):hover {
  background-color: #0056b3;
}

button:not(:disabled):focus,
input[type="button"]:not(:disabled):focus,
input[type="submit"]:not(:disabled):focus,
input[type="reset"]:not(:disabled):focus {
  outline: none;
  box-shadow: 0 0 0 2px #007bff;
}

button:disabled,
input[type="button"]:disabled,
input[type="submit"]:disabled,
input[type="reset"]:disabled {
  cursor: not-allowed;
  background-color: #e0e0e0;
  color: #777;
}

form {
  max-width: 500px;
  margin: auto;
}

div,
p {
  margin-bottom: 10px;
}
```
