---
sidebar_position: 2
---

# Installation   
> **Note:** Cette documentation concerne la version de développement de Quickv 2.0.

Bienvenue dans la documentation de Quickv ! Cette bibliothèque offre de puissantes fonctionnalités de validation pour valider les saisies des utilisateurs dans les formulaires web. Que vous ayez besoin de valider une seule saisie, un formulaire entier ou plusieurs formulaires sur votre site web, Quickv a tout ce qu'il vous faut.

## Prise en main

Pour utiliser Quickv, suivez ces étapes :

1. <strong><a target="_blank" href="https://quick-v.github.io/documentation/quickv.2-alpha.js" download>Téléchargez</a></strong>  la bibliothèque Quickv depuis <a target="_blank" href="https://quick-v.github.io/documentation/quickv.2-alpha.js" download>ici</a>.
2. Incluez la bibliothèque Quickv dans votre page web.
3. Choisissez la méthode de validation qui convient le mieux à vos besoins :

- **Validation d'une seule saisie :** Utilisez la classe `QvInput` pour valider une seule saisie.
- **Validation d'un formulaire entier :** Utilisez la classe `QvForm` pour valider un formulaire entier.
- **Validation globale :** Utilisez la classe `Quickv` pour valider tous les formulaires de votre site web.

Consultez les sections respectives ci-dessous pour des instructions détaillées sur l'utilisation et des exemples.

## Validation d'une seule saisie

Pour valider une seule saisie, vous pouvez utiliser la classe `QvInput`. Suivez ces étapes :

1. Ajoutez l'élément input dans votre code HTML avec les attributs requis, tels que `data-qv-rules` pour définir les règles de validation et `data-qv-feedback` pour afficher les retours de validation.
2. Créez une nouvelle instance de `QvInput` en fournissant le sélecteur CSS ou l'ID de l'élément input.
3. Appelez la méthode `init()` sur l'instance de `QvInput` pour initialiser la validation.

Voici un exemple :

```html
<input type="email" id="my-input" name="email" data-qv-rules="required|email" />
<div data-qv-feedback="email"></div>
```

```javascript
const qvInput = new QvInput("#my-input");
qvInput.init();
```

Pour plus d'informations et d'options de personnalisation, consultez la [documentation de QvInput](/docs/validation/qv-input).

## Validation d'un formulaire entier

Si vous souhaitez valider un formulaire entier, vous pouvez utiliser la classe `QvForm`. Suivez ces étapes :

1. Ajoutez l'élément form dans votre code HTML avec les attributs requis, tels que `data-qv-rules` pour définir les règles de validation, `data-qv-messages` pour spécifier les messages d'erreur et `data-qv-feedback` pour afficher les retours de validation.
2. Créez une nouvelle instance de `QvForm` en fournissant le sélecteur CSS ou l'ID de l'élément form.
3. Appelez la méthode `init()` sur l'instance de `QvForm` pour initialiser la validation.

Voici un exemple :

```html
<form id="my-form">
  <!-- Champs du formulaire et attributs de validation -->
  <button data-qv-submit>Valider</button>
</form>
```

```javascript
const qvForm =

 new QvForm("#my-form");
qvForm.init();
```

Pour plus d'informations et d'options de personnalisation, consultez la [documentation de QvForm](#).

## Validation globale

Pour valider tous les formulaires de votre site web, vous pouvez utiliser la classe `Quickv`. Cette classe applique automatiquement une instance de `QvForm` à chaque formulaire de votre site.

Voici un exemple :

```html
<!-- Plusieurs formulaires avec des attributs de validation -->
<script>
  const quickv = new Quickv();
  quickv.init();
</script>
```

Veuillez noter que la méthode de validation globale peut ne pas fonctionner correctement avec certains frameworks comme Angular ou React. Dans de tels cas, il est recommandé d'utiliser les méthodes de validation d'une seule saisie ou d'un formulaire entier.