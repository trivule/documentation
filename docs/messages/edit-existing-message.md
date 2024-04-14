---
sidebar_position: 15
title: Modifying an Existing Message
---
> **Note:** Quickv 2.0 (Experimental)

# Modifying an Existing Message

If you want to modify an existing message in Quickv, you can use the `rewrite(lang, rule, message)` method. For example, if you want to customize the message for the `min` rule in English, you can do the following:

```javascript
QvLocal.rewrite('en', 'min', 'Your custom message for the min rule');
```

You can also use the `rewriteMany(lang, rules, messages)` method to modify multiple messages at once.

```javascript
QvLocal.rewriteMany('en', ['min', 'max'], ['Min rule message', 'Max rule message']);
```

It is important to provide the error messages in the respective order of the rules.

Once you have modified or added messages, Quickv will use the updated versions of the messages for the corresponding rules.