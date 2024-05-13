---
sidebar_position: 10
title: How to Add or Modify a New Rule in Trivule?
---
## How to Add or Modify a New Rule in Trivule?

Let's say the `required` rule doesn't meet your requirements. You want to customize its behavior or add a new rule. The `rule` method of the `TrBag` class is here for that.

Here's how to add or modify a rule in Trivule:

```javascript
TrRule.add("required", (input) => {
  return {
    value: input,
    passes: false,
  };
});
```

This method takes four parameters, two of which are required:

- **rule**: The name of the rule.
- **callback**: The callback. This callback takes three parameters, one of which is required. The first is the value of the field to validate, the second is the argument passed to the rule, and the third is the field type. Only the value is required. This callback must return an object in the following format:
```js
{
  value: value, // The value can be modified to serve the next rule.
  passes: true, // or false: indicates if the predicate passed.
  type: "text", // Optional but necessary for specific types, such as numbers, dates, etc.
  alias: "required", // Optional but useful when the rule can change depending on the data type and refer to another.
}
```
Explanation on `alias`:
When we take the `min` rule, it is a general rule that validates numbers, strings, file sizes, etc. When the data type to be validated is a `string`, the rule simply calls the `minlength` rule to avoid rewriting another logic.

- **message**: The message to display when the rule fails.
- **locale**: If necessary, you can specify in which language the error will be displayed.

### Complete Example

```typescript
const notSudoRule: RuleCallBack = (input: string) => {
  return {
    value: input,
    passes: input != "sudo",
    type: "text", // Optional
    alias: undefined, // Optional
  };
};

TrRule.rule(
  "notSudo",
  notSudoRule,
  "The input value should not be 'sudo'",
  "en"
);
```

Once this step is completed, your rule is available in Trivule, and you can use it just like you would with Trivule's other rules.