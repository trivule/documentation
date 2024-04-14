---
sidebar_position: 10
title: Development
---
> **Note:** Quickv 2.0 (Experimental)

## Directory Structure
When you clone Quickv from GitHub, here's an overview of the code structure, highlighting the important folders and files documented. The `src` directory contains all of the main Quickv code.

### The **Contracts** Directory

The `contracts` directory contains interfaces and types used in Quickv. You can refer to these to see the types added.

### The **Locale** Directory

The `locale` directory contains internationalization files, including languages supported by default in Quickv. The `qv-local.ts` file exports a class that serves as a facade to handle internationalization, such as translation.

#### The **Lang** Directory

The `lang` directory contains language files for English.

### The **Messages** Directory

The `messages` directory contains files for generating messages based on a given rule. The main class for this task is the `QvMessages` class, exported from the `qv-messages.ts` file.

### The **Rules** Directory

The `rules` directory contains the validation rules in Quickv. It includes files grouping validation rules into different categories:
- **global.ts**: General rules such as `in`, `between`, etc.
- **date.ts**: Validation rules for dates.
- **file.ts**: Validation rules for files.
- **number.ts**: Validation rules for numbers.
- **string.ts**: Validation rules for strings.
- **phone.ts**: Validation rules for phone numbers.

#### The **Form** Directory

The `form` directory contains rules specific to an entire form rather than individual inputs. For example, the `same` rule can only be used in a form as it involves comparing two fields.

#### The **Phone** Directory

The `phone` directory contains validation rules for phone numbers. The validation logic is found in the `CountryPhoneValidator` class, which includes validation methods for each supported country. It is exported from the `country-phone-validator.ts` file.

### The **Utils** Directory

The `utils` directory contains useful files for Quickv, such as helper functions.

### The **Validation** Directory

The `validation` directory contains the validation logic in Quickv. It includes several classes responsible for validation:
- `QvInput`: This class, exported from the `qv-input.ts` file, handles validation of individual fields.
- `QvForm`: This class, exported from the `qv-form.ts` file, handles validation of individual forms based on the inputs in the form.
- `Quickv`: This class, exported from the `quickv.ts` file, manages the validation of all forms on your page.
- `QValidation`: This class, exported from the `qv-validation.ts` file, executes validation rules for a given set of form fields and indicates whether the form is valid or not.

## The **Types** Directory

The `types` directory contains TypeScript declaration files for the Quickv project.

## Source Code

The source code for the Quickv library is available on [GitHub](https://github.com/quick-v/quickv). It is free, open source, and released under our [license](/docs/license).

## Contribution

We would love to receive your contributions to the Quickv project in any way possible. Please read our [contribution guidelines](/docs/contribution) for more information.