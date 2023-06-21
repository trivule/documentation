# Paramètres dans le message

Parfois, vous souhaiterez inclure des informations spécifiques, telles que le nom du champ, dans les messages d'erreur. Vous pouvez le faire en utilisant des paramètres dans les messages. Par exemple, pour inclure le nom du champ dans un message, utilisez `:field` dans le message. Par exemple :

```
Le champ :field est requis.
```

Lorsque le message d'erreur est généré, `:field` sera remplacé par le nom réel du champ.

Si vous avez plusieurs paramètres à passer dans un message, vous pouvez les représenter avec `:arg1`, `:arg2`, etc. Par exemple, si vous avez une règle `min` avec un paramètre `9MB` ( `data-qv-rules="min:92"`), vous pouvez utiliser le message suivant :

```
La taille doit dépasser :arg0.
```

Le résultat serait :

```
La taille doit dépasser 9MB.
```

Si vous avez plusieurs valeurs possibles pour une règle, vous pouvez utiliser `...arg` pour afficher la liste des paramètres. Par exemple, si vous avez une règle `in` avec les paramètres `active`, `inactive`, `etc.` ( `data-qv-rules="in:active,inactive"`), vous pouvez utiliser le message suivant :

```
La valeur du champ doit être l'une des valeurs suivantes : ...arg.
```

Le résultat serait :

```
La valeur du champ doit être l'une des valeurs suivantes : active, inactive, etc.
```

En utilisant ces personnalisations pour les messages d'erreur, vous pouvez rendre les validations Quickv plus adaptées à vos besoins spécifiques de traduction et de personnalisation.