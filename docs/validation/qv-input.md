
# Input validation
 

### QvInput 
In Quickv, you have the option to individually validate form fields. Throughout this documentation, we will use the term "`field`" or "`input`" to refer to a specific form field **(form input)** that is subject to validation.


The `QvInput` class is a core component of Quickv that enables individual input validation. The `QvForm` class utilizes `QvInput` to validate a set of inputs. Each time validation is performed, whether it fails or passes, the class emits the corresponding event, allowing you to determine the overall validity of the form.

## Initialization

First and foremost, when initializing an instance of this class, it sets up the `rules`, `messages`, and other values defined on the input element using `data-qv` attributes or the second argument of it constructor, which is an object of type `QvInputParams`. 
  
```javascript
  const qvInput = new QvInput("input") 
```
The first constructor argument should be a [`ValidatableInput` ](#)

This assumes you have an input on your page that has the ID #my-input.
This input would have its validation dependencies via data-qv attributes
```html
<input 
  type="text"
  data-qv-invalid-class="is-invalid"
  data-qv-rules="required|min:8"
  data-qv-events="blur|change|input" 
  name="phone"
/>
```
Rather than setting the `data-qv` attributes this way, you have the option of directly passing a `QvInputParams` object with the same parameters:

```javascript
const inputElement = document.querySelector("#my-input");
const qvInput = new QvInput(inputElement, {
   rules: ['required', 'min:8'],
   invalidClass: 'is-invalid',
   events: ['blur', 'change', 'input'],
});
```

This allows you to specify the validation `rules`, the class to apply in case of invalidity (`invalidClass`), the events that trigger validation (`events`) directly in the `QvInputParams` object.

Thus, you can easily customize the validation parameters for the `<input>` element by grouping all the relevant information into a single object.

Indeed, you can use the `with` method of the `qvInput` instance to set validation parameters by passing a `QvInputParams` object. Here's how you can use it:

```javascript
const qvInput = new QvInput("#my-input");
qvInput.with({
   rules: ['required', 'min:8'],
   invalidClass: 'is-invalid', 
   events: ['blur', 'change', 'input'],
});
```

By calling the `with` method and passing the `QvInputParams` object, you can define the validation rules, the css class to apply in case of invalidity (`invalidClass`), the events that trigger validation (`events`) in a more concise and readable way.

This allows you to customize validation settings directly after creating the `qvInput` instance, making it easier to configure the validation object.

```javascript 
qvInput.init();
```

Once this setup is complete, calling the `init` method starts listening to the events specified by the `data-qv-events` attribute or the `events` property in the `QvInputParams` object.
When one of these events is triggered, the defined validation rules are executed in the order they were defined.

## Rules Assignment

Assigning rules to an input field is an essential step in the validation process. To do this, you can use either the `data-qv-rules` attribute in your HTML tag, or the `rules` attribute of the `QvInputParams` object when initializing the `qvInput` instance.

Here is an example illustrating this assignment:

```html
<input
   type="text"
   data-qv-rules="required|min:8"
   name="password"
/>
```

In this example, we have assigned two rules to the input field. The first rule, `required`, specifies that the input field must be filled. The second rule, `min:8`, specifies that the input field must contain at least 8 characters.

You can also assign validation rules using the `rules` attribute when configuring the `qvInput` instance:

```javascript
qvInput.with({
   rules: ['required', 'min:8'],
   // Other parameters...
});
```

This programmatic approach provides additional flexibility for defining validation rules.

By using these attributes, you can easily specify validation rules for your input fields.

**Important Note:** The field validation will be performed in the order of rule definition. It is crucial to consider the order of rules when validating a specific field. For example, if you want to validate a file field and specify the rule `maxFileSize:2MB` before the `file` rule, **Quickv** will do its best to validate the field accordingly. However, unexpected outcomes may occur if the rules are not defined in the intended order.

## Validation trigger

You have the ability to define your own custom JavaScript events that trigger the validation process. By default, the events used are `blur`, `input` and `change`. However, if you want to customize these events, you can do so by using the `data-qv-events` attribute on your HTML elements or by using the `events` attribute of the `QvInputParams` object.

When using the `data-qv-events` attribute on an HTML element, you can specify the events separated by the `|` symbol. For example :

```html
<input type="text" data-qv-events="focus|input|myCustomEvent" />
```

In this example, validation will be triggered on the `focus`, `input` events, as well as the `myCustomEvent` custom event.

If you prefer to use the `events` attribute of the `QvInputParams` object when creating a `QvInput` instance, you can pass an array of JavaScript events. For example :

```javascript
const qvInput = new QvInput("#my-input", {
   events: ["focus", "input", "myCustomEvent"],
});
```

This way, the same `focus`, `input` and `myCustomEvent` events will be used to trigger validation.

Feel free to customize validation events to your specific needs using either of these methods.

## Validation error style
 
It is common to visually indicate the validation status of form fields by applying specific CSS classes. You can easily add a CSS class to your input field when it is valid or invalid using the `data-qv-invalid-class` or `data-qv-valid` attributes, or the `invalidClass` or ` validClass` of the `QvInputParams` object.

The default class to represent the invalid state of a form field is `is-invalid`. This means that if you don't explicitly specify the class to use with the `data-qv-invalid-class` or `invalidClass` attribute of the QvInputParams object, the '`is-invalid`' class will be automatically added to your input field when the validation fails.

The `data-qv-invalid-class` attribute allows you to specify the CSS class that will be added to your input field when it is invalid. For example :

```html
<input type="text" data-qv-invalid-class="error" />
```

In this example, the CSS class "error" will be applied to the `<input>` element when validation fails.

Similarly, you can use the `data-qv-valid` attribute to specify the CSS class that will be added to your input field when it is valid.

If you prefer to use the `invalidClass` or `validClass` attribute of the `QvInputParams` object when creating a `QvInput` instance, you can do so as follows:

```javascript
const qvInput = new QvInput("#my-input", {
   invalidClass: "error",
});
```

In this example, the "`error`" CSS class will be added to the input element when validation fails.

Feel free to customize the CSS classes for the validation state of your form fields using these attributes or options, to achieve the desired visual appearance based on the validation state.


## Messages
### Customizing error messages

Suppose you have a form with two fields: "Name" and "Email". You want to specify specific error messages for each field other than the Quickv default messages.

For the "Name" field, you want to display the message "**Name is mandatory**" if no value is entered. For the "Email" field, you want to display the message "**Please enter a valid email address**".

You can use the `data-qv-messages` attribute to customize error messages for each field. Here's how you can do it:

```html
<input type="text" data-qv-rules="required" name="name" data-qv-messages="Name is required">

<input type="email" data-qv-rules="email" name="email" data-qv-messages="Please enter a valid email address">
```

With this configuration, Quickv will display specific error messages when the corresponding rules are not respected for each field.

### Position markers

Let's suppose you have an additional validation rule for the "Email" field: it must have a minimum length of 8 characters. You want to specify a specific error message for this rule.

You can use position markers to indicate error messages in any order. Here's how you can do it:

```html
<input type="email" name="email" data-qv-messages="{0}Please enter a valid email address|{1}The email must be at least 8 characters long">
```

With this configuration, Quickv will display the first error message if the email address is invalid, and the second error message if the minimum length of 8 characters is not respected.

### General error messages

Now let's suppose you want to have a general error message for the "required", "email" and "maxlength" rules in the "Email" field.

You can use the rule positions to specify a common error message. Here's how you can do it:

```html
<input type="text" data-qv-rules="required|email|maxlength:32" name="name" data-qv-messages="{0,1,3}Please enter a valid email address"> 
```

Avec cette configuration, Quickv affichera le message d'erreur "**Veuillez saisir une adresse email valide**" si le champ est vide, n'est pas une adresse valide ou dépasse 32 caractères.

### Emplacement des messages

Supposons que vous souhaitez afficher les messages d'erreur à des endroits spécifiques sur votre page, plutôt que juste à côté des champs de formulaire.

Vous pouvez utiliser l'attribut `data-qv-feedback` pour spécifier où afficher les messages d'erreur. Voici comment vous pouvez le faire :

```html
<input type="text" name="nom" data-qv-messages="Le nom est obligatoire">
 
<div data-qv-feedback="nom"></div> 
```
Avec cette configuration, le message d'erreur sera affiché à l'intérieur de l'élément `<div>` ayant l'attribut `data-qv-feedback="nom"`. Vous





In the event of a validation failure, a `qv.input.fails` event is emitted, which you can listen to on the input element to perform custom actions. Similarly, when the form is valid, a `qv.input.passes` event is emitted.

If you directly manipulate an instance of `QvInput`, you can use the `onFails` and `onPasses` methods to listen to the events and directly call the desired callbacks according to your needs.

Usage Example:

```javascript
const inputElement = document.querySelector("input");
const qvInput = new QvInput(inputElement);

qvInput.init();
```

In this example, the `QvInput` instance is created for an input element. The `init` method is then called to start listening to events and perform validation based on the defined rules.

Events:

- `qv.input.fails`: This event is emitted when the validation fails for the input element. You can listen to this event on the input element and handle it accordingly.
- `qv.input.passes`: This event is emitted when the validation passes for the input element. You can listen to this event on the input element and handle it accordingly.

Methods:

- `onFails(callback: Function)`: Use this method to register a callback function to be called when the `qv.input.fails` event is emitted.
- `onPasses(callback: Function)`: Use this method to register a callback function to be called when the `qv.input.passes` event is emitted.

By utilizing the `QvInput` class, you can easily implement individual input validation within your application. Additionally, when combined with the `QvForm` class, you can validate a group of inputs and efficiently handle form validation.