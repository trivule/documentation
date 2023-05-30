---
sidebar_position: 3
---
# Usage
Quickv offers three validation methods: isolated **input** validation, isolated **form** validation, or general validation of all forms on your site. This allows you to choose the method that best suits your needs and effectively validate user-submitted data, whether it be for a single field, an entire form, or for all forms on your website.

1. To perform validation on an individual **input** field, you can use the `QvInput` class. This class takes a valid CSS selector to identify the field to be validated, a `QvConfig` configuration (optional), and a boolean (optional) indicating whether the `qv.input.validated` event will be triggered. This event allows you to know when the field has been changed and validated.

Example

```js
const qv = new QvInput(inputSelector);
qv.init();
```

2. To validate a single form, you can use the `QvForm` class of Quickv. Simply provide a valid CSS selector to find the form to be validated in its constructor, then call the `init()` method to initialize validation.

Example

```js
const qv = new QvForm(inputSelector);
qv.init();
```

3. To validate all forms on your site in a general way, you can use the `Qv` or `Quickv` class of Quickv. These classes take nothing in their constructor and search all forms on your site to apply an instance of `QvForm` to them. However, please note that this method may not work correctly with certain frameworks like Angular that manipulate the DOM in a specific way. In this case, you can use methods 1 and 2 for better integration.

Example

```js
const qv = new Quickv();
qv.init();
```

By using these classes, you can easily validate your forms with Quickv, but be sure to take into account the specificities of your framework or development environment for optimal integration.

### In HTML and CSS Vanilla

- Copy and include the `quickv.js` file in your project with the `script` tag

- Initialize as follows:

  ```js
  const qv = new Quickv();
  qv.init();
  ```

  That's all you need to do as far as JavaScript, if you have no errors in the console, you can test Quickv

- Create an HTML form, with the `form` tag

- Create a field you want to validate and add attributes like the example below

  Exemple

  ```html
  <form action="">
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

By typing in the age field and submitting the form by clicking the **_Submit_** button, Quickv will automatically validate the submitted data according to the defined validation rules and display the appropriate error messages in the HTML element with the `data-qv-feedback` attribute if the data is not valid.
If you do not want to disable the default form, simply remove the `data-qv-submit` attribute from the submit button in your HTML code.

### In Angular
You can see here an example of using Quickv in Angular [here](https://github.com/Claudye/ng-quickv)


### In Reactjs

You can see here an example of using Quickv in Reactjs [here](https://github.com/Meschack/quickv-test/tree/react-test)

---


## Customization

Quickv gives you many attributes to validate your form without writing any JS code

### Display error messages

By default, error messages are in English. However, you can modify them to fit a specific rule on a field by using the `data-qv-messages` attribute. The messages are separated by the pipe symbol (|) in the order in which you defined your rules. You can also put the messages in any order by specifying the rules for which you defined the messages. For example, if you have a rule `required|min:x|max:x`, you can set the message for the "min" and "max" rule using `data-qv-messages="{1}Message for min|{2}Message for max"`. The numbers in braces correspond to the positions of the rules, with the first rule being at position 0. Sometimes it is handy to have an error message for several rules. You can do this by specifying the positions of the rules affected by the message. For example, `data-qv-messages="This field is required|{1,2}Please enter a number between x and y"`.

The `data-qv-feedback="field_name"` attribute allows you to display the error message where you want it. You can place it anywhere on the page, Quickv will find it and assign it the error message.

If you have a field with the name "xxx", Quickv will try to find the first HTML element with the attribute `data-qv-feedback=xxx` closest to the field in question. If no element is found, it will do nothing.

> _Sometimes you may not want to use the name directly on an HTML field. The **data-qv-name** attribute allows you to give a name to your form._




### Displaying errors in Quickv

Quickv offers different ways to display errors in a form. If you want to display all error messages once the first rule has failed, you can use the `data-qv-show` attribute. It accepts three possible values: `first`, `full`, and `last`.

By default, the value is `first`, which means only the first error message will be displayed. If you choose the `full` value, all error messages for all rules will be displayed. Finally, if you choose `last`, only the last error message will be displayed.



### Events to trigger validation

If you want to trigger the validation of a field according to certain events, such as `mouseover` or `focus`, you can add the `data-qv-events` attribute to the HTML element that has the `data-qv-rules` attribute. You can specify the events you want, separated by pipes (`|`). Feel free to test this feature!

### Customize the style of the field

It may happen that you want to apply a specific style to a field depending on its validity state (valid or invalid). To do this, you can use the `data-qv-invalid-class` and `data-qv-valid-class` attributes. For example, you can set data-qv-invalid-class with the value "_invalid-css_" to apply a specific CSS class when the form is invalid. Thus, the classes you have defined will be automatically applied according to the validity state of the form.


## Rules

#### General rules

- `required` - The value is mandatory.

- `nullable` - The value can be null, it will simply be ignored.

- `min:x` - Checks if the field value is greater than or equal to x. This rule can be used to validate numbers, strings, and files.

  - If the field is a number or a string, the value of x must be an integer.

  - If the field is a file, the value of x must be expressed in **B, KB, MB, or GB**. Example: 2MB, 1KB, 3GB.

- `max:x` - Checks if the field value is less than or equal to the specified maximum value. This rule works in the same way as the min rule.

- `in:x,x,z,...` - The _in_ validation rule checks if the user input is included in a specified list of values.

- `size:x` - This rule should be used with caution.

  - If the entered value is a file, it checks if the file size is less than or equal to x (B, KB, MB, or GB).

  - If the value is a string, it checks if the length of the string is exactly x (an integer).

  - If the value is a number, it passes if the number of digits (including separators) is exactly x (an integer).

- `between:x,y` - Passes if the field value is between x and y.

  - If the field is a number, x and y must be numbers.

  - If the field is a date, x and y must also be valid dates.

  - If the field is a file, x and y must be expressed in **B, KB, MB, or GB**.



#### Write your rule:

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
