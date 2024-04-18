---
sidebar_position: 13
title: Global Validation
---
> **Note:** Experimental Trivule 1.0.
# Global Validation

## Trivule

If you have a website or application and want to apply the same validation rules to all forms without managing each form individually, you can use global validation.

## Usage

To set up global validation, simply initialize Trivule:

```html
<script>
  const tr = new Trivule();
  tr.init();
</script>
```

This activates global validation for all your forms.