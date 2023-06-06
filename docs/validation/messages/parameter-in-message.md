

# Parameters in the Message

Sometimes, you may want to include specific information, such as the field name, in error messages. You can do this by using parameters in the messages. For example, to include the field name in a message, use `:field` in the message. For example:

```
The :field field is required.
```

When the error message is generated, `:field` will be replaced with the actual field name.

If you have multiple parameters to pass in a message, you can represent them with `:arg1`, `:arg2`, etc. For example, if you have a `min` rule with a parameter `9MB` ( `data-qv-rules="min:92"`), you can use the following message:

```
The size must exceed :arg0.
```

The output would be:

```
The size must exceed 9MB.
```

If you have multiple possible values for a rule, you can use `...arg` to display the list of parameters. For example, if you have an `in` rule with parameters `active`, `inactive`, `etc.` ( `data-qv-rules="in:active,inactive"`), you can use the following message:

```
The field value must be one of the following values: ...arg.
```

The output would be:

```
The field value must be one of the following values: active, inactive, etc.
```

By using these customizations for error messages, you can make Quickv validations more tailored to your specific translation and customization needs.