# Directory Structure
When you download Quickv from GitHub, here's an overview of the code structure, highlighting the important documented folders and files.
The `src` directory is where you'll find all the main code of Quickv.

### The **Contracts** Directory

The `contracts` directory contains the interfaces and types used in Quickv. You can take a look at them to see the added types.

### The **Locale** Directory

The `locale` directory contains the internationalization files, including the languages supported by Quickv by default. The `qv-local.ts` file exports a class that acts as a facade for handling internationalization, such as translation.

#### The **Lang** Directory

The `lang` directory contains the language files for English and French.

### The **Messages** Directory

The `messages` directory contains the message generation files based on a given rule. The main class for this task is the `QvMessages` class, exported from the `qv-messages.ts` file.

### The **Rules** Directory

The `rules` directory contains the validation rules in Quickv. It includes files that group the validation rules into different categories:
- **global.ts**: General rules like `in`, `between`, etc.
- **date.ts**: Validation rules for dates.
- **file.ts**: Validation rules for files.
- **number.ts**: Validation rules for numbers.
- **string.ts**: Validation rules for strings.
- **phone.ts**: Validation rules for phone numbers.

#### The **Form** Directory

The `form` directory contains validation rules specific to a form as a whole, rather than individual inputs. For example, the `same` rule can only be used in a form as it involves comparing two fields.

#### The **Phone** Directory

The `phone` directory contains validation rules for phone numbers. The validation logic is in the `CountryPhoneValidator` class, which includes validation methods for each supported country. It is exported from the `country-phone-validator.ts` file.

### The **Utils** Directory

The `utils` directory contains helpful files for Quickv, such as helper functions.

### The **Validation** Directory

The `validation` directory contains the validation logic in Quickv. It includes several classes responsible for validation:
- `QvInput`: This class, exported from the `qv-input.ts` file, handles the validation of individual fields.
- `QvForm`: This class, exported from the `qv-form.ts` file, handles the validation of individual forms based on the inputs within the form.
- `Quickv`: This class, exported from the `quickv.ts` file, handles the validation of all forms on your page.
- `QValidation`: This class, exported from the `qv-validation.ts` file, executes the validation rules for a given set of form fields and indicates whether the form is valid or not.

## The **Types** Directory

The `types` directory contains the TypeScript declaration files for the Quickv project.

## Source Code

The source code of the Quickv library is available on [GitHub](https://github.com/quick-v/quickv). It is free, open-source, and released under our [license](/docs/license).

## Contribution

We would be delighted to have your contributions to the Quickv project in any way that suits you. Read our [contribution guidelines](/docs/contribution) for more information.