---
sidebar_position: 10
title: Développement
---
> **Note:**  Quickv 2.0 (Expérimental)

## Structure du répertoire
Lorsque vous clonez Quickv depuis GitHub, voici un aperçu de la structure du code, mettant en évidence les dossiers et fichiers importants documentés.
Le répertoire `src` contient l'ensemble du code principal de Quickv.

### Le répertoire **Contracts**

Le répertoire `contracts` contient les interfaces et les types utilisés dans Quickv. Vous pouvez les consulter pour voir les types ajoutés.

### Le répertoire **Locale**

Le répertoire `locale` contient les fichiers d'internationalisation, y compris les langues prises en charge par défaut par Quickv. Le fichier `qv-local.ts` exporte une classe qui sert de façade pour gérer l'internationalisation, telle que la traduction.

#### Le répertoire **Lang**

Le répertoire `lang` contient les fichiers de langue pour l'anglais.

### Le répertoire **Messages**

Le répertoire `messages` contient les fichiers de génération de messages basés sur une règle donnée. La classe principale pour cette tâche est la classe `QvMessages`, exportée à partir du fichier `qv-messages.ts`.

### Le répertoire **Rules**

Le répertoire `rules` contient les règles de validation dans Quickv. Il inclut des fichiers regroupant les règles de validation dans différentes catégories :
- **global.ts** : Règles générales telles que `in`, `between`, etc.
- **date.ts** : Règles de validation pour les dates.
- **file.ts** : Règles de validation pour les fichiers.
- **number.ts** : Règles de validation pour les nombres.
- **string.ts** : Règles de validation pour les chaînes de caractères.
- **phone.ts** : Règles de validation pour les numéros de téléphone.

#### Le répertoire **Form**

Le répertoire `form` contient des règles de validation spécifiques à un formulaire dans son ensemble, plutôt qu'à des saisies individuelles. Par exemple, la règle `same` ne peut être utilisée que dans un formulaire car elle implique la comparaison de deux champs.

#### Le répertoire **Phone**

Le répertoire `phone` contient des règles de validation pour les numéros de téléphone. La logique de validation se trouve dans la classe `CountryPhoneValidator`, qui inclut des méthodes de validation pour chaque pays pris en charge. Elle est exportée à partir du fichier `country-phone-validator.ts`.

### Le répertoire **Utils**

Le répertoire `utils` contient des fichiers utiles pour Quickv, tels que des fonctions d'aide.

### Le répertoire **Validation**

Le répertoire `validation` contient la logique de validation dans Quickv. Il comprend plusieurs classes responsables de la validation :
- `QvInput` : Cette classe, exportée à partir du fichier `qv-input.ts`, gère la validation des champs individuels.
- `QvForm` : Cette classe, exportée à partir du fichier `qv-form.ts`, gère la validation des formulaires individuels en fonction des saisies dans le formulaire.
- `Quickv` : Cette classe, exportée à partir du fichier `quickv.ts`, gère la validation de tous les formulaires de votre page.
- `QValidation` : Cette classe, exportée à partir du fichier `qv-validation.ts`,

 exécute les règles de validation pour un ensemble donné de champs de formulaire et indique si le formulaire est valide ou non.

## Le répertoire **Types**

Le répertoire `types` contient les fichiers de déclaration TypeScript pour le projet Quickv.

## Code source

Le code source de la bibliothèque Quickv est disponible sur [GitHub](https://github.com/quick-v/quickv). Il est gratuit, open source et publié sous notre [licence](/docs/license).

## Contribution

Nous serions ravis de recevoir vos contributions au projet Quickv de quelque manière que ce soit. Lisez nos [directives de contribution](/docs/contribution) pour plus d'informations.