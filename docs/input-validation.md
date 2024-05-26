---
sidebar_position: 4
title: Input validation
---
 
## Trivule Form Input Validation
 

Trivule offers robust functionality for validating individual form fields with the `TrivuleInput` class, facilitating seamless interaction during the validation process.

**Initialization**

```javascript
const trivuleInput = new TrivuleInput({
  selector: "#username" 
});
```

**Customization Options**

The `TrivuleInput` class allows for personalized validation behavior through the following options:

- **`selector`:** Identifies the input element to validate using a CSS selector or DOM element reference. Required unless using the alternative `name` option.

- **`feedbackElement` (optional):** Specifies where validation error messages are displayed, either through a CSS selector or by checking for an associated HTML element with the `data-tr-feedback` attribute set to the input's name.

- **`rules` (required):** Defines validation criteria with an array or pipe-separated string of rules.

- **`messages` (optional):** Maps rule names to custom error messages for failed validation.

- **`name` (optional):** Alternative method to identify the input element using its name attribute.

- **`events` (optional):** Array of events triggering input validation, including default events like form submission or blur, input, and change events.

- **`autoValidate` (optional):** Determines whether to automatically validate input on specified events or upon form submission.

- **`attribute` (optional):** Specifies the HTML attribute for displaying error messages, offering flexibility in error message placement.

- **`failsOnFirst` (optional):** Controls whether validation stops at the first encountered error, potentially improving user experience by limiting error messages.

- **`emitEvent` (optional):** Emits a `"tr.input.validated"` event after each validation, allowing for custom listeners based on validation results.

- **`validClass` (optional):** CSS class applied to valid input elements for visual feedback.

- **`invalidClass` (optional):** CSS class applied to invalid input elements to guide users toward corrections.

- **`type` (optional):** Specifies the input element type for type-specific validation rules or behavior.

- **`realTime` (optional):** Enables real-time validation during user input, providing immediate feedback as users interact with the form.

These options empower developers to tailor validation behavior to suit their application's needs, enhancing user experience and error handling.

## Handling Validation Status

With the `TrivuleInput` class, you can effectively respond to the validation status of an input element using event listeners. These listeners trigger custom actions based on whether the input passes or fails validation.

**1. `onFails(fn: EventCallback)`**

- Attaches a listener to the `"tr.input.fails"` event, activated when the input fails validation.
- Define a callback function (`fn`) that takes a `TrivuleInput` object as its argument.

**Example:**

```typescript
trivuleInput.onFails((trivuleInput) => {
 // Handle failed validation
});
```

**2. `onPasses(fn: EventCallback)`**

- Attaches a listener to the `"tr.input.passes"` event, triggered upon successful validation of the input.
- Define a callback function (`fn`) that takes a `TrivuleInput` object as its argument.

**Example:**

```typescript 
trivuleInput.onPasses((event) => {
  console.log("Input passed validation!");
});
```

**Choosing the Approach:**

Utilize `onFails` to address validation failures and `onPasses` for successful validation. Alternatively, directly listen to the `"tr.input.fails"` or `"tr.input.passes"` events for streamlined event handling, optimizing your form's responsiveness.



### Efficient Validation Check: `valid()`

The `valid()` method in the `TrivuleInput` class enables you to discreetly validate an input element without triggering external events, such as `"tr.input.passes"` or `"tr.input.fails"`. This method is valuable when you need to assess validation status internally for specific actions or logic without altering the standard event-driven validation flow.

**Functionality:**

- Conducts validation on the input element according to the defined validation rules.
- **Does not dispatch** `"tr.input.passes"` or `"tr.input.fails"` events.
- Returns `true` if the input element satisfies all validation rules and is deemed valid.
- Returns `false` if the input element violates any of the validation rules, indicating validation failure.

**Example Usage:**

```typescript 
// Perform silent validation
const isValid = trivuleInput.valid();

if (isValid) {
  console.log("Input is valid!"); 
} else {
  console.log("Input failed validation."); 
}
```
 
- This method operates independently of event triggering; thus, attached event listeners for `"tr.input.passes"` or `"tr.input.fails"` will not be activated.
- For validation management reliant on event-driven behavior and user feedback, consider employing the `onFails` and `onPasses` methods outlined previously.
 
### Validating Inputs with `validate()`

The `validate()` method in the `TrivuleInput` class orchestrates a thorough validation process for input elements, offering comprehensive feedback and event handling.

**Functionality:**

- Conducts validation using predefined rules, akin to the `valid()` method, and returns a boolean indicating validation success or failure.
- Optionally emits the `"tr.input.validated"` event if `emitOnValidate` is set to true.
- Applies validation classes to the input element for visual cues.
- Displays feedback messages to users for clearer understanding of validation outcomes.

**Example Usage:**

```typescript 
// Validate the input element
const isValid = trivuleInput.validate();

// Process validation outcome
if (isValid) {
  console.log("Input is valid!"); 
} else {
  console.log("Input failed validation."); 
  const errors = trivuleInput.errors; 
}
```

**Key Considerations:**

- Utilize `validate()` for a comprehensive validation cycle, encompassing event emission and potential visual feedback.
- For silent validation checks within your form logic, `valid()` provides a suitable alternative.

### Custom Event Handling with `emit()`

The `emit()` method in the `TrivuleInput` class facilitates the emission of custom events to the input element, enabling customized event-driven interactions within your application.

#### Functionality

- **Emits Custom Events:** Allows emission of custom events to the input element.
- **Event Name:** Specify the name of the custom event to emit.
- **Additional Data:** Optionally include additional data to pass along with the event.

#### Parameters

- **`e`:** The name of the custom event to emit.
- **`data` (optional):** Additional data to pass with the event.

#### Example Usage

```typescript
// Emit a custom event named "inputChange"
trivuleInput.emit("inputChange");

// Emit a custom event with additional data
trivuleInput.emit("inputSubmit", { value: inputValue });
```

### Event Listener Attachment with `on()`

The `on()` method in the `TrivuleInput` class allows you to attach event listeners to the input element, enabling responsive handling of various events triggered by user interactions or application logic.

#### Functionality

- **Attach Event Listeners:** Enables attachment of event listeners to the input element.
- **Event Name:** Specify the name of the event to listen to.
- **Callback Function:** Define a callback function to execute when the specified event occurs.

#### Parameters

- **`e`:** The name of the event to listen to.
- **`fn`:** The callback function to execute when the event occurs. This function takes an event of type `Event` as a parameter and returns nothing.

#### Example Usage

```typescript
// Attach an event listener for the "change" event
trivuleInput.on("change", (event) => {
  console.log("Input value changed:", event.target.value);
});

// Attach an event listener for a custom event
trivuleInput.on("inputSubmit", (event) => {
  console.log("Input submitted with value:", event.detail.value);
});
```

These methods empower you to create dynamic and interactive user experiences by enabling custom event emission and event listener attachment within your application's input elements.

## Rules

### Extending Validation Rules with `pushRule()` and `appendRule()`

Both the `pushRule()` and `appendRule()` methods in the `TrivuleInput` class empower developers to enhance the validation capabilities of Trivule input instances by adding custom validation rules tailored to specific requirements. While they serve similar purposes, `appendRule()` acts as an alias for `pushRule()`, providing flexibility in method naming.

#### Functionality

- **Add Rule:** Both methods allow developers to incorporate additional validation rules into the existing set of rules for a Trivule input instance.
- **Rule Specification:** Specify the name of the rule to be added.
    - **`rule`:** The name of the rule to be added.
- **Optional Parameters:**
  - **`message`:** Custom error message associated with the added rule.
  - **`param`:** Additional parameter(s) required for the validation rule.
  - **`validate`:** Custom validation callback function for the added rule.
  - **`local`:** Language localization for error messages.

#### Returns

- **This Trivule Input Instance:** Both methods return the current Trivule input instance, enabling method chaining for enhanced readability and simplicity.

#### Example Usage

```typescript
// Add an additional validation rule for minimum length using pushRule()
trivuleInput.pushRule({
  rule: "minLength",
  param: 8,
  message: "Password must be at least 8 characters long.",
});

// Incorporate a custom validation rule with a custom validation callback function using appendRule()
trivuleInput.appendRule({
  rule: "customRule",
  validate: (value) => {
    return {
        passes: value === "customValue",
        value: value.trim()
    };
  },
  message: "Input must be 'customValue'.",
});
```

By offering both `pushRule()` and `appendRule()` methods, developers have flexible options for extending the validation capabilities of Trivule input instances, enhancing the overall flexibility and adaptability of input validation processes.

### Modifying Validation Rules with `prependRule()`, `insertAfterRule()`, and `insertBeforeRule()`

The `prependRule()`, `insertAfterRule()`, and `insertBeforeRule()` methods in the `TrivuleInput` class offer developers versatile options to modify and rearrange validation rules within Trivule input instances. These methods enable dynamic adjustments to the validation process, enhancing flexibility and customization.

#### Functionality

- **Prepend Rule (`prependRule()`):** Adds a validation rule to the beginning of the existing rule set for the Trivule input instance.
- **Insert After Rule (`insertAfterRule()`):** Inserts a new validation rule after a specified existing rule within the rule set.
- **Insert Before Rule (`insertBeforeRule()`):** Inserts a new validation rule before a specified existing rule within the rule set.
- **Rule Specification:** Define the name of the rule to be added or inserted.
    - **`rule`:** The name of the rule to be added or inserted.
- **Optional Parameters:**
  - **`oldRule`:** The existing rule after which the new rule will be inserted (`insertAfterRule()` and `insertBeforeRule()` only).
  - **`newRule`:** The new rule to be added or inserted.
  - **`message`:** Custom error message associated with the added or inserted rule.
  - **`param`:** Additional parameter(s) required for the validation rule.
  - **`validate`:** Custom validation callback function for the added or inserted rule.
  - **`local`:** Language localization for error messages.

#### Returns

- **This Trivule Input Instance:** All methods return the current Trivule input instance, facilitating method chaining for enhanced readability and simplicity.

#### Example Usage

```typescript
// Prepend a validation rule to the existing rule set
trivuleInput.prependRule({
  rule: "required",
  message: "Field is required.",
});

// Insert a new validation rule after an existing rule
trivuleInput.insertAfterRule("minlength",{ 
  rule: "customRule",
  validate: (value) => {
    return {
        passes: value === "customValue",
        value: value.trim()
    };
  },
  message: "Input must be 'customValue'.",
});

// Insert a new validation rule before an existing rule
trivuleInput.insertBeforeRule("maxLength",{ 
  rule: "customRule",
  validate: (value) => {
    return {
        passes: value === "customValue",
        value: value.trim()
    };
  },
  message: "Input must be 'customValue'.",
});
```

By offering these methods, developers gain the flexibility to dynamically modify the validation rule set of Trivule input instances, allowing for tailored validation processes that meet specific application requirements.


## Useful methods

### Retrieving Feedback Element with `getFeedbackElement()`

The `getFeedbackElement()` method in the `TrivuleInput` class facilitates the retrieval of the feedback element associated with the input element. This method provides access to the HTML element where validation error messages are displayed, enabling developers to customize or manipulate feedback presentation as needed.

#### Functionality

- **Retrieve Feedback Element:** Returns the HTML element designated for displaying validation error messages associated with the input element.

#### Returns

- **Feedback Element:** The HTML element where validation error messages are displayed.

#### Example Usage

```typescript
// Retrieve the feedback element
const feedbackElement = trivuleInput.getFeedbackElement();

// Manipulate the feedback element (e.g., customize styling or content)
feedbackElement.classList.add("custom-feedback");
feedbackElement.innerHTML = "Custom error message";
```

By utilizing the `getFeedbackElement()` method, developers can seamlessly access and modify the feedback element associated with Trivule input instances, enhancing the visual presentation and user experience of validation error messages.

### Retrieving Validation Messages with `getMessages()`

The `getMessages()` method in the `TrivuleInput` class allows you to obtain the validation messages associated with the input element. This method returns an object containing the validation messages, providing developers with insight into the specific error messages configured for the input's validation rules.

#### Functionality

- **Retrieve Validation Messages:** Returns an object containing the validation messages associated with the input element.

#### Returns

- **Validation Messages Object:** An object containing the validation messages configured for the input element's validation rules.

#### Example Usage

```typescript
// Retrieve validation messages
const messages = trivuleInput.getMessages();

// Log validation messages to the console
console.log(messages);
```

By utilizing the `getMessages()` method, developers can easily access and review the validation messages assigned to the input element, facilitating effective error message management and customization for enhanced user experience.