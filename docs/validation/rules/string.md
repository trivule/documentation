# Validation des chaînes de caractères

Ces règles sont spécifiquement conçues pour la validation des chaînes de caractères. Elles vous permettent de vérifier différents aspects d'une chaîne de caractères tels que la longueur, le format, etc. Voici une description détaillée de chaque règle et des exemples pratiques d'utilisation :

## Règle `email`

La règle `email` permet de valider une adresse e-mail.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'une adresse e-mail saisie par l'utilisateur est valide.

**Exemple :**
```html
<input data-qv-rules="email" />
<!-- Valide une adresse e-mail -->
```

Dans cet exemple, la règle `email` valide l'adresse e-mail saisie en vérifiant si elle correspond au format d'une adresse e-mail valide.

---

## Règle `minlength`

La règle `minlength` permet de valider la longueur minimale d'une chaîne de caractères.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'une chaîne de caractères saisie par l'utilisateur a une longueur minimale spécifiée.

**Exemple :**
```html
<input data-qv-rules="minlength:8" />
<!-- Valide une chaîne de caractères avec une longueur minimale de 8 -->
```

Dans cet exemple, la règle `minlength` valide la chaîne de caractères en vérifiant si sa longueur est supérieure ou égale à 8.

---

## Règle `maxlength`

La règle `maxlength` permet de valider la longueur maximale d'une chaîne de caractères.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'une chaîne de caractères saisie par l'utilisateur a une longueur maximale spécifiée.

**Exemple :**
```html
<input data-qv-rules="maxlength:8" />
<!-- Valide une chaîne de caractères avec une longueur maximale de 8 -->
```

Dans cet exemple, la règle `maxlength` valide la chaîne de caractères en vérifiant si sa longueur est inférieure ou égale à 8.

---

## Règle `url`

La règle `url` permet de valider une URL.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'une URL saisie par l'utilisateur est valide.

**Exemple :**
```html
<input data-qv-rules="url" />
<!-- Valide une URL -->
```

Dans cet exemple, la règle `url` valide l'URL saisie en vérifiant si elle correspond au format d'une URL valide.

---

## Règle `startWithUpper`

La règle `startWithUpper` permet de vérifier si une chaîne de caractères commence par une lettre majuscule.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'une chaîne de caractères saisie par l'utilisateur commence par une lettre majuscule.

**Exemple :**
```html
<input data-qv-rules="startWithUpper" />
<!-- Vérifie si une chaîne de caractères commence par une lettre majuscule -->
```

Dans cet exemple, la règle `startWithUpper` vérifie si la chaîne de caractères saisie commence par une lettre majuscule.

---

 ### Règle de validation : `lower`

Cette règle vérifie si les données saisies sont toutes en minuscules.

**Utilisation:**

Utilisez la règle `lower` lorsque vous souhaitez vous assurer qu'une chaîne d'entrée donnée ne comporte que des caractères minuscules.

**Exemple:**

Supposons que vous ayez un formulaire d'inscription qui requiert un nom d'utilisateur. Vous voulez vous assurer que le nom d'utilisateur doit être en minuscules. Vous pouvez appliquer la règle `lower` au champ de saisie pour le valider.

```html
<input data-qv-rules="lower" />
```

Cette règle garantit que la valeur saisie dans le champ de saisie est entièrement en minuscules. Si l'entrée contient des caractères majuscules, la validation échouera.

Dans cet exemple, la règle `lower` est utilisée pour valider le champ username dans un formulaire d'enregistrement. L'attribut `data-qv-rules` est fixé à `"lower"` pour appliquer la règle. Toute entrée ne respectant pas la règle (contenant des lettres majuscules) échouera la validation.

Veuillez noter que certaines règles peuvent avoir des alias, assurez-vous donc d'utiliser le nom de la règle correcte lors de l'application de la validation.

---

Vous pouvez répéter les sections ci-dessus pour chaque règle de validation de votre base de code, en fournissant des explications et des exemples clairs pour chaque règle. N'oubliez pas d'adapter le contenu pour refléter les détails spécifiques de chaque règle et de son utilisation.

### Règle de validation : stringBetween 

Cette règle vérifie si la longueur d'une chaîne donnée se situe entre les valeurs minimale et maximale spécifiées.

**Utilisation :**

Utilisez la règle `stringBetween` lorsque vous souhaitez vous assurer que la longueur d'une chaîne se trouve dans une plage spécifique.

**Exemple :**

Supposons que vous ayez un formulaire qui requiert un champ de mot de passe et que vous souhaitez imposer une longueur minimale et maximale pour ce mot de passe. Vous pouvez appliquer la règle `stringBetween` au champ de saisie du mot de passe pour le valider.

```html
<input data-qv-rules="stringBetween:8,20" />
```

Cela garantira que le mot de passe saisi dans le champ a une longueur comprise entre 8 et 20 caractères (inclus). Si la longueur de l'entrée est inférieure à 8 ou supérieure à 20, la validation échouera.

Dans cet exemple, la règle `stringBetween` est utilisée pour valider le champ de mot de passe dans un formulaire. L'attribut `data-qv-rules` est défini sur `"stringBetween:8,20"` pour appliquer la règle. Toute saisie qui enfreint la règle (une longueur hors de la plage spécifiée) échouera à la validation.
 
---

Vous pouvez répéter les sections ci-dessus pour chaque règle de validation de votre code, en fournissant des explications et des exemples clairs pour chaque règle. N'oubliez pas d'adapter le contenu pour refléter les détails spécifiques de chaque règle et de son utilisation.