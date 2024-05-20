---
sidebar_position: 0
title: Why Trivule?
---

# Why Trivule?

Trivule is a user-friendly JavaScript library designed to simplify dynamic form validation in HTML, offering several key features:

- Real-time validation with flexibility and ease.
- Time-saving and reduced complexity in validation processes.
- Easy integration into modern frameworks.
- Uniform usage in Vanilla JavaScript projects or modern frameworks.
- Excellent and intuitive message management.
- Validation without the need to master JavaScript code.

Trivule offers two validation approaches:

1. **Declarative Validation:**
   This method allows validating a form using only HTML attributes. It supports event handling, rules, messages, and styling of an input based on its validity. Additionally, it automatically disables an entire form when all its fields are valid.

2. **Imperative Validation:**
   This type of validation offers a more advanced approach by allowing more dynamic interaction with the form. It enables defining conditional validations and modifying validation rules during runtime. For example, it allows retrieving only valid or invalid fields from a form, or inserting an input with a validation state.

Trivule is an excellent option if you're looking for a quick way to implement complex validation without wasting time or energy.

**Declarative Validation:**
```html
<input type="text" data-tr-rules="required|int|min:18" name="age" />  
```

**Imperative Validation:**
```javascript
trivuleForm.make([
  {
    selector: "age",
    rules: ["required","int", "min:18"],
  },
]);
```
or
```javascript
trivuleForm.make({
  age: {
    rules: ["required","int", "min:18"],
  },
});
```

## Validation Rules

The validation rules in Trivule are predefined character strings that specify the conditions the form field values must meet. They are used as arguments in the `data-tr-rules` attribute. For example:

```html
<input type="file" name="file" data-tr-rules="required|file|size:1MB">
```
or 
```javascript
trivuleForm.make({
  age: {
    rules: "required|file|size:1MB",
  },
})
```
Explanation of the rules:
- `required`: Indicates that the field is required.
- `file`: Specifies that the value of the field must be a file.
- `maxFileSize`: Sets the maximum allowed file size, in this case, 1MB.

[Learn more](/docs/rules/)

In Trivule, validation is triggered by JavaScript events or custom events. By default, Trivule triggers validation on the following events: `blur`, `input`, or `change` depending on the type of input. You can customize these events as needed.

To specify the desired events, use the `data-tr-events` attribute as a string, similar to how you define validation rules. For example:

```html
<input type="file" name="age" data-tr-events="click|mouseenter|my-custom-event">
```

Once any of these events is triggered, Trivule proceeds with data validation.

Usage through the declarative method:

```javascript
{
  age: {
    rules: [],
    events: ['click', 'mouseenter', 'my-custom-event']
  }
}
```


## Messages

Trivule comes with default error messages, but it also provides you with the flexibility to customize or translate messages into different languages and display them wherever you prefer.

```html
<input
    type="file"
    data-tr-rules="required|mimes:text/plain"
    data-tr-messages="Le fichier est requis|Le fichier doit être un fichier texte"
    name="file"
/>

<div data-tr-feedback="file"></div>
```
or
 
```javascript
trivuleForm.make([
  {
    selector: "file",
    rules: ["required", "mimes:text/plain"],
    messages:['The file is required', 'The file must be a text file'.]
  }, 
]);
```

Trivule displays error messages at the nearest feedback element to the input. If you specify a general selector, it will be the first encountered element around the input.


## Interaction with a Form

### Making a Form Validatable

To make a form validatable, use the following syntax:

```javascript
trivuleForm.make([
  {
    selector: "name",
    rules: ["required", "minlength:5", "upper"],
  },
  {
    selector: "age",
    rules: ["int", "min:18"],
  },
]);
```

### Handling Validation Results

To perform actions based on the validation results,

#### 1. `onValidate`

```javascript
trivuleForm.onValidate((form) => {
  // Get validated input
  form.validated();
  // Get all inputs
  form.all();
 
  // Get a single input
  const ageInput = form.get('age');
  
  // Prepend a rule to the existing list
  ageInput.prepend({
    rule: "required",
    message: "The age field cannot be empty"
  });
});
```

#### 2. `onFails`

```javascript
trivuleForm.onFails((form) => {
  // Do something when the form is invalid
});
```

#### 3. `onPasses`

```javascript
trivuleForm.onPasses((form) => {
  // Do something when the form is valid
});
```
