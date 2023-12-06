---
sidebar_position: 7
title: Les événements
---
> **Note:**  Quickv 2.0 (Expérimental)

# Événements

Dans Quickv, vous avez la possibilité d'écouter différents événements JavaScript pour déclencher la validation de vos formulaires, sans avoir à écrire de code JavaScript supplémentaire. Cela vous offre une flexibilité accrue et facilite la gestion des validations de formulaire.

## Déclencher la validation avec les événements par défaut

Par défaut, Quickv utilise les événements `input`, `blur` et `change` pour déclencher la validation des champs de formulaire. Cela signifie que chaque fois que l'utilisateur saisit, quitte ou modifie une valeur dans un champ de formulaire, la validation sera automatiquement déclenchée.

Par exemple, si vous souhaitez déclencher la validation lorsqu'un élément est survolé par le curseur de la souris, vous pouvez utiliser l'attribut `data-qv-events` de Quickv et spécifier l'événement `mouseenter` de la manière suivante :

```html
<input data-qv-events="mouseenter" />
```

L'attribut `data-qv-events` peut également accepter une liste d'arguments séparés par le symbole `|` (pipe). Par exemple, si vous souhaitez déclencher la validation lors des événements `mouseenter`, `blur` et `my-custom-event`, vous pouvez utiliser la syntaxe suivante :

```html
<input data-qv-events="mouseenter|blur|my-custom-event" />
```

## Événements Quickv à écouter

Quickv propose également des événements spécifiques que vous pouvez écouter pour réagir à des actions spécifiques liées à la validation des formulaires. Voici quelques-uns de ces événements :

### Événements liés aux champs de saisie (Input)

- `qv.input.passes` : Cet événement est déclenché lorsqu'un champ de saisie passe avec succès la validation.
- `qv.input.fails` : Cet événement est déclenché lorsqu'un champ de saisie échoue à la validation.

### Événements liés au formulaire (Form)

- `qv.form.init` : Cet événement est déclenché lorsque le formulaire est initialisé, c'est-à-dire lorsqu'il est prêt à être validé.
- `qv.form.passes` : Cet événement est déclenché lorsque tous les champs du formulaire passent avec succès la validation.
- `qv.form.fails` : Cet événement est déclenché lorsque au moins un champ du formulaire échoue à la validation.
- `qv.form.update` : Cet événement est utilisé pour indiquer à Quickv de mettre à jour la validation avec les changements du DOM et les nouvelles règles. Cela peut être utile lorsque vous modifiez dynamiquement les éléments du formulaire ou que vous ajoutez de nouvelles règles de validation.

## Déclencher les événements Quickv

Outre l'écoute des événements, vous pouvez également déclencher certains événements Quickv manuellement pour effectuer des actions spécifiques. Voici un événement important à connaître :

- `qv.form.update` : Cet événement doit être déclenché lorsque vous souhaitez indiquer à Quickv de mettre à jour la validation en fonction des changements du DOM ou des nouvelles règles ajoutées.

En utilisant ces événements et en les écoutant ou en les

 déclenchant au bon moment, vous pouvez personnaliser davantage le comportement de la validation des formulaires avec Quickv.