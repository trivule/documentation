---
sidebar_position: 8
title: Attributes
---
> **Note:** Quickv 2.0 (Experimental)

# Attributes

Quickv utilizes HTML attributes to configure and customize form validation. These attributes, all of which start with `data-qv`, offer a simple and intuitive approach to define validation rules, events, error messages, CSS classes, and other features related to form field validation. By using these attributes, you can quickly implement form validation in your web applications without needing to write complex JavaScript code. In this documentation, we will explore the most commonly used Quickv attributes, explaining their purpose and providing examples to illustrate their usage.

Quickv Attributes:

1. `data-qv-rules`:
   - Purpose: This attribute allows you to define validation rules for a form field.
   - Use Case: When you need to specify specific conditions for validating a form field, such as minimum or maximum length, date format, regular expression matching, etc.
   - Example: `<input type="text" data-qv-rules="required|email">`

2. `data-qv-events`:
   - Purpose: This attribute allows you to specify trigger events for form field validation.
   - Use Case: When you want to validate a form field when a specific event occurs, such as losing focus, typing text, etc.
   - Example: `<input type="text" data-qv-events="blur|input">`

3. `data-qv-messages`:
   - Purpose: This attribute allows you to define custom error messages for a form field.
   - Use Case: When you want to display specific error messages for each validation rule applied to a form field.
   - Example: `<input type="text" data-qv-rules="required" data-qv-messages="This field is required.">`

4. `data-qv-invalid-class` and `data-qv-valid-class`:
   - Purpose: These attributes allow you to define CSS classes to apply to a form field based on its validation state.
   - Use Case: When you want to apply different visual styles to a form field based on its validity.
   - Example: `<input type="text" data-qv-invalid-class="invalid" data-qv-valid-class="valid">`

5. `data-qv-auto`:
   - Purpose: This attribute allows you to enable or disable automatic validation during input in a form field.
   - Use Case: When you want to validate a form field as the user types data without manually triggering validation.
   - Example: `<input type="text" data-qv-auto="true">`

6. `data-qv-feedback`:
   - Purpose: This attribute allows you to specify a feedback element associated with a form field.
   - Use Case: When you want to display a custom feedback element for a form field, such as an icon or message.
   - Example: `<span data-qv-feedback class="feedback-icon"></span>`

7. `data-qv-submit`, `data-qv-enabled-class`, and `data-qv-disabled-class`:
   - Purpose: These attributes are used to configure the form submission button in relation to validation.
   - Use Case: When you want to enable or disable the submit button based on the form's validity and apply corresponding CSS styles.
   - Example: `<button type="submit" data-qv-submit data-qv-enabled-class="enabled" data-qv-disabled-class="disabled">Submit</button>`

8. `data-qv-name`: 
   - Purpose: This attribute allows you to change the field's name in the error message.
   - Use Case: When you want to use a different name for a field in error messages.
   - Example: `<input type="text" data-qv-name="our conditions">`

9. `data-qv-lang`:
   - Purpose: This attribute allows you to specify the language used for error messages and Quickv's user interface elements.
   - Use Case: When you want to customize the language of error messages and Quickv's user interface.
   - Example: `<form data-qv-lang="fr">...</form>`

Note: Remember to include the Quickv library in your application before using these attributes. You can find the library and code examples on the [Quickv GitHub repository](https://github.com/quick-v/quickv).

For more detailed information on using the attributes and other Quickv library features, please refer to the official Quickv documentation.