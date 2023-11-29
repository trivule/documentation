---
sidebar_position: 2
---
# Utilisation
Quickv offers three validation methods: isolated **input** validation, isolated **form** validation, or general validation of all forms on your site. This allows you to choose the method that best suits your needs and effectively validate user-submitted data, whether it be for a single field, an entire form, or for all forms on your website.

### Single input validation 

**HTML**
```html
<input type="email" id="my-input" name="email"  data-qv-rules="required|email" />
<div data-qv-feedback="email"></div>
```
**Javascript**
```js
  const qvInput = new QvInput("#my-input");
  qvInput.init();
```
For more customization, consult its [documentation](/docs/validation/qv-input)
 
### Single form

You can use the `QvForm` class of Quickv. Simply provide a valid CSS selector to find the form to be validated in its constructor, then call the `init()` method to initialize validation.

Example

**HTML**
```html
<form action="" id="my-form">
  <div>
    <input
      type="text"
      name="age"
      data-qv-rules="required|number|between:18,35"
      data-qv-messages="Age is required | Age must be a number | Age must be between 18 and 35"
    />
    <div data-qv-feedback="age"></div>
  </div>
  <button data-qv-submit>Submit</button>
</form>
```
**Javascript**
```js
const qvForm = new QvForm("#my-form");
qvForm.init();
```
For more customization, consult its [documentation](#)


### Globally

 To validate all forms on your site in a general way, you can use the  `Quickv` class. These classes take nothing in their constructor and search all forms on your site to apply an instance of `QvForm` to them. However, please note that this method may not work correctly with certain frameworks like Angular, React that manipulate the DOM in a specific way. In this case, you can use methods **Single Input** and **Single Form** for better integration.

Example

**HTML**
```html
<form action="">
  <div>
    <input
      type="text" name="age"  data-qv-rules="required|number|between:18,35" data-qv-messages="Age is required | Age must be a number | Age must be between 18 and 35" />
    <div data-qv-feedback="age"></div>
  </div>
  <button data-qv-submit>Submit</button>
</form>

<form action="">
  <div>
    <input  type="email" name="email" data-qv-rules="required|email"/>
    <div data-qv-feedback="email"></div>
  </div>
  <button data-qv-submit>Submit</button>
</form>
```

**Javascript**
```js
const qv = new Quickv();
qv.init();
```

By typing in the age field and submitting the form by clicking the **_Submit_** button, Quickv will automatically validate the submitted data according to the defined validation rules and display the appropriate error messages in the HTML element with the `data-qv-feedback` attribute if the data is not valid.
If you do not want to disable the default form, simply remove the `data-qv-submit` attribute from the submit button in your HTML code.

### In Angular
You can see here an example of using Quickv in Angular [here](https://github.com/Claudye/ng-quickv)


### In Reactjs

You can see here an example of using Quickv in Reactjs [here](https://github.com/Meschack/quickv-test/tree/react-test)

---


## Customization
 
### Events  

By default, validation is triggered on "blur", "input" or "change" events. However, you have the possibility to specify your own events using the "data-qv-events" attribute. You can pass it a list of events that will trigger validation, separated by the "|" symbol.

Example
```html
<input
  type="text"
  data-qv-events="mouseenter|mouseover|your-custom-event"
  data-qv-rules="required|phone:US"
  name="phone"
/>
```
For more customization, consult its [documentation](#)

### Style customization

It may happen that you want to apply a specific style to a field depending on its validity state (valid or invalid). To do this, you can use the `data-qv-invalid-class` and `data-qv-valid-class` attributes. For example, you can set data-qv-invalid-class with the value "_invalid-css_" to apply a specific CSS class when the form is invalid. Thus, the classes you have defined will be automatically applied according to the validity state of the form.

```html
 <input type="text" 
    data-qv-invalid-class="error" 
    data-qv-rules="required|phone:US"
    name="phone"
  />
```
For more customization, consult its [documentation](#)

## Rules
Here is a brief list of the rules available in Quickv
### Some rules
- `required` - The value is mandatory.

- `in:x,x,z,...` - The _in_ validation rule checks if the user input is included in a specified list of values.

- `size:x` - This rule should be used with caution.

  - If the entered value is a file, it checks if the file size is less than or equal to x (B, KB, MB, or GB).

  - If the value is a string, it checks if the length of the string is exactly x (an integer).

  - If the value is a number, it passes if the number of digits (including separators) is exactly x (an integer).

- `between:x,y` - Passes if the field value is between x and y.

  - If the field is a number, x and y must be numbers.

  - If the field is a date, x and y must also be valid dates.

  - If the field is a file, x and y must be expressed in **B, KB, MB, or GB**.


For more customization, consult its [documentation](#)

### Write your rule:

A rule is just a javascript function that takes two parameters and must return a boolean

1. The value to validate (the current value of the input)

1. Parameters (optional): These are the values after the colon (:)

```js
const unique = (input) => {
  // call to an api for example to check if the data exists in the database
  return false;
};
```

Add your messages and rules at the instance of `Quickv`, but before the _init()_ methode.

```js
qv.rule("unique", unique, "This field should be unique");
qv.init();
```

After that, you can use your rules as html attributes

For more customization, consult its [documentation](#)