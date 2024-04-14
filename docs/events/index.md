---

sidebar_position: 7
title: Events
---
> **Note:** Quickv 2.0 (Experimental)

# Events

Quickv provides the ability to listen for different JavaScript events to trigger form validation without writing additional JavaScript code. This increases flexibility and simplifies form validation management.

## Triggering Validation with Default Events

By default, Quickv uses the `input`, `blur`, and `change` events to trigger form field validation. This means that whenever a user enters, leaves, or modifies a value in a form field, validation is automatically triggered.

For instance, if you want to trigger validation when an element is hovered over by the mouse cursor, you can use Quickv's `data-qv-events` attribute and specify the `mouseenter` event as follows:

```html
<input data-qv-events="mouseenter" />
```

The `data-qv-events` attribute can also accept a list of events separated by the `|` (pipe) symbol. For example, if you want to trigger validation on the `mouseenter`, `blur`, and `my-custom-event` events, you can use the following syntax:

```html
<input data-qv-events="mouseenter|blur|my-custom-event" />
```

## Quickv Events to Listen For

Quickv also provides specific events you can listen for to respond to specific actions related to form validation. Here are some of these events:

### Input-Related Events

- `qv.input.passes`: This event is triggered when an input field passes validation successfully.
- `qv.input.fails`: This event is triggered when an input field fails validation.

### Form-Related Events

- `qv.form.init`: This event is triggered when the form is initialized and ready for validation.
- `qv.form.passes`: This event is triggered when all fields in the form pass validation successfully.
- `qv.form.fails`: This event is triggered when at least one field in the form fails validation.
- `qv.form.update`: This event is used to indicate to Quickv to update the validation with DOM changes and new rules. This can be useful when you dynamically modify form elements or add new validation rules.

## Triggering Quickv Events

In addition to listening for events, you can also manually trigger certain Quickv events to perform specific actions. Here's an important event to know:

- `qv.form.update`: This event should be triggered when you want to instruct Quickv to update validation according to DOM changes or newly added rules.

By using these events and either listening for or triggering them at the right time, you can customize the behavior of form validation with Quickv.