# Validation des nombres

Ces règles de validation sont spécifiquement conçues pour les nombres. Elles vous permettent de vérifier si une valeur numérique satisfait certaines conditions. Voici une description détaillée de chaque règle et des exemples d'utilisation pratique :

## Règle `min`

La règle `min` permet de vérifier si un nombre est supérieur ou égal à une valeur minimale spécifiée.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'un nombre saisi par l'utilisateur est supérieur ou égal à une valeur minimale requise.

**Exemple :**
```html
<input qv-rules="min:2"/>
```

Cette règle vérifie si la valeur de l'entrée est d'au moins 2. Si la valeur est un nombre, elle effectue une comparaison numérique. Si la valeur est une chaîne de caractères, elle vérifie si le nombre de caractères est supérieur ou égal à 2.

## Règle `max`

La règle `max` permet de vérifier si un nombre est inférieur ou égal à une valeur maximale spécifiée.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'un nombre saisi par l'utilisateur est inférieur ou égal à une valeur maximale requise.

**Exemple :**
```html
<input qv-rules="max:20"/>
```

Cette règle vérifie si la valeur de l'entrée est au plus 20. Si la valeur est un nombre, elle effectue une comparaison numérique. Si la valeur est une chaîne de caractères, elle vérifie si le nombre de caractères est inférieur ou égal à 20.

## Règle `integer`

La règle `integer` permet de vérifier si un nombre est un nombre entier.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'un nombre saisi par l'utilisateur est un nombre entier.

**Exemple :**
```html
<input qv-rules="integer"/>
```

Cette règle vérifie si la valeur de l'entrée est un nombre entier. Elle renvoie `true` si la valeur est un nombre entier, et `false` sinon.

## Règle `number`

La règle `number` permet de vérifier si une valeur est un nombre.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'une valeur saisie par l'utilisateur est un nombre.

**Exemple :**
```html
<input qv-rules="number"/>
```

Cette règle vérifie si la valeur de l'entrée est un nombre. Elle renvoie `true` si la valeur est un nombre, et `false` sinon.

## Règle `modulo`

La règle `modulo` ou encore son alias `mod` permet de vérifier si un nombre est un multiple ou divisible par un autre nombre.
 

**Utilisation :** Vous pouvez utiliser cette règle pour vérifier si un nombre est un multiple ou divisible par un autre nombre.

**Exemple :**
```html
<input qv-rules="modulo:2"/>
<input qv-rules="mod:2"/>
```

Cette règle vérifie si la valeur de l'entrée est un nombre, et si ce nombre est un multiple ou divisible par 2. Elle renvoie `true` si la condition est satisfaite, et `false` sinon.

---

Si vous souhaitez contribuer en ajoutant votre propre règle de validation, vous pouvez visiter [ce lien](/docs/contribution).