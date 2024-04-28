---
sidebar_position: 4
title: General Validation Rules
---
# General Validation Rules

## Rule: `required`

This rule checks if the input is not empty (not null, not undefined, not empty string). If the input value is empty, the validation fails.

### Example

```html
<input data-tr-rules="required" />
```

In this example, the `required` rule is applied to an input field. It checks if a value has been entered into the field.

---
 
## Rule: `in`
 

This rule checks if the input value is part of the specified list of values. Values must be separated by a comma.

### Example

```html
<input data-tr-rules="in:active,inactive" />
```

In this example, the `in` rule is applied to an input field. It checks if the input value is either "active" or "inactive."

---

## Rule: `size`
 
### Usage

```html
<input type="text" data-tr-rules="size:6" />
```
or

```html
<input type="file" data-tr-rules="size:6MB" />
```
### Description

This rule checks if the input adheres to the specified maximum size. The rule is applied differently depending on the type of input:

- If the input value is a file, the rule checks the maximum file size.
- If the input value is not a file, the rule checks the number of characters in the input.

### Example

```html
<input type="text" data-tr-rules="size:6" />
```

In this example, the `size` rule is applied to an input field. It checks if the size of the input is equal to 6 characters.  

---

## Rule: `boolean`

This rule checks if the input corresponds to a boolean value. The accepted values are: "true," "false," "0," "1," "yes," and "no" (letters can be uppercase or lowercase).

### Example

```html
<input data-tr-rules="boolean" />
```

In this example, the `boolean` rule is applied to an input field. It checks if the input value corresponds to a boolean value. 
---

## Rule: `between`

This rule allows you to validate different types of data by specifying a range of values. Possible ranges of values depend on the type of data:

- For numbers, the rule checks if the input value falls within the specified minimum and maximum values.
- For strings, the rule checks if the length of the string falls within the specified minimum and maximum lengths.
- For dates, the rule checks if the input date falls within the specified minimum and maximum dates.
- For files, the rule checks if the file size falls within the specified minimum and maximum file sizes.

### Example

```html
<!-- Valid number -->
<input type="number" data-tr-rules="number|between:6,7" />

<!-- Valid string -->
<input type="text" data-tr-rules="between:6,7" />

<!-- Valid date -->
<input type="date-local" data-tr-rules="date|between:2021-01-01,now" />

<!-- Valid file size -->
<input type="file" data-tr-rules="file|between:2MB,3MB" />
```

In these examples, the `between` rule is applied to different types of input fields. It checks if the input value falls within the specified ranges.

---

## Rule: `regex`
This rule checks if the input value matches the specified regular expression. The regular expression is defined using standard regex syntax without the `/` characters at the beginning and end.

### Example

```html
<input data-tr-rules="regex:^[A-Z]+$" />
```

In this example, the `regex` rule is applied to an input field. It checks if the input value is a sequence of uppercase letters.

#### Note
The `regex` rule in Trivule typically uses the `|` symbol as a separator to specify multiple regular expressions. However, this can pose problems if the `|` symbol is present in your regular expression. To address this issue, Trivule offers the use of a special character '`&pip;`' as a substitute for the `|` symbol.

Instead of writing your `regex` rule like this:

```html
<input data-tr-rules="regex:^abc|def$" />
```

You can use the character '`&pip;`' in place of the `|` symbol, like this:

```html
<input data-tr-rules="regex:^abc&pip;def$" />
```

This way, Trivule will recognize that you want to use the `|` symbol in your regular expression without interpreting it as a rule separator.

Be sure to follow this convention when using the `regex` rule in Trivule to avoid any confusion or errors related to the `|` symbol.

---

## Rule: `only`

This rule allows you to validate an input based on its type. Two types are currently supported: "string" and "number." The rule checks if the input value matches the specified type.

### Example

```html
<input data-tr-rules="only:string" />
```

In this example, the `only` rule is applied to an input field. It checks if the input value is a string containing only string.