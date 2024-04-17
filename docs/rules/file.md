---
sidebar_position: 7
---
# File Validation

The following rules are used to validate files. They allow you to check if a value is a `File` or `Blob` object, verify the size of a file, and ensure that the file size falls within minimum and maximum values.

### Rule: `file`

This rule checks if the input value is a `File` or `Blob` object.

```html
<input data-tr-rules="file" />
```

- Usage: Use this rule to ensure that a file input field is filled with a valid file.

### Rule: `maxFileSize`

This rule checks if the size of a `File` or `Blob` object is less than or equal to a given maximum size.

```html
<input data-tr-rules="maxFileSize:1MB" />
```

- Usage: You can use this rule to limit the size of files that users can upload.

### Rule: `minFileSize`

This rule checks if the size of a `File` or `Blob` object is greater than or equal to a given minimum size.

```html
<input data-tr-rules="minFileSize:1MB" />
```

- Usage: This rule is useful when you want to ensure that uploaded files have a specific minimum size.

### Rule: `fileBetween`

This rule checks if the size of a `File` or `Blob` object falls between specified minimum and maximum values.

```html
<input data-tr-rules="fileBetween:1MB,5MB" />
```

- Usage: You can use this rule to limit the size of uploaded files to a specific range.

---
# Rule: "mimes"

The "mimes" rule is used to verify if the MIME type of a `File` or `Blob` object matches the specified MIME type(s). It allows you to validate file uploads based on their MIME types.

## Usage

### Description
The "mimes" rule validates the MIME type of the uploaded file by comparing it to the specified MIME types. It returns `true` if the MIME type matches any of the provided MIME types, and `false` otherwise.

## Examples

### Example 1: Accept only PDF files
```html
<input type="file" data-tr-rules="mimes:.pdf">
```
This example restricts file uploads to only accept files with the MIME type "application/pdf".

### Example 2: Accept multiple MIME types
```html
<input type="file" data-tr-rules="mimes:image/jpeg, image/png">
```
In this example, file uploads are allowed for JPEG and PNG image files.

### Example 3: Accept specific MIME type groups
```html
<input type="file" data-tr-rules="mimes:audio/*">
```
This example allows file uploads for audio files, regardless of their specific MIME type.

### Example 4: Using wildcards
```html
<input type="file" data-tr-rules="mimes:image/*">
```
Here, all image files with a MIME type starting with "image/" will be accepted.

## Notes
- The "mimes" rule should be used in combination with other validation rules to provide comprehensive validation of file uploads.
- It's important to note that the validation is performed client-side, and additional server-side validation is also recommended to ensure data integrity and security.

Remember to adapt the example code according to your specific use case and requirements.
