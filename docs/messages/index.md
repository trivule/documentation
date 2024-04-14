---
sidebar_position: 7
title: Messages
---
> **Note:** Quickv 2.0 (Experimental)

# Messages

When Quickv needs to display error messages, it first determines the language in which these messages should be displayed. Here's how it works:

### Via HTML

First, Quickv checks the language set on the `lang` attribute of the root `html` element:
```html
<html lang="en"></html>
```

If Quickv supports the language defined in the `lang` attribute, or if you have added your own languages, the error messages will be displayed in that language.

If, for any reason, you don't want to use the language defined in the `lang` attribute, you can use the `data-qv-lang` attribute on the root element to specify the language in which the messages should be displayed.

```html
<html data-qv-lang="en"></html>
```

The `data-qv-lang` attribute can also be used on a form element to specify the language for that specific form.
```html
<form data-qv-lang="en"></form>
```
This means that error messages will be specific to each form.

### Via JavaScript

Quickv offers another way to specify the language of error messages using JavaScript:

```javascript
QvLocal.local('es');
```
This tells Quickv to display messages in Spanish. This method overrides all other methods of language assignment for displaying error messages.

**Note:**

All language assignment methods must be used before calling the `init()` method.
This method should be called before initialization methods, constructors, or the `init()` method.

### Placeholders

Suppose you have an additional validation rule for the "Email" field: it must have a minimum length of 8 characters. You want to specify a specific error message for this rule.

You can use placeholders to indicate error messages in any order. Here's how you can do it:

```html
<input type="email" name="email" data-qv-messages="{0}Please enter a valid email address|{1}Email must be at least 8 characters long">
```

With this configuration, Quickv will display the first error message if the email address is invalid, and the second error message if the minimum length of 8 characters is not met.