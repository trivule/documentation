---
sidebar_position: 13
title: Form Validation
---
# Form Validation

Form validation involves validating a set of HTML fields, whether inside a `<form>` element or grouped within a container such as a `<div>`.

## TrivuleForm

TrivuleForm offers two validation approaches: declarative and imperative, to address different form validation needs.

### Declarative Validation

Declarative validation allows validating a form by simply specifying validation rules in the attributes of HTML fields. It's a simple and convenient approach for basic form validation.

Example usage:

```html
<form>
  <div>
    <label>Email</label>
    <input type="text" data-tr-rules="required|email|maxlength:32" name="email" />
    <div data-tr-feedback="email"></div>
  </div>
  <div>
    <label>Message</label>
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

Validation initialization:

```js
const trForm = new TrivuleForm("form");
trForm.init();
```

With this declarative approach, the form is automatically validated without writing additional JavaScript code, which is ideal for simple form validation needs.

### Imperative Validation

Imperative validation allows defining validation rules and applying them dynamically using JavaScript code. This provides greater flexibility for more complex form validation cases.

Example usage:

```js
const trivuleForm = new TrivuleForm("form",{
  realTime:false,
  feedbackSelector:".invalid-feedback"
});
// Define imperative validation rules for each form field
trivuleForm.make([
  {
    selector: "email",
    rules: ["required", "email", "maxlength:32"],
  },
  {
    selector: "message",
    rules: ["required", "between:2,250", "endWith:."],
  },
]);
```

With this imperative approach, you can dynamically define validation rules and interact more actively with the form according to specific needs.


### `onInit` - Before Validation

When using Trivule for live form validation, additional actions may be needed after form initialization. For example, specific configurations or object manipulations may be required to prepare the form for more advanced interaction.

The `onInit` method addresses this by providing a clean way to attach event handlers that will be triggered specifically after initialization. This allows you to perform custom actions or configure additional features in response to the form's ready state.

The `onInit()` method should be called before calling the `init()` method.

#### Example Usage

```typescript
trForm.onInit((initializedForm: TrForm) => {
    console.log("The form is ready for additional actions:", initializedForm);
});
```

In this example, the `onInit` method is called with a callback function that logs a message when the form is ready for further actions. This method provides a way to execute custom actions or additional configurations in response to the form's initialization.

#### Use Cases

- **Custom Configuration:** Perform specific configurations for the form after its initialization.

- **Post-Initialization Actions:** Execute actions that depend on the full preparation of the form.

*Note: It is advisable to use `onInit` judiciously for tasks unrelated to validation, as full form initialization may not guarantee the completion of asynchronous validations or other deferred tasks.*

### `onFails` & `onPasses` - Dynamic Validation Responses

The `onFails` and `onPasses` methods of the `TrForm` class provide complete flexibility to dynamically respond to the successes and failures of form field validations.

#### `onFails` - Failed Validation

The `onFails` method allows you to define an event handler that will be triggered whenever a form field fails validation. Example:

```javascript
trForm.onFails((trFormInstance) => {
  // Code to execute in case of validation failure
  console.log("Validation failed", trFormInstance);
  // Customize the reactions to validation failures here
});
```

Customize the code to execute according to your needs.

#### `onPasses` - Successful Validation

The `onPasses` method works similarly, triggering an event handler when the form passes validation. Example:

```javascript
trForm.onPasses((trFormInstance) => {
  // Code to execute in case of successful validation
  console.log("Validation succeeded");
  // Customize reactions to validation successes here
});
```

Use this method to perform specific actions in case of successful validation, such as validating other fields or enabling a submit button.

By leveraging `onFails` and `onPasses`, you can tailor your application to the validation outcomes of the form fields, adding customized and responsive logic.

### Custom Event Emission

### `emit` - Event Customization

The `emit` method of the `TrForm` class allows you to emit custom events to the form associated with the `TrForm` instance. This advanced feature facilitates communication and interaction within your application.

#### Example Usage

```javascript
const userData = { name: "John Doe", age: 25 };

// Emitting a custom "user-updated" event with additional data
trForm.emit("user-updated", userData);
```

In this example, a custom event named "user-updated" is emitted to the form, carrying additional user data. This flexibility allows you to create scenarios where specific parts of your application can respond to these tailored events.

#### Possible Uses

- **Advanced Communication:** Emit events when an `input` element's value changes and listen for these events to trigger specific actions in different parts of your application.

- **Customizing Interactions:** Adapt your application's behavior by emitting custom events in response to specific conditions or form states.

- **Integration with Other Components:** Facilitate integration with other components of your application by emitting events containing crucial information.

Wise use of the `emit` method can greatly enhance your application's interactivity and modularity, allowing different parts to respond in a customized way to events emitted by the `TrForm` class.

### Attaching Event Listeners

The `on` method of the `TrForm` class opens up a world of opportunities by allowing you to attach event listeners, whether they are native or custom events, to your form. Learn how to customize your user experience by dynamically responding to specific interactions.

#### Example Usage

```javascript
// Attach an event listener for the "change" event
trForm.on("change", (event) => {
  // Code to execute when the "change" event occurs in the form
  console.log("Change detected!");
});
```

In this example, an event listener is added to the form for the "change" event. When this event occurs, the code inside the callback function is executed. You can listen for other events such as "submit," "click," or even your own custom events.

#### Possible Uses

- **User Interaction Responsiveness:** Monitor events such as change (`change`), click (`click`), or submit (`submit`) to trigger specific actions.

- **Custom Validation:** Attach a listener to respond to custom events emitted by the `TrForm` class and perform validations or specific actions accordingly.

- **Integration with Other Components:** Create harmonious interactions with other parts of your application by listening to specific events emitted by other components.

By skillfully incorporating the `on` method, you can customize the user experience and add intelligent responsiveness to your form, making your application an interactive and dynamic experience.

### Form Validation Status

The `passes` method in the `TrForm` class checks whether the form is valid or not.

#### Example Usage

```javascript
// Check if the form is valid
const isValid = trForm.passes();

if (isValid) {
    // Proceed with form submission or handle a valid form
} else {
    // Display error messages or handle an invalid form
}
```

In this example, the `passes` method is called to determine whether the form is valid. Based on the result, you can decide to submit the form, display error messages to the user, or perform other customized actions.

#### Possible Uses

- **Conditional Submission:** Use `passes` before triggering form submission to ensure all validations have been successfully passed.
  
- **Dynamic Response:** Customize your application behavior based on the current validation status of the form.

- **Error Handling Logic:** Display targeted error messages or take specific actions in case of validation failure.

The `passes` method calls the internal `isValid` method that checks each field according to the defined validation rules. By incorporating it into your logic, you can create a robust and responsive user experience. Take control of your form validation with the `passes` method from `TrForm`.

### `onValidate()` - Reacting to Form Validation

The `onValidate()` method of the `TrForm` class allows you to react to the form validation event. Use this feature to execute specific actions when complete form validation is performed.

#### Example Usage

```javascript
trForm.onValidate((trForm) => {
    console.log("Form validation performed", trForm);
});
```

### Destroying TrForm Instance

The `destroy` method of the `TrForm` class allows you to reset the `TrForm` instance by removing custom validation rules and associated event listeners. Here is an example of usage:

```javascript
trForm.destroy();
```

In this example, the `destroy` method is called on the `trForm` instance. This removes all custom validation rules and event listeners associated with this instance.

You can use the `destroy` method when you want to reset the `TrForm` instance to its initial state, such as when removing or deactivating the form.

By using the methods and events provided by the `TrForm` class, you can customize your form's validation and interaction in your application. Whether reacting to successful or failed validation events, emitting custom events, listening to form events, or performing specific validations, you have the ability to add custom logic to your application based on the form validation results.

The `isValid` method of the `TrForm` class checks whether the form is valid. It returns a boolean value indicating whether all form fields, represented by `TrInput` instances attached to the `TrForm` class, are valid.

Here's an example usage:

```javascript
const trForm = new TrForm(formElement);

const isValid = trForm.isValid();
if (isValid) {
    // The form is valid
    // Perform desired actions, such as submitting the form
} else {
    // The form is not valid
    // Perform desired actions, such as displaying an error message
}
```

In this example, a `TrForm` instance is created with the form element `formElement`. Then, the `isValid` method is called on this instance to check if the form is valid. The return value, `isValid`, will be `true` if all form fields are valid, and `false` otherwise.

You can use this method to make decisions in your code based on the form's validity. For example, if the form is valid, you may submit the form or perform other desired actions. If the form is not valid, you can display an error message or prevent form submission.

The `isValid` method iterates over all `TrInput` instances attached to the `TrForm` class using the `every` method. It calls the `passes` method on each `TrInput` instance to check if the field is valid. If all fields pass validation, the `isValid` method returns `true`. Otherwise, it returns `false`.

By using the `isValid` method, you can easily verify the overall validity of the form based on the individual validation of each field.

The `observeChanges` method of the `TrForm` class allows you to attach an event listener to the "tr.form.updated" event. When this event is triggered, the method initializes and executes the `TrInputs` for the form, then calls the provided function with the form instance as a parameter.

Here's an example usage:

```javascript
trForm.observeChanges((form) => {
    console.log("Form updated", form);
});
```

In this example, the `observeChanges` method is called on the `trForm` instance with a callback function that displays a message in the console when the "tr.form.updated" event is triggered. The callback function takes the form instance `form` as a parameter.

When the "tr.form.updated" event is triggered, the `observeChanges` method destroys the current form instance by calling the `destroy` method, then reinitializes the form by calling the `setContainer` method with the original container. Next, the `TrInputs` are initialized by calling the `_initTrInputs` method, then executed by calling the `_runTrInputs` method. Finally, the provided callback function is called with the form instance as a parameter.

Using the `observeChanges` method allows you to monitor changes in the form and take specific actions in response to those changes. You can reset and update the `TrInputs`, as well as execute custom code when the form is updated.