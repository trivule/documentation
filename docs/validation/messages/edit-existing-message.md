# Modification d'un message existant

Si vous souhaitez modifier un message existant dans Quickv, vous pouvez utiliser la méthode `rewrite(lang, rule, message)`. Par exemple, si vous souhaitez personnaliser le message pour la règle `min` en anglais, vous pouvez faire ce qui suit :

```javascript
QvLocal.rewrite('en', 'min', 'Votre message personnalisé pour la règle min');
```

Vous pouvez également utiliser la méthode `rewriteMany(lang, rules, messages)` pour modifier plusieurs messages en une seule fois.

```javascript
QvLocal.rewriteMany('en', ['min','max'], ['Message de règle Min', 'Message de règle Max']);
```

Il est important d'indiquer les messages d'erreur dans l'ordre respectif des règles.

Une fois que vous avez modifié ou ajouté des messages, Quickv utilisera les nouvelles versions des messages pour les règles correspondantes.