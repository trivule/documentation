---
sidebar_position:   22
---
 
# Contribution
 
We welcome community contributions to improve `Trivule`. If you encounter issues, have ideas for improvements, or wish to make changes to the code, please follow the steps below to contribute.

### Opening Issues

If you encounter problems or have ideas for improvements, feel free to open an issue on our GitHub repository. Make sure to provide as many details as possible, including screenshots or example code, to help us understand and resolve the issue.

### Submitting Pull Requests

If you would like to make changes to the code, we encourage you to propose a pull request. Please follow the steps below:

1. Fork the repository and clone it locally to your machine.
2. Switch to the `2.0.0` branch on which you want to work.
3. Install the project dependencies locally by running the following command:
```bash
   npm install
```
4. Make the necessary changes and test them thoroughly. For example, you can add a new rule (see below for more details).
5. Commit your changes using the command `git commit -m "Description of changes"`.
6. Push your changes to your forked repository.
7. Open a pull request on our GitHub repository and provide a detailed description of the changes you made.

We will review your pull request as soon as possible and provide you with feedback. Be sure to address all comments and update your pull request accordingly.

### Participating in Discussions

We also have ongoing discussions on various topics related to the project. We invite you to participate in these discussions and share your ideas, suggestions, or comments. Your perspective and expertise can help guide the project in the right direction.

## Code of Conduct

We ask that you respect our code of conduct when participating in the project. Please respect other contributors and maintain a collaborative and inclusive environment.

Any violation of the code of conduct can be reported to Fassinou Claude (dev.claudy@gmail.com):

1. Participants must be tolerant of differing opinions.
2. Participants must ensure that their language and actions are free from personal attacks and derogatory remarks.
3. When interpreting the words and actions of others, participants should always assume good intentions.
4. Harassment in any form will not be tolerated and will be considered a violation of the code of conduct.

Please note that a contact email address must be provided for reporting violations.

We look forward to working with you and moving this project forward together. Thank you for your interest and commitment!

The Development Team

---
Voici la version améliorée et traduite en anglais de votre document :

## Adding a New Rule to Trivule

### Step 1

A Trivule rule is simply a callback function that handles validation according to your requirements and should return a boolean value. It must implement the `RuleCallBack` interface defined in `./src/contracts/rule-callback.ts`.

Based on the type of data your callback will validate, you should categorize it into one of the following files:
- `./src/rules` (global, number, phone, string, date, file, etc.)

Here is an example implementation of a callback for the `in` rule:

```ts
/**
 * Checks if the input is within the specified list.
 *
 * @param input - The input to be verified.
 * @param params - The list of values to verify, as a comma-separated string.
 * @returns `true` if the input is in the list, `false` otherwise.
 */
export const inInput: RuleCallBack = (input, params) => {
  if (!params) {
    throwEmptyArgsException("in");
  }
  const list = splitParam(params as string);
  return list.includes(input);
};
```

Explanation:
1. The first argument, `input`, refers to the current value of the field being validated. It can be of types such as `string`, `Blob`, `File`, `number`, `null`, `boolean`, `undefined`, `FileList`.
2. The second argument, `params`, refers to possible arguments. The arguments are comma-separated strings. You can retrieve them individually using the `splitParam` function. 
For example, if you have an HTML field like this:
```html
<input data-tv-rules="in:active, inactive, suspended" />
```
The values after the colon (`:`) are the parameters. In this case, the second argument would be a string like `"active, inactive, suspended"`. You can use the function `splitParam(params ?? "")` to obtain an array of individual values, for example, `['active', 'inactive', 'suspended']`.

3. The rest of the code represents the callback logic. In this example, we check if the current value of the field is in the specified list and return the result.

***The callback must return a boolean value.***

#### Naming Convention

In general,

it is recommended to name the callback the same as the rule you wish to add. However, this is not mandatory if it causes problems.

In this example, the rule name is normally `in`, but we had to use `inInput` because the keyword `in` is reserved in JavaScript/TypeScript.

### Step 2: Test the Callback

Once you have written your callback, you need to test it to ensure it works as expected. For this, you can use the Jest testing tool.

Depending on the file in which you wrote your callback, you should navigate to the corresponding test file. In this example, the test file is `global.test.ts`.

Here is an example test for the `inInput` callback:

```ts
describe("inInput rule callback", () => {
  it("should return true if the input is in the list", () => {
    const input = "active";
    const params = "active, inactive, suspended";
    const result = inInput(input, params);
    expect(result).toBe(true);
  });

  it("should return false if the input is not in the list", () => {
    const input = "pending";
    const params = "active, inactive, suspended";
    const result = inInput(input, params);
    expect(result).toBe(false);
  });

  it("should throw an error if params argument is empty", () => {
    const input = "active";
    const params = "";
    expect(() => inInput(input, params)).toThrow();
  });
});
```

You can run the tests using the following command:

```bash
npm test
```

Once your tests pass, you can proceed to the next step.

### Step 3: Add the Callback to Rules

All Trivule rules are listed in the `Rule` type, located in the `./src/contracts/rule.ts` file. You must add your rule to this type to make it recognizable.

Here's an example of adding the `in` rule:

```ts
/**
 * List of Trivule rules grouped by rule type
 */
export type Rule = "contains" | "in" | "startWithLetter" /*...*/;
```

Adding the rule to this type also enables code completion in your code editor, but that is not the primary goal of including the rule in this type.

If you use a TypeScript-compatible tool, you might notice an error in the `./src/validation/tr-bag.ts` file. This file is where rules are actually added to Trivule. Until a rule is added to this file, it won't be part of Trivule.

In this file, the `TrBag` class is used to store the rules. You should add your rule to the `rules` attribute of this class, as shown below:

```typescript
export class TrBag implements ITrBag {
  private static rules: RulesBag = { 
    in: inInput,
  };
}
```

### Step 4: Assign a Message

Generally, your rule is ready to be used once you have added it. However, you also need to assign it a message; otherwise, a default message will be used.

To do this, go to the `./src/local/lang` folder. You will find the default language files supported by Trivule (English). Add messages corresponding to your rule in these files.

Here's an example of adding messages for the `in` rule:

```ts
export const en_messages: RulesMessages = {
  default: "This field is invalid", 
  in: "Please enter a valid input",
};
```
 
If you've followed these steps correctly, you can test your rule by using it in an HTML form to see if everything works properly.

To compile the project and get the bundle to include in your project, run the following command:

```bash
npm run build
```
This command will generate the `index.mjs` and `index.umd.js` files in the `./dist` folder. The first file is intended for use as an ES6 module, while the second is suitable for UMD systems.
You can also use the `npm run build:watch` command to automatically compile the files as you work.

### Summary of Steps:

#### Step 1: Write the Rule Callback

Here's an example code snippet to write the `in` rule callback:

```typescript
import { RuleCallBack, splitParam, throwEmptyArgsException } from "../validation/Trivule";

/**
 * Verifies whether the input value is in the specified list.
 * @param input - The current value of the field to validate. It can be of types such as `string`, `Blob`, `File`, `number`, `null`, `boolean`, `undefined`, `FileList`.
 * @param params - The list of values to verify. A comma-separated string.
 * @returns `true` if the input is in the list, `false` otherwise.
 */
export const inInput: RuleCallBack = (input, params) => {
  if (!params) {
    throwEmptyArgsException("in");
  }
  const list = splitParam(params as string);
  return list.includes(input);
};
```

#### Step 2: Test the Callback

Use the Jest testing tool to test the callback.

#### Step 3: Add the Callback to Rules

Add the callback to the Trivule rules list in the `./src/contracts/rule.ts` file.

#### Step 4: Assign a Message

Add the corresponding message for your rule in the language files `./src/local/lang/en_messages.ts` and `./src/local/lang/fr_messages.ts`.

Once these steps are complete, you can use your new rule in Trivule.