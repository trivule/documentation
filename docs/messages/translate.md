---
sidebar_position: 4
title: Traduction
---
> **Note:**  Quickv 2.0 (Expérimental)
 
# Traduction

Par défaut, les messages d'erreur sont en anglais. Cependant, vous pouvez traduire ces messages dans votre langue préférée en utilisant la classe `QvLocal`. Quickv prend en charge nativement deux langues : le français et l'anglais.

Pour traduire les messages dans votre langue, vous pouvez utiliser la méthode `translate(lang, messages)`. Par exemple, pour traduire les messages en espagnol, vous pouvez faire ce qui suit :

```javascript
QvLocal.translate('es', {
  min: "El campo :field debe ser menor que :arg0",
  rule1: "Mensaje 1",
  etc: "etc"
});
```

Assurez-vous de traduire tous les messages pour chaque règle que vous utilisez ; sinon, certains messages pourraient rester en anglais.