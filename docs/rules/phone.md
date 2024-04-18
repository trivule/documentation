---
sidebar_position: 9
---
> **Note:** Experimental Trivule 1.0.
# Phone Number Validation
These rules are specifically designed for phone number validation. They allow you to verify the format of phone numbers. Here is a detailed description of each rule and practical usage examples:

> Please note that the code and examples provided may contain errors or limitations due to the complexity and variations of phone number formats across different regions and countries. It is always recommended to perform additional validation or consult relevant standards when working with phone numbers.

## `phone` Rule

The `phone` rule validates the format of a phone number. Given the diversity of phone numbers, this validation may not cover all possible cases.

**Usage:** Use this rule to ensure that a phone number entered by the user adheres to the expected format.

**Example:**
```html
<input data-tr-rules="phone:FR,BJ" /> 

<input data-tr-rules="phone" />
<!-- Validates phone numbers globally -->
```

In the first example, the rule validates the phone number based on the specified country codes (FR, BJ). It ensures that the entered phone number follows the format used in the respective countries.

In the second example, the rule validates phone numbers globally, without any restriction on specific country codes.

---

If you would like to contribute by adding your own phone number validation rule, you can visit the [contribution page](/docs/contribution).