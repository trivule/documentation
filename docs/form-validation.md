---
sidebar_position: 5
title: Form Validation
---

# Validation

## Global Validation 

If you have a website or application and want to validate all forms without managing each form individually, you can use global validation with [declarative validation](/docs/validation-mode#declarative-validation).

When you initialize the `Trivule` class, it will attempt to validate all forms on your page using declarative mode.

### Usage

To set up global validation, initialize Trivule as follows:

```html
<script>
  const tr = new Trivule();
  tr.init();
</script>
```

This will activate the validation for all your forms. Trivule will validate any set of HTML fields with data-tr-rules in , whether inside a `<form>` .

### Example

#### HTML

```html
<form>
  <input type="text" name="username" data-tr-rules="required|minlength:5" />
  <input type="email" name="email" data-tr-rules="required|email" />
  <input type="password" name="password" data-tr-rules="required|minlength:8" />
  <button type="submit">Submit</button>
</form>
```

#### JavaScript

```html
<script>
  const trivule = new Trivule();
  trivule.init();
</script>
```

This setup ensures all forms on your page are validated without needing to handle each one individually.

## Form  validation
Sometimes you need advanced validation for a form, with rules that change based on user interactions. Or you may simply want to manage the validation of a specific form. For this, the `TrivuleForm` class is ideal. It allows for individual form field validation and primarily uses imperative validation.
 
[Imperative validation](/docs/validation-mode#imperative-validation) allows you to define validation rules and apply them dynamically using JavaScript code. This offers greater flexibility for more complex validation cases.

### Initialization Methods
##### 1. Initialization with Two Parameters
You can initialize `TrivuleForm` with a form selector and configuration options.

**Example**
```javascript
const trivuleForm = new TrivuleForm("form", {
  realTime: false,
  feedbackSelector: ".invalid-feedback"
});
```
The first parameter can be any CSS selector or any argument acceptable by the traditional method `document.querySelector`.

##### 2. Initialization with a Single Parameter 
>Note: Available from Trivule v1.3.0

#### a. Using an HTML Element or CSS Selector

You can initialize `TrivuleForm` directly with an HTML form element or any CSS selector.

**Example**
```javascript
const formElement = document.getElementById("myForm");
const trivuleForm = new TrivuleForm(formElement);
```

##### b. Using a Configuration Object

You can initialize `TrivuleForm` using a configuration object that includes the form element or selector.

**Example**
```javascript
const trivuleForm = new TrivuleForm({
  element: "#myForm",
  realTime: true,
  feedbackSelector: ".invalid-feedback"
});
```

##### 3. Initialization without Parameters

If you initialize `TrivuleForm` without parameters, you need to bind the form element later using the `bind` method. Validation will not be triggered until the expected HTML element is found.

**Example**
```javascript
const trivuleForm = new TrivuleForm();
trivuleForm.bind("#myForm");
```

### Form Binding

The `bind` method is used to associate a form element with the `TrivuleForm` instance. It can be an HTML element or a CSS selector. If the element is conditionally rendered (common in modern frameworks), you can call `bind` multiple times, waiting for the element to be found; it will stop executing once the element is found in the DOM.

**Syntax**
```javascript
trivuleForm.bind(form);
```
**Parameters**
- `form` (optional): The HTML form element or a CSS selector string for the form to bind.

**Example**

##### Binding with HTML Element
```javascript
const formElement = document.getElementById("myForm");
trivuleForm.bind(formElement);
```

##### Binding with CSS Selector
```javascript
trivuleForm.bind("#myForm");
```

The `bind` method can be called without a parameter. In this case, it assumes that a selector has been assigned during initialization via the configuration.

**Note:**
> Calling the `bind` method may have different behavior depending on its context.
> See the hook [afterBinding](#) for more information.
> If you are not sure that the element will be rendered immediately after initialization, it is recommended to use the hook [afterBinding](#) while remembering to call the `bind` method later.

### Configuration Notes

#### Configuration Options (`TrivuleFormConfig`)
- `element`: The HTML form element or a selector string for the form to bind.
- -  `auto` (optional): This option specifies whether the form should be validated as the user types in the form fields. By default, this option is disabled (`false`).
-  `local` (optional): This option allows you to set the language for validation error messages. You can specify the language as a string. For example, `"fr"` for French. This option is also optional.
-  `validClass` (optional): This is the CSS class that will be added to all the inputs in the form when they are valid. If this option is not set, no class will be added.
-  `invalidClass` (optional): This is the CSS class that will be added to all the inputs in the form when they are invalid. If this option is not set, `is-invalid` class will be added.
-  `feedbackSelector` (optional): If this option is not specified, Trivule will first check if a selector is indicated during declaration with the `make` method, and then use that selector. In the absence of a selector, Trivule will check if the input has an associated HTML element with the `data-tr-feedback` attribute set to the input's name. If no element is found in either of these cases, no feedback message will be displayed.
-  `realTime` (optional): Enables or disables real-time validation.

These options allow you to customize the validation of your form according to your specific needs.


**Default values**
```js
const options = {
  auto: true,
  local: {
    lang: "en",
  }; 
  validClass: "",
  invalidClass: "is-invalid",
  feedbackSelector: "[data-tr-feedback={name}]", //where {name} we be replaced with the input name
  realTime: true;
  element:null, // the css selector or html element
};
```

### Lifecycle Hooks

TrivuleForm offers lifecycle hooks that empower you to execute code at specific stages during the form binding process. These hooks provide flexibility for handling various scenarios related to form validation.

#### Register Callbacks and Execute After Form Binding

The `afterBinding` hook registers a callback function to be executed **after** the form element has been successfully bound to the `TrivuleForm` instance. This is useful for performing actions that rely on the form being fully bound, such as:

- Initializing additional validation rules or logic after the form element is available.
- Triggering custom events to notify other parts of your application about the binding completion.

**Syntax:**

```javascript
form.afterBinding(callbackFunction);
```

**Parameters:**

- `callbackFunction` (required): The callback function to be executed after binding. This function receives the `TrivuleForm` instance as its argument.

**Example:**

```javascript
const form = new TrivuleForm();
form.afterBinding((formInstance) => {
  console.log("Form has been bound. You can now perform additional actions.");
  // Access the form element using formInstance.getElement()
});

form.bind("#myForm");
```

**Returns:**

The `afterBinding` method returns the `TrivuleForm` instance itself, allowing for method chaining.

#### Register Callbacks and Execute Before Form Binding

The `beforeBinding` hook registers a callback function to be executed **before** the form element is bound to the `TrivuleForm` instance. This can be useful for performing preparatory actions or validations before the binding process begins.

**Syntax:**

```javascript
form.beforeBinding(callbackFunction);
```

**Parameters:**

- `callbackFunction` (required): The callback function to be executed before binding. This function receives the `TrivuleForm` instance as its argument.

**Example:**

```javascript
const form = new TrivuleForm();
form.beforeBinding((formInstance) => {
  console.log("Form binding is about to start. You can perform any pre-checks here.");
  // Perform any validation or checks before binding
});

form.bind("#myForm");
```

**Returns:**

The `beforeBinding` method returns the `TrivuleForm` instance itself, allowing for method chaining.

**Key Points:**

- Lifecycle hooks provide flexibility for handling different stages of form binding.
- `afterBinding` is useful for actions after successful binding.
- `beforeBinding` allows for pre-checks or preparatory actions before binding.

By leveraging these hooks effectively, you can enhance the control and customization of your form validation process with TrivuleForm.

### Make Validation

The `make` method in the `TrivuleForm` class is used to define and apply validation rules to form inputs. This method allows you to specify validation parameters for multiple inputs, either by passing an array of input parameters or an object containing input names and their corresponding parameters.

#### Usage

The `make` method can be used in two ways:
1. By passing an array of [input parameters](#).
2. By passing an object with input names as keys and their [parameters](#) as values.

#### Example 1: Using an Array of Input Parameters
In this example, we define validation rules for two inputs using an array of input parameters.

```typescript
const trivuleForm = new TrivuleForm("form");

// Define validation rules for each form field
trivuleForm.make([
  {
    selector: "age", // The input name
    rules: "required|between:18,40",
  },
  {
    selector: "#birthDayInput", 
    rules: "required|date",
  },
]);
```
#### Example 2: Using an object with input names and parameters

In this example, we define validation rules for multiple inputs using an object where keys are input names and values are their corresponding parameters.

```typescript
const trivuleForm = new TrivuleForm("form");

const inputs = {
  age: {
    rules: "required|between:18,40",
  },
  birthDay: {
    rules: "required|date",
    selector: "#birthDayInput",  
  },
  message: {
    rules: "required|only:string",
  },
};

// Apply validation rules
trivuleForm.make(inputs);
```

#### Example 3: Chaining `make` Method Calls

You can also chain multiple `make` method calls to define validation rules for different sets of inputs.

```typescript
const trivuleForm = new TrivuleForm("form");

trivuleForm
  .make([
    {
      selector: "age",
      rules: "required|between:18,40",
    },
    {
      selector:"birthDayInput",
      rules: "required|date",
    },
  ])
  .make({
    message: {
      rules: "required|only:string",
    },
  });
```


### Handling Failed Validation

The `TrivuleForm` class offers two approaches for handling failed validation:

**1. Using `onFails` Method:**

* Conveniently attaches an event listener to the `"tr.form.fails"` event.
* Event triggers upon form validation failure.
* Provides a callback function with the `TrivuleForm` instance, enabling access to validation-related information.

**Example:**

```typescript
const trivuleForm = new TrivuleForm("form");

trivuleForm.onFails((trivuleForm) => {
  console.log("Form validation failed!", trivuleForm);
  // Additional error handling logic...
});
```

**2. Direct Event Listener:**

* Listen for the `"tr.form.fails"` event directly on the form element.
* Offers more control over event handling.
* Useful when avoiding dependency on `TrivuleForm` methods or for custom event handling needs.

**Example:**

```typescript
const formElement = document.getElementById("form");

formElement.addEventListener("tr.form.fails", (event) => {
  console.log("Form validation failed!", event.target); // Target is the form element
  // Additional error handling logic...
});
```

**Choosing the Approach:**

* **`onFails` Method:** Cleaner and encapsulated when working within the `TrivuleForm` class context.
* **Direct Event Listener:** Offers more control and independence from `TrivuleForm` methods.


### Handling Successful Validation

Similarly to handling failed validation, you can manage successful validation using the `onPasses` method or by directly listening for the `"tr.form.passes"` event.

**1. Using `onPasses` Method:**

* Attach an event listener to the `"tr.form.passes"` event.
* Executed when the form validation succeeds.
* Provides a callback function with the `TrivuleForm` instance, enabling specific actions upon successful validation.

**Example:**

```typescript
const trivuleForm = new TrivuleForm("form");

trivuleForm.onPasses((trivuleForm) => {
  console.log("Form validation passed!", trivuleForm);
  // Additional actions upon successful validation...
});
```

**2. Direct Event Listener:**

* Listen for the `"tr.form.passes"` event directly on the form element.
* Offers more control over event handling and independence from `TrivuleForm` methods.

**Example:**

```typescript
const formElement = document.getElementById("form");

formElement.addEventListener("tr.form.passes", (event) => {
  console.log("Form validation passed!", event.target); // Target is the form element
  // Additional actions upon successful validation...
});
```

**Choosing the Approach:**

* **`onPasses` Method:** Convenient and encapsulated within the `TrivuleForm` class context.
* **Direct Event Listener:** Provides more flexibility and control over event handling.


### Attaching Event Listeners

The `on` method in the `TrivuleForm` class allows you to attach event listeners to the container element of the form.

#### Syntax

```typescript
trivuleForm.on(eventName: string, callback: EventCallback): void;
```

#### Parameters

- `eventName`: A string representing the name of the event to listen to.
- `callback`: The callback function to execute when the specified event occurs. This function takes an event of type `Event` as a parameter and returns nothing.

#### Example

```typescript
// Attach an event listener to handle form initialization
trivuleForm.on("tr.form.init", (event) => {
  console.log("Form initialized", event.detail);
  // Additional actions to perform when the form is initialized
});

 
trivuleForm.on("click", (event) => {
  //form click event
});
```

#### Usage

You can use the `on` method to listen for various events related to the form, such as form initialization, validation, submission, and more. Simply provide the appropriate event name and the corresponding callback function to handle the event.

### Emitting Custom Events

The `emit` method in the `TrivuleForm` class enables you to emit custom events from the container element of the form.

#### Syntax

```typescript
trivuleForm.emit(eventName: string, data?: any): void;
```

#### Parameters

- `eventName`: A string representing the name of the custom event to emit.
- `data` (optional): Additional data to pass along with the event.

#### Example

```typescript
// Emit a custom event to indicate form validation
trivuleForm.emit("tr.form.validate", {
  valid: true,
  message: "Form validation completed successfully",
});
```

#### Usage

You can use the `emit` method to trigger custom events at specific points within your form's lifecycle or in response to certain actions. These events can be listened to and handled elsewhere in your application logic. By emitting custom events, you can create a more modular and flexible architecture for managing form behavior and interactions.

### Handling Form Updates and Validation Events

The `onUpdate` and `onValidate` methods in the `TrivuleForm` class provide powerful event handling capabilities for managing form updates and validation processes.

#### `onUpdate` Method

The `onUpdate` method allows you to attach event listeners that respond to updates in the form inputs. When any input value within the form is updated, the provided callback function is executed.

##### Syntax

```typescript
trivuleForm.onUpdate(callback: TrivuleFormHandler): void;
```

##### Parameters

- `callback`: A callback function to execute when any input value in the form is updated. This function takes the form instance as a parameter.

##### Example

```typescript
trivuleForm.onUpdate((form) => {
  console.log("Form updated", form);
});
```

#### `onValidate` Method

The `onValidate` method allows you to attach event listeners that respond to the validation process of the form. When the form is validated, either manually or automatically, the provided callback function is executed.

##### Syntax

```typescript
trivuleForm.onValidate(callback: TrivuleFormHandler): void;
```

##### Parameters

- `callback`: A callback function to execute when the form is validated. This function takes the form instance as a parameter.

##### Example

```typescript
trivuleForm.onValidate((form) => {
  console.log("Form validated", form);
});
```

#### Usage

You can use the `onUpdate` method to perform actions whenever any input value in the form is updated. This is useful for dynamically responding to changes in form data.

Similarly, the `onValidate` method allows you to execute custom logic when the form undergoes validation. You can use this to handle validation outcomes, update UI elements, or trigger additional processes based on the validation result.

### Iterating Through Form Inputs with the `each` Method

The `each` method in the `TrivuleForm` class facilitates the iteration through all inputs within the form. This method allows you to perform actions or apply logic to each input individually.

### Iterates through each input

The `each` method iterates through each input within the form and executes a callback function for each input.

##### Syntax

```typescript
each(callback: ITrivuleInputCallback<TrivuleInput, any>): void;
```

##### Parameters

- `callback`: A callback function that takes a `TrivuleInput` instance as its parameter. This function will be executed for each input within the form.

##### Example

```typescript
trivuleForm.each((input) => {
  console.log("Input name:", input.getName());
  console.log("Input value:", input.getValue());
  console.log("Input validation status:", input.passes());
});
```

#### Usage

The `each` method is useful when you need to perform operations on each input within the form individually. For example, you can use it to access the name, value, or validation status of each input, apply specific styling or behavior, or trigger custom actions based on input properties.

In this example, we iterate through each input within the `trivuleForm` instance and log their name, value, and validation status. You can replace the callback function with your custom logic to suit your specific requirements, such as updating UI elements, performing calculations, or triggering events based on input properties.



### Managing Inputs in TrivuleForm

In the `TrivuleForm` class, you can interact with individual form inputs through various methods. These methods allow you to retrieve information about inputs, such as their validation status or values.

#### `inputs` Method

The `inputs` method retrieves an array of all inputs within the form. You can specify whether you want strict or non-strict output. In strict mode, you get objects containing only the input name, value, while in non-strict mode, you receive instances of `TrivuleInput`.

##### Syntax

```typescript
inputs(strict?: boolean): ITrivuleInputObject[] | TrivuleInput[];
```

##### Parameters

- `strict`: (Optional) A boolean indicating whether to return strict output (default is `true`).

##### Returns

An array of inputs based on the specified mode.

##### Example

```typescript
// Get all inputs in strict mode
const strictInputs = trivuleForm.inputs(); //return name, value object

// Get all inputs in non-strict mode
const nonStrictInputs = trivuleForm.inputs(false); //Return instances of `TrivuleInput`
```

#### `validated` Method

The `validated` method retrieves an array of inputs that have passed validation. Similar to the `inputs` method, you can specify whether to return strict or non-strict output.

##### Syntax

```typescript
validated(strict?: boolean): ITrivuleInputObject[] | TrivuleInput[];
```

##### Parameters

- `strict`: (Optional) A boolean indicating whether to return strict output (default is `true`).

##### Returns

An array of validated inputs based on the specified mode.

##### Example

```typescript
// Get validated inputs in strict mode
const validatedInputs = trivuleForm.validated();

// Get validated inputs in non-strict mode
const nonStrictValidatedInputs = trivuleForm.validated(false);
```

#### `failed` Method

The `failed` method retrieves an array of inputs that have failed validation. Like the previous methods, you can choose between strict and non-strict output.

##### Syntax

```typescript
failed(strict?: boolean): ITrivuleInputObject[] | TrivuleInput[];
```

##### Parameters

- `strict`: (Optional) A boolean indicating whether to return strict output (default is `true`).

##### Returns

An array of failed inputs based on the specified mode.

##### Example

```typescript
// Get failed inputs in strict mode
const failedInputs = trivuleForm.failed();

// Get failed inputs in non-strict mode
const nonStrictFailedInputs = trivuleForm.failed(false);
```

These methods provide convenient ways to access and manage inputs within the TrivuleForm instance, allowing you to handle validation results effectively and tailor your application's behavior accordingly.


###  Validation status

#### Description
The `isValid()` method determines whether the entire form is currently valid.

#### Syntax
```typescript
isValid(): boolean
```

#### Returns
- A boolean value indicating whether all inputs in the form are currently passing validation.
  - `true`: All inputs are valid.
  - `false`: At least one input is invalid.

#### Example
```typescript
// Check if the form is valid
const isFormValid = trivuleForm.isValid();
if (isFormValid) {
  console.log("The form is valid.");
} else {
  console.log("The form contains invalid inputs.");
}
```
You can also you the `passes()` method or the `valid` property
 
