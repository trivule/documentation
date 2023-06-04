
# Translation

By default, error messages are in English. However, you can translate these messages into your preferred language using the `QvLocal` class. Quickv natively supports two languages: French and English.

To translate the messages into your language, you can use the `translate(lang, messages)` method. For example, to translate the messages into Spanish, you can do the following:

```javascript
QvLocal.translate('es', {
  min: "El campo :field debe ser menor que :arg0",
  rule1: "Mensaje 1",
  etc: "etc"
});
```

Make sure to translate all the messages for each rule you use; otherwise, some messages may remain in English.
