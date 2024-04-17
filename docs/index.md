---
sidebar_position: 0
---
# Why Trivule?

**Trivule** (pronounced "**cue-v**" in French) is a user-friendly JavaScript library designed to simplify the dynamic validation of HTML forms on your web pages.

It was created to eliminate redundancy, save time, and reduce the complexity of form validation processes. By using intuitive HTML attributes, this library allows you to add complex and advanced validation rules without the need to know JavaScript. It aligns with the native logic of HTML validation, making the process simple, familiar, and seamless.

**Trivule** is an excellent option if you are looking for a quick way to implement complex validation on your site without having to write JavaScript code, regardless of your level of web development experience.

## Example

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
```
 

Result
![Capture d'écran de la validation](./screenshot.PNG) 

## Validation Rules

The validation rules in Trivule are predefined character strings that specify the conditions the form field values must meet. They are used as arguments in the `data-tv-rules` attribute. For example:

```html
<input type="file" data-tv-rules="required|file|maxFileSize:1MB">
```

Explanation of the rules:
- `required`: Indicates that the field is required.
- `file`: Specifies that the value of the field must be a file.
- `maxFileSize`: Sets the maximum allowed file size, in this case, 1MB.

[Learn more](/docs/validation/rules/)

## Events

In Trivule, validation is triggered by JavaScript events or custom events. By default, Trivule triggers validation during the following events: `blur`, `input`, and `change`. You can customize these events as desired.

Unlike traditional JavaScript where you have to write event listeners, with Trivule, you don't need to worry about that. You can simply specify the desired events as a string, similar to how you do with validation rules. For example:

```html
<input type="file" data-tv-events="click|mouseenter|my-custom-event">
```

In this example, Trivule listens to the following events on the input element and triggers validation when they occur:
- `click`: Validation is executed and the validation status is indicated when the user clicks in the form field.
- `mouseenter`: Validation is triggered when the user hovers the cursor over the field.
- `my-custom-event`: Your own custom JavaScript event.

You can use predefined JavaScript events or specify your own custom events to trigger validation in a way that best suits your application.

## Messages

By default, validation messages are displayed in English on an HTML element (such as `div`, `p`, or `span`) with the attribute `data-tv-feedback="file"`. The messages are separated by the `|` symbol following the order of the rules. The `data-tv-feedback` attribute tells Trivule where to display your error messages.

```html
<input 
    type="file" data-tv-rules="required|file" 
    data-tv-messages="The file is required|This field must be a file"
    name="file"
/>
<div data-tv-feedback="file"></div>
```

The flexibility offered by the ability to specify the message display location allows you to customize the message boxes as illustrated in the example below.

![Screenshot of validation](./nice-error.PNG)