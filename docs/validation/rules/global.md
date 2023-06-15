 
# Géneral
 
## Règle `required`

La règle `required` permet de vérifier si une saisie est obligatoire.

### Utilisation

```html
<input data-qv-rules="required" />
```

### Description

Cette règle vérifie si la saisie n'est pas vide. Si la valeur saisie est vide, la règle retourne `false`, indiquant que la validation a échoué.

### Exemple

```html
<input data-qv-rules="required" />
```

Dans cet exemple, la règle `required` est appliquée à un champ de saisie. Elle vérifie si une valeur a été saisie dans le champ. Si le champ est vide, la règle retourne `false`, indiquant que la validation a échoué.

---

## Règle `nullable`

La règle `nullable` permet d'indiquer qu'une saisie peut être nulle (non obligatoire).

### Utilisation

```html
<input data-qv-rules="nullable" />
```

### Description

Cette règle ne fait aucune vérification spécifique et retourne toujours `true`. Elle est utilisée pour indiquer qu'une saisie n'est pas obligatoire, c'est-à-dire qu'elle peut être laissée vide.

### Exemple

```html
<input data-qv-rules="nullable" />
```

Dans cet exemple, la règle `nullable` est appliquée à un champ de saisie. Elle indique que la saisie dans ce champ n'est pas obligatoire. La validation sera considérée comme réussie, que le champ soit vide ou non.

---

## Règle `in`

La règle `in` permet de vérifier si une saisie fait partie d'une liste de valeurs spécifiée.

### Utilisation

```html
<input data-qv-rules="in:active,inactive" />
```

### Description

Cette règle vérifie si la valeur saisie fait partie de la liste des valeurs spécifiées. Les valeurs doivent être séparées par une virgule.

### Exemple

```html
<input data-qv-rules="in:active,inactive" />
```

Dans cet exemple, la règle `inInput` est appliquée à un champ de saisie. Elle vérifie si la valeur saisie est soit "active" soit "inactive". Si la valeur saisie ne fait pas partie de cette liste, la règle retourne `false`, indiquant que la validation a échoué.

---

## Règle `size`

La règle `size` permet de vérifier si une saisie respecte une taille maximale spécifiée.

### Utilisation

```html
<input type="text" data-qv-rules="size:6" />
```
ou

```html
<input type="file" data-qv-rules="size:6MB" />
```
### Description

Cette règle vérifie si la saisie respecte la taille maximale spécifiée. La règle est appliquée différemment en fonction du type de saisie :

- Si la valeur saisie est un fichier, la règle vérifie la taille maximale du fichier.
- Si la valeur saisie n'est pas un fichier, la règle vérifie le nombre de caractères dans la saisie.

### Exemple

```html
<input type="text" data-qv-rules="size:6" />
```

Dans cet exemple, la règle `size` est appliquée à un champ de saisie. Elle vérifie si la taille de la saisie est  égale à 6 caractères. Si la taille

 dépasse 6 caractères ou moins, la règle retourne `false`, indiquant que la validation a échoué.

---

## Règle `boolean`

La règle `boolean` permet de vérifier si une saisie est une valeur booléenne.

### Utilisation

```html
<input data-qv-rules="boolean" />
```

### Description

Cette règle vérifie si la saisie correspond à une valeur booléenne. Les valeurs acceptées sont : "true", "false", "0", "1", "yes" et "no" (les lettres peuvent être en majuscules ou en minuscules).

### Exemple

```html
<input data-qv-rules="boolean" />
```

Dans cet exemple, la règle `isBoolean` est appliquée à un champ de saisie. Elle vérifie si la valeur saisie correspond à une valeur booléenne. Si la valeur saisie n'est pas une valeur booléenne valide, la règle retourne `false`, indiquant que la validation a échoué.

---

## Règle `between`

La règle `between` permet de vérifier si une saisie est comprise entre deux valeurs spécifiées.

### Utilisation

```html
<!--valide number-->
<input type="number" data-qv-rules="between:6,7" />

<!--valide string-->
<input type="text" data-qv-rules="between:6,7" />

<!--valide date-->
<input type="date-local" data-qv-rules="between:01-01-2021,now" />

<!--valide file size-->
<input type="file" data-qv-rules="between:2MB,3MB" />
```

### Description

Cette règle permet de valider différents types de données en spécifiant une plage de valeurs. Les plages de valeurs possibles dépendent du type de données :

- Pour les nombres, la règle vérifie si la valeur saisie est comprise entre les valeurs minimale et maximale spécifiées.
- Pour les chaînes de caractères, la règle vérifie si la longueur de la chaîne est comprise entre les valeurs minimale et maximale spécifiées.
- Pour les dates, la règle vérifie si la date saisie est comprise entre les dates minimale et maximale spécifiées.
- Pour les fichiers, la règle vérifie si la taille du fichier est comprise entre les tailles minimale et maximale spécifiées.

### Exemple

```html
<!--valide number-->
<input type="number" data-qv-rules="between:6,7" />

<!--valide string-->
<input type="text" data-qv-rules="between:6,7" />

<!--valide date-->
<input type="date-local" data-qv-rules="between:01-01-2021,now" />

<!--valide file size-->
<input type="file" data-qv-rules="between:2MB,3MB" />
```

Dans ces exemples, la règle `between` est appliquée à différents types de champs de saisie. Elle vérifie si la valeur saisie respecte les plages de valeurs spécifiées. Si la valeur saisie ne respecte pas la plage de valeurs, la règle retourne `false`, indiquant que la validation a échoué.

---

## Règle `regex`

La règle `regex` permet de vérifier si une saisie correspond à une expression régulière spécifiée.

### Utilisation

```html
<input data-qv-rules

="regex:^[A-Z]+$" />
```

### Description

Cette règle vérifie si la valeur saisie correspond à l'expression régulière spécifiée. L'expression régulière est définie en utilisant la syntaxe standard des expressions régulières sans les caractères `/` au début e la fin .

### Exemple

```html
<input data-qv-rules="regex:^[A-Z]+$" />
```

Dans cet exemple, la règle `regex` est appliquée à un champ de saisie. Elle vérifie si la valeur saisie est une suite de lettres majuscules. Si la valeur saisie ne correspond pas à l'expression régulière, la règle retourne `false`, indiquant que la validation a échoué.

#### Note
La règle '**regex**' dans Quickv utilise normalement le symbole '**|**' comme séparateur pour spécifier plusieurs expressions régulières. Cependant, cela peut poser problème si le symbole '**|**' est présent dans votre expression régulière. Pour résoudre ce problème, Quickv propose l'utilisation d'un caractère spécial '`&pip;`' comme substitut au symbole '**|**'.

Ainsi, au lieu d'écrire votre règle 'regex' de cette manière :

```html
<input data-qv-rules="regex:^abc|def$" />
```

Vous pouvez utiliser le caractère '**&pip;**' à la place du symbole '**|**', comme ceci :

```html
<input data-qv-rules="regex:^abc&pip;def$" />
```

De cette manière, Quickv reconnaîtra que vous souhaitez utiliser le symbole '|' dans votre expression régulière sans l'interpréter comme un séparateur de règles.

Assurez-vous de suivre cette convention lors de l'utilisation de la règle 'regex' dans Quickv pour éviter toute confusion ou erreur liée au symbole '|'.
---

## Règle `only`

La règle `only` permet de vérifier si une saisie correspond à un type spécifique.

### Utilisation

```html
<input data-qv-rules="only:letter" />
```

### Description

Cette règle permet de valider une saisie en fonction de son type. Deux types sont actuellement supportés : "string" (chaîne de caractères) et "number" (nombre). La règle vérifie si la valeur saisie correspond au type spécifié.

### Exemple

```html
<input data-qv-rules="only:letter" />
```

Dans cet exemple, la règle `only` est appliquée à un champ de saisie. Elle vérifie si la valeur saisie est une chaîne de caractères ne contenant que des lettres. Si la valeur saisie ne correspond pas au type spécifié, la règle retourne `false`, indiquant que la validation a échoué.

---
 