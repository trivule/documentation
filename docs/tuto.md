---
sidebar_position: 1
title: Tutorial in 5 Minutes
---
> **Note:** Trivule 2.0 (Experimental)

# Trivule Tutorial in 5 Minutes

Welcome to the Trivule introductory tutorial! In this tutorial, we will learn how to use Trivule to validate a contact form. Here's what we'll do:

- Validate the email address (maximum of 32 characters) 
- Validate the name (length must be between 2 and 80 characters, cannot contain numbers)
- Validate the phone number (validate a phone number)
- Validate the message (length between 2 and 250 characters, and end with a point (.))

## Step 1: Include Trivule

First, download the Trivule library from [this link](https://trivule.github.io/documentation/Trivule.2-alpha.js). Then, be sure to include the Trivule library in your web page. You can do this by adding a `<script>` tag with the path to the `Trivule.2-alpha.js` file (the source code). Make sure to include this tag before the closing `<body>` tag.

```html
<script src="Trivule.2-alpha.js"></script>
```
## Step 2: Define the Form

Create a blank page for testing and add the following HTML code.

We will create an HTML form with fields to validate using Trivule.

Here's an example:

```html
<form>
    <div>
        <label class="label">Name</label>
        <div>
            <input
                data-tv-rules="required|between:2,80|only:string"
                type="text"
                name="name"
                required
            />
        </div>
        <div data-tv-feedback="name"></div>
    </div>
    <div>
        <label>Email</label>
        <input type="text" data-tv-rules="required|email|maxlength:32" name="email" />
        <div data-tv-feedback="email"></div>
    </div>
    <div>
        <label>Phone Number</label>
        <input type="text" data-tv-rules="required|phone" name="phone" />
        <div data-tv-feedback="phone"></div>
    </div>
    <div>
        <label>Message</label>
        <textarea
            data-tv-rules="required|between:2,250|endWith:."
            name="message"
        ></textarea>
        <div data-tv-feedback="message"></div>
    </div>
    <p>
        <button type="submit" value="Submit" data-tv-submit>
            Submit
        </button>
    </p>
</form>
```

In this example, we have added `data-tv-rules` attributes to the form fields to specify validation rules and `data-tv-feedback` attributes to certain `div` elements to display validation feedback.

### Form Style
To create a clean form style, add the following CSS code to your page.
You can customize it as you like.

```css
form {
  width: 80%;
  min-width: 355px;
  margin: 0 auto;
}

form > div {
  margin-bottom: 0.75rem;
}

[data-tv-feedback] {
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

## Step 3: Initialize Trivule

Now that we've defined our form, let's link it to Trivule to perform validation. Add the following JavaScript code at the end of your page, just before the closing `</body>` tag:

```html
<script>
  const tr = new Trivule();
  tr.init();
</script>
```

In this example, we create an instance of `Trivule` and call the `init()` method to initialize the validation.

And that's it! Now, when you submit the form or interact with the fields, Trivule will validate according to the rules you've defined and display appropriate validation feedback.

Feel free to customize the validation rules and error messages according to your needs. You can also refer to the Trivule documentation for more information on advanced features.

I hope this tutorial was helpful for you to get started with Trivule with a concrete example. Have fun validating your forms with ease!

## Further Reading

Trivule offers many customization and configuration options to meet your specific needs. Here are some additional resources to help you explore these features:

- [Customizing Messages](/docs/validation/messages): Learn how to customize the error messages and text displayed by Trivule.
- [Other Validation Rules](/docs/validation/rules): Explore the different validation rules available in Trivule, such as length validation, regular expression validation, and more.
- [Validation Events](/docs/validation/events): Learn about validation events to interact with Trivule during form validation.
- [Validating Individual Inputs](/docs/validation/tr-input): Discover how to validate an individual form field with Trivule.
- [Validating an Individual Form](/docs/validation/tr-form): Learn how to validate a specific form using Trivule.
- [Validating Forms on a Page](/docs/validation/tr-Trivule): Discover how to validate all forms on a page at once.
- [Examples](/docs/example): Check out real-world examples of Trivule's use for form validation.
- [Framework Integration (React, Angular, etc.)](/docs/frameworks): Get instructions on integrating Trivule into popular frameworks like React, Angular, Vue.js, etc.
- [Contribution](/docs/contribution): Contribute to Trivule's development by providing suggestions, bug reports, or proposing improvements.
- [Development](/docs/contribution): If you are interested in Trivule development, see this documentation for information on how to contribute to the project.

These resources will help you deepen your knowledge and make the most of Trivule for your form validation. Enjoy the power and flexibility of Trivule in your projects!