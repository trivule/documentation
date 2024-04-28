---
sidebar_position: 11
title: Input validation
---
 
# Input validation
 
### TrInput 
In Trivule, you have the option to individually validate form fields. Throughout this documentation, we will use the term "`field`" or "`input`" to refer to a specific form field **(form input)** that is subject to validation.


The `TrInput` class is a core component of Trivule that enables individual input validation. The `TrForm` class utilizes `TrInput` to validate a set of inputs. Each time validation is performed, whether it fails or passes, the class emits the corresponding event, allowing you to determine the overall validity of the form.

## Initialization

First and foremost, when initializing an instance of this class, it sets up the `rules`, `messages`, and other values defined on the input element using `data-tr` attributes or the second argument of it constructor, which is an object of type `TrInputParams`. 
  
```javascript
  const trInput = new TrInput("input") 
```
The first constructor argument should be a [`ValidatableInput` ](#)

This assumes you have an input on your page that has the ID #my-input.
This input would have its validation dependencies via data-tr attributes
```html
<input 
  type="text"
  data-tr-invalid-class="is-invalid"
  data-tr-rules="required|min:8"
  data-tr-events="blur|change|input" 
  name="phone"
/>
```
Rather than setting the `data-tr` attributes this way, you have the option of directly passing a `TrInputParams` object with the same parameters:

```javascript
const inputElement = document.querySelector("#my-input");
const trInput = new TrInput(inputElement, {
   rules: ['required', 'min:8'],
   invalidClass: 'is-invalid',
   events: ['blur', 'change', 'input'],
});
```

This allows you to specify the validation `rules`, the class to apply in case of invalidity (`invalidClass`), the events that trigger validation (`events`) directly in the `TrInputParams` object.

Thus, you can easily customize the validation parameters for the `<input>` element by grouping all the relevant information into a single object.

Indeed, you can use the `with` method of the `trInput` instance to set validation parameters by passing a `TrInputParams` object. Here's how you can use it:

```javascript
const trInput = new TrInput("#my-input");
trInput.with({
   rules: ['required', 'min:8'],
   invalidClass: 'is-invalid', 
   events: ['blur', 'change', 'input'],
});
```

By calling the `with` method and passing the `TrInputParams` object, you can define the validation rules, the css class to apply in case of invalidity (`invalidClass`), the events that trigger validation (`events`) in a more concise and readable way.

This allows you to customize validation settings directly after creating the `trInput` instance, making it easier to configure the validation object.

```javascript 
trInput.init();
```

Once this setup is complete, calling the `init` method starts listening to the events specified by the `data-tr-events` attribute or the `events` property in the `TrInputParams` object.
When one of these events is triggered, the defined validation rules are executed in the order they were defined.

## Rules Assignment

Assigning rules to an input field is an essential step in the validation process. To do this, you can use either the `data-tr-rules` attribute in your HTML tag, or the `rules` attribute of the `TrInputParams` object when initializing the `trInput` instance.

Here is an example illustrating this assignment:

```html
<input
   type="text"
   data-tr-rules="required|min:8"
   name="password"
/>
```

In this example, we have assigned two rules to the input field. The first rule, `required`, specifies that the input field must be filled. The second rule, `min:8`, specifies that the input field must contain at least 8 characters.

You can also assign validation rules using the `rules` attribute when configuring the `trInput` instance:

```javascript
trInput.with({
   rules: ['required', 'min:8'],
   // Other parameters...
});
```

This programmatic approach provides additional flexibility for defining validation rules.

By using these attributes, you can easily specify validation rules for your input fields.

**Important Note:** The field validation will be performed in the order of rule definition. It is crucial to consider the order of rules when validating a specific field. For example, if you want to validate a file field and specify the rule `maxFileSize:2MB` before the `file` rule, **Trivule** will do its best to validate the field accordingly. However, unexpected outcomes may occur if the rules are not defined in the intended order.

## Validation trigger

You have the ability to define your own custom JavaScript events that trigger the validation process. By default, the events used are `blur`, `input` and `change`. However, if you want to customize these events, you can do so by using the `data-tr-events` attribute on your HTML elements or by using the `events` attribute of the `TrInputParams` object.

When using the `data-tr-events` attribute on an HTML element, you can specify the events separated by the `|` symbol. For example :

```html
<input type="text" data-tr-events="focus|input|myCustomEvent" />
```

In this example, validation will be triggered on the `focus`, `input` events, as well as the `myCustomEvent` custom event.

If you prefer to use the `events` attribute of the `TrInputParams` object when creating a `TrInput` instance, you can pass an array of JavaScript events. For example :

```javascript
const trInput = new TrInput("#my-input", {
   events: ["focus", "input", "myCustomEvent"],
});
```

This way, the same `focus`, `input` and `myCustomEvent` events will be used to trigger validation.

Feel free to customize validation events to your specific needs using either of these methods.

## Validation error style
 
It is common to visually indicate the validation status of form fields by applying specific CSS classes. You can easily add a CSS class to your input field when it is valid or invalid using the `data-tr-invalid-class` or `data-tr-valid` attributes, or the `invalidClass` or ` validClass` of the `TrInputParams` object.

The default class to represent the invalid state of a form field is `is-invalid`. This means that if you don't explicitly specify the class to use with the `data-tr-invalid-class` or `invalidClass` attribute of the TrInputParams object, the '`is-invalid`' class will be automatically added to your input field when the validation fails.

The `data-tr-invalid-class` attribute allows you to specify the CSS class that will be added to your input field when it is invalid. For example :

```html
<input type="text" data-tr-invalid-class="error" />
```

In this example, the CSS class "error" will be applied to the `<input>` element when validation fails.

Similarly, you can use the `data-tr-valid` attribute to specify the CSS class that will be added to your input field when it is valid.

If you prefer to use the `invalidClass` or `validClass` attribute of the `TrInputParams` object when creating a `TrInput` instance, you can do so as follows:

```javascript
const trInput = new TrInput("#my-input", {
   invalidClass: "error",
});
```

In this example, the "`error`" CSS class will be added to the input element when validation fails.

Feel free to customize the CSS classes for the validation state of your form fields using these attributes or options, to achieve the desired visual appearance based on the validation state.


## Messages
### Customizing error messages

Suppose you have a form with two fields: "Name" and "Email". You want to specify specific error messages for each field other than the Trivule default messages.

For the "Name" field, you want to display the message "**Name is mandatory**" if no value is entered. For the "Email" field, you want to display the message "**Please enter a valid email address**".

You can use the `data-tr-messages` attribute to customize error messages for each field. Here's how you can do it:

```html
<input type="text" data-tr-rules="required" name="name" data-tr-messages="Name is required">

<input type="email" data-tr-rules="email" name="email" data-tr-messages="Please enter a valid email address">
```

With this configuration, Trivule will display specific error messages when the corresponding rules are not respected for each field.

### General error messages

Now let's suppose you want to have a general error message for the "required", "email" and "maxlength" rules in the "Email" field.

You can use the rule positions to specify a common error message. Here's how you can do it:

```html
<input type="text" data-tr-rules="required|email|maxlength:32" name="name" data-tr-messages="{0,1,3}Please enter a valid email address"> 
```

Avec cette configuration, Trivule affichera le message d'erreur "**Veuillez saisir une adresse email valide**" si le champ est vide, n'est pas une adresse valide ou dépasse 32 caractères.

### Message placement
 
Suppose you want to display error messages in specific locations on your page, rather than just next to the form fields.

You can use the `data-tr-feedback` attribute to specify where to display the error messages. Here's how you can do it:

```html
<input type="text" name="name" data-tr-messages="Name is required">
 
<div data-tr-feedback="name"></div> 
```

With this configuration, the error message will be displayed inside the `<div>` element with the `data-tr-feedback="name"` attribute. You can place the `<div data-tr-feedback="name"></div>` element anywhere on the page. Trivule will display the error message in the nearest element to the corresponding input.

This allows you to control the location where error messages are displayed on the page and style them according to your needs. You can use CSS selectors to target elements with the `data-tr-feedback` attribute and apply specific styles to the error messages. For example:

```css
div[data-tr-feedback] {
  color: red;
  font-size: 14px;
}
``` 
### Ways to display error messages:
Trivule provides different ways to display errors in a form.

#### Via HTML:
If you want to display all error messages once the first rule fails, you can use the `data-tr-show` attribute. It accepts two possible values: `first` and `full`.

```html
<input type="text" name="myInput" data-tr-show="first">
```

By default, the value is set to `first`, which means only the first error message will be displayed. If you choose the value `full`, all error messages from all the rules will be displayed.

#### Via JavaScript:
When using JavaScript, you can set the `failsOnfirst` option to `true`. In this case, as soon as the first rule fails, the validation will stop, and the error message for that rule will be displayed.

```javascript
const trInput = new TrInput("#my-input", {
  failsOnfirst: true,
});
```

When `failsOnfirst` is set to `false`, all the rules will be executed, and all error messages will be displayed.

These options provide flexibility in controlling how error messages are displayed based on your specific requirements.

## Advanced customization 

### Interacting with Input During Validation

The `onFails` and `onPasses` methods of the `TrInput` class allow you to interact with the `input` element when validation fails or succeeds for a given form field.

The `onFails` method sets an event listener that will be triggered when validation fails. Here's an example of usage:

```javascript
import TrInput from 'Trivule';

const trInput = new TrInput("#my-input"); 
//Initialize before anything
trInput.init();

trInput.onFails(() => {
  // Code to execute when validation fails
  console.log("Validation failed!");
});
```

In this example, a callback function is defined to display a message in the console when validation fails. You can customize the code to execute based on your needs, such as displaying an error message to the user or applying specific styles to the `input` element.

Similarly, the `onPasses` method allows you to set an event listener that will be triggered when validation succeeds. Here's an example of usage:

```javascript
trInput.onPasses(() => {
  // Code to execute when validation succeeds
  console.log("Validation succeeded!");
});
```

In this example, a callback function is defined to display a message in the console when validation succeeds. You can modify the code to execute based on your needs, such as validating other form fields or enabling a submission button.

By using these methods, you can react to successful or failed validation events and perform specific actions accordingly. This allows you to add custom logic to your application based on the result of form field validation.

### Emitting Custom Events

The `emit` method of the `TrInput` class allows you to emit a custom event to the associated `input` element. Here's an example of usage:

```javascript
trInput.emit("myEvent", { data: "Custom value" });
```

In this example, a custom event named "myEvent" is emitted to the `input` element. Additional data `{ data: "Custom value" }` can be passed along with the event.

You can use this feature to create advanced communication and interaction between your application and the `TrInput` class. For example, you can emit a custom event when the value of the `input` element changes and listen to that event to perform specific actions in other parts of your application.

### Attaching Event Listeners

The `on` method of the `TrInput` class allows you to attach an event listener to the associated `input` element. Here's an example of usage:

```javascript
trInput.on("change", (event) => {
  // Code to execute when "change" event occurs
  console.log("Value has changed:", event.target.value);
});
```

In this example, an event listener is attached to the `input` element for the "change" event. When this event occurs, the callback function is executed, displaying the new value of the `input` element in the console. You can listen to other events such as "input" or "blur" by specifying the corresponding event name.

This allows you to listen to specific events emitted by the `input` element and perform custom actions in response to those events. For example, you can detect value changes in the `input` element or loss of focus and perform actions accordingly, such as updating other elements in the user interface or performing asynchronous data validation.

### Validating the Input Element

The `valid` method of the `TrInput` class allows you to perform validation on the `input` element using the defined validation rules. Here's an example of usage:

```javascript
const isValid = trInput.valid();
if (isValid) {
  // Proceed with form submission or handle valid input
} else {
  // Display error messages or handle invalid

 input
}
```

In this example, the `valid` method is called to validate the `input` element. The return value `isValid` indicates whether the element is valid or not. You can use this information to make decisions in your code, such as submitting the form or displaying error messages to the user.

The `valid` method updates the `_passed` property of the `TrInput` instance with the validation result and returns that result. It performs the validation using the current value of the `input` element and the defined validation rules.

### Validating and Emitting Validation Events

The `validate` method of the `TrInput` class performs validation on the `input` element using the defined validation rules. It also emits the "tr.input.passes" or "tr.input.fails" events based on the validation result. Here's an example of usage:

```javascript
const isValid = trInput.validate();
if (isValid) {
  // Proceed with form submission or handle valid input
} else {
  // Display error messages or handle invalid input
}
```

In this example, the `validate` method is called to validate the `input` element. The return value `isValid` indicates whether the element is valid or not. You can use this information to make decisions in your code, such as submitting the form or displaying error messages to the user.

The `validate` method performs the following steps:

1. It calls the `valid` method to perform validation on the `input` element and update the `_passed` property with the result.
2. It calls other methods to update CSS classes, retrieve error messages, and emit validation events.
3. It returns the value of the validation result (`this._passed`).

You can use the `validate` method when you want to perform a full validation of the `input` element, update the user interface based on the validation result, and emit the corresponding events.

### Listening to Validation Events

When validation fails or passes, the `tr.input.fails` and `tr.input.passes` events are emitted for you to interact with Trivule in your code.

```js
const myInput = document.getElementBy('my-input');
myInput.addEventListener('tr.input.passes', (e) => {
  console.log(e.detail);
  // Your code
});
```

### Destroying the TrInput Instance

The `destroy` method of the `TrInput` class allows you to reset the `TrInput` instance by removing the validation rules and associated event listeners. Here's an example of usage:

```javascript
trInput.destroy();
```

In this example, the `destroy` method is called on the `trInput` instance. This removes all custom validation rules and event listeners associated with that instance.

You can use the `destroy` method when you want to reset the `TrInput` instance to its initial state, such as when removing or disabling a form field.

By using the methods and events provided by the `TrInput` class, you can customize form field validation and interaction in your application. Whether it's reacting to successful or failed validation events, emitting custom events, listening to `input` element events, or performing specific validations, you have the ability to add custom logic to your form-based application based on the validation results of the form fields.