---
sidebar_position: 7
title: Messages
---
> **Note:**  Quickv 2.0 (Expérimental)

# Messages

Lorsque Quickv souhaite afficher des messages d'erreur, il détermine d'abord la langue dans laquelle ces messages doivent être affichés. Voici comment cela fonctionne :

### Via HTML

Tout d'abord, Quickv vérifie la langue définie sur l'attribut `lang` de l'élément racine `html` :
```html
<html lang="en"></html>
```

Si Quickv prend en charge la langue définie dans l'attribut `lang`, ou si vous avez ajouté vos propres langues, les messages d'erreur seront affichés dans cette langue.

Si, pour une raison quelconque, vous ne souhaitez pas utiliser la langue définie dans l'attribut `lang`, vous pouvez utiliser l'attribut `data-qv-lang` sur l'élément racine pour spécifier la langue dans laquelle les messages doivent être affichés.

```html
<html data-qv-lang="en"></html>
```

L'attribut `data-qv-lang` peut également être utilisé sur un élément de formulaire pour spécifier la langue pour ce formulaire spécifique.
```html
<form data-qv-lang="en"></form>
```
Cela signifie que les messages d'erreur seront spécifiques à chaque formulaire.

### Via JavaScript

Quickv offre une autre façon de spécifier la langue des messages d'erreur en utilisant JavaScript :

```javascript
QvLocal.local('es');
```
Cela indique à Quickv d'afficher les messages en espagnol. Cette méthode remplace toutes les autres méthodes d'attribution de la langue pour l'affichage des messages d'erreur.

**Note :**

Toutes les méthodes d'attribution de la langue doivent être utilisées avant d'appeler la méthode `init()`.
Cette méthode doit être appelée avant les méthodes d'initialisation, les constructeurs ou la méthode `init()`.

### Marqueurs de position

Supposons que vous ayez une règle de validation supplémentaire pour le champ "Email" : il doit avoir une longueur minimale de 8 caractères. Vous souhaitez spécifier un message d'erreur spécifique pour cette règle.

Vous pouvez utiliser des marqueurs de position pour indiquer les messages d'erreur dans n'importe quel ordre. Voici comment vous pouvez le faire :

```html
<input type="email" name="email" data-qv-messages="{0}Veuillez saisir une adresse e-mail valide|{1}L'e-mail doit comporter au moins 8 caractères">
```

Avec cette configuration, Quickv affichera le premier message d'erreur si l'adresse e-mail est invalide, et le deuxième message d'erreur si la longueur minimale de 8 caractères n'est pas respectée.