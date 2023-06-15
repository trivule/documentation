---
sidebar_position: 6
---
 
# Contribution
 
Nous accueillons les contributions de la communauté pour améliorer `Quickv`. Si vous rencontrez des problèmes, avez des idées d'amélioration ou souhaitez apporter des modifications au code, veuillez suivre les étapes ci-dessous pour contribuer.

### Ouvrir des problèmes

Si vous rencontrez des problèmes ou avez des idées d'amélioration, n'hésitez pas à ouvrir un problème sur notre dépôt GitHub. Assurez-vous de fournir autant de détails que possible, y compris des captures d'écran ou du code d'exemple, pour nous aider à comprendre et résoudre le problème.

### Soumettre des demandes de tirage (Pull Requests)

Si vous souhaitez apporter des modifications au code, nous vous encourageons à proposer une demande de tirage (Pull Request). Veuillez suivre les étapes ci-dessous :

1. Fork le dépôt et clonez-le localement sur votre machine.
2. Basculez vers la branche `2.0.0` sur laquelle vous souhaitez travailler.
3. Installez les dépendances du projet localement en exécutant la commande suivante :
```bash
   npm install
```
4. Effectuez les modifications nécessaires et testez-les en profondeur. Par exemple, vous pouvez ajouter une nouvelle règle (voir ci-dessous pour plus de détails).
5. Validez vos modifications en utilisant la commande `git commit -m "Description des modifications"`.
6. Transférez vos modifications vers votre dépôt forké.
7. Ouvrez une demande de tirage (Pull Request) sur notre dépôt GitHub et fournissez une description détaillée des modifications que vous avez apportées.

Nous examinerons votre demande dès que possible et vous fournirons un retour d'information. Assurez-vous de répondre à tous les commentaires et de mettre à jour votre demande de tirage en conséquence.

### Participer aux discussions

Nous avons également des discussions en cours sur divers sujets liés au projet. Nous vous invitons à participer à ces discussions et à partager vos idées, suggestions ou commentaires. Votre perspective et vos connaissances peuvent aider à orienter le projet dans la bonne direction.

### Code de conduite

Nous vous demandons de respecter notre code de conduite lorsque vous participez au projet. Veuillez respecter les autres contributeurs et maintenir un environnement collaboratif et inclusif.

Nous sommes impatients de travailler avec vous et de faire avancer ce projet ensemble. Merci pour votre intérêt et votre engagement !

L'équipe de développement

---

## Ajouter une nouvelle règle à Quickv

### Étape 1

Une règle Quickv est simplement une fonction de rappel qui gère la validation en fonction de vos besoins et doit renvoyer une valeur booléenne. Elle doit implémenter l'interface `RuleCallBack` définie dans `./src/contracts/rule-callback.ts`.

En fonction du type de données que votre rappel validera, vous devez le classer dans l'un des fichiers suivants :
- `./src/rules` (global, number, phone, string, date, file, etc.)

Voici un exemple d'implémentation d'un rappel pour la règle `in` :

```ts
/**
 * Vérifie si l'entrée se trouve dans la liste spécifiée.
 *
 * @param input - L'entrée à vér

ifier.
 * @param params - La liste de valeurs à vérifier. Chaîne séparée par des virgules.
 * @returns `true` si l'entrée se trouve dans la liste, `false` sinon.
 */
export const inInput: RuleCallBack = (input, params) => {
  if (!params) {
    throwEmptyArgsException("in");
  }
  const list = splitParam(params as string);
  return list.includes(input);
};
```

Explication :
1. Le premier argument, `input`, correspond à la valeur actuelle du champ à valider. Il peut être de types tels que `string`, `Blob`, `File`, `number`, `null`, `boolean`, `undefined`, `FileList`.
2. Le deuxième argument, `params`, correspond aux arguments possibles. Les arguments sont des chaînes séparées par des virgules. Vous pouvez les récupérer individuellement en utilisant la fonction `splitParam`. 
Par exemple, si vous avez un champ HTML comme ceci :
```html 
<input data-qv-rules="in:actif, inactif, suspendu" />
```
Les valeurs après les deux-points (`:`) sont les paramètres. Dans ce cas, le deuxième argument serait une chaîne telle que `"actif, inactif, suspendu"`. Vous pouvez utiliser la fonction `splitParam(params ?? "")` pour obtenir un tableau de valeurs individuelles, par exemple, `['actif', 'inactif', 'suspendu']`.

3. Le reste du code représente la logique du rappel. Dans cet exemple, nous vérifions si la valeur actuelle du champ se trouve dans la liste spécifiée et renvoyons le résultat.

***Le rappel doit renvoyer une valeur booléenne.***

#### Convention de nommage

En général, il est recommandé de donner au rappel le même nom que la règle que vous souhaitez ajouter. Cependant, cela n'est pas obligatoire si cela pose des problèmes.

Dans cet exemple, le nom de règle est normalement `in`, mais nous avons dû utiliser `inInput` car le mot-clé `in` est réservé en JavaScript/TypeScript.

### Étape 2 : Tester le rappel

Une fois que vous avez écrit votre rappel, vous devez le tester pour vous assurer qu'il fonctionne comme prévu. Pour cela, vous pouvez utiliser l'outil de test Jest.

Selon le fichier dans lequel vous avez écrit votre rappel, vous devez vous rendre dans le fichier de test correspondant. Dans cet exemple, le fichier de test est `global.test.ts`.

Voici un exemple de test pour le rappel `inInput` :

```ts
describe("inInput rule callback", () => {
  it("should return true if the input is in the list", () => {
    const input = "active";
    const params = "active, inactive, suspended";
    const result = inInput(input, params);
    expect(result).toBe(true);
  });

  it("should return false if the input is not in the list", () => {
    const input = "pending";
    const params = "active, inactive, suspended";
    const result = inInput(input, params);
    expect(result).toBe(false);
  });

  it("should throw an error if params argument is empty", () => {
    const input = "active";
    const params = "";
    expect(() => inInput(input, params)).toThrow();
  });
});

```

Vous pouvez exécuter les tests en utilisant la commande suivante :

```bash
npm test
```

Une fois que vos tests sont réussis, vous pouvez passer à l'étape suivante.

### Étape 3 : Ajouter le rappel aux règles

Toutes les règles Quickv sont répertoriées dans le type `Rule`, qui se trouve dans le fichier `./src/contracts/rule.ts`. Vous devez ajouter votre règle à ce type pour qu'elle soit reconnue.

Voici un exemple d'ajout de la règle `in` :

```ts
/**
 * Liste des règles Quickv regroupées par type de règle
 */
export type Rule = "contains" | "in" | "startWithLetter" /*...*/;
```

Cela permet également l'autocomplétion dans votre éditeur de code, mais ce n'est pas le but principal d'ajouter la règle à ce type.

Si vous utilisez un outil compatible avec TypeScript, vous remarquerez peut-être une erreur dans le fichier `./src/validation/qv-bag.ts`. Ce fichier est l'endroit où les règles sont réellement ajoutées à Quickv. Tant qu'une règle n'est pas ajoutée à ce fichier, elle ne fera pas partie de Quickv.

Dans ce fichier, la classe `QvBag` est utilisée pour stocker les règles. Vous devez ajouter votre règle à l'attribut `rules` de cette classe, comme ceci :

```typescript
export class QvBag implements IQvBag {
  private static rules: RulesBag = { 
    in: inInput,
  };
}
```

### Étape 4 : Assigner un message

En général, votre règle est prête à être utilisée une fois que vous l'avez ajoutée. Cependant, vous devez également lui assigner un message. Sinon, un message par défaut sera utilisé.

Pour ce faire, vous devez vous rendre dans le dossier `./src/local/lang`. Vous y trouverez les deux langues par défaut prises en charge par Quickv (anglais et français). Vous devez ajouter les messages correspondant à votre règle dans ces fichiers.

Voici un exemple d'ajout de messages pour la règle `in` :

```ts
export const fr_messages: RulesMessages = {
  default: "Ce champ est invalide", 
  in: "Veuillez choisir une valeur correcte pour le champ :field",
};
```

Vous devez faire de même pour la langue anglaise.

Si vous avez suivi ces étapes correctement, vous pouvez tester votre règle en l'utilisant dans un formulaire HTML pour voir si tout fonctionne correctement.
Pour cela vous pouvez compiler le projet et avoir  le bundle à incluer dans votre projet

Pour créer les bundles, exécutez la commande suivante :
```bash
npm run build
```
Cette commande va générer les fichiers `index.mjs` et `index.umd.js` dans le dossier `./dist`. Le premier fichier est destiné à être utilisé en tant que module ES6, tandis que le second est adapté aux systèmes UMD.
Vous pouvez également utiliser la commande `npm run build:watch` pour compiler automatiquement les fichiers pendant que vous travaillez.

### Résumé des étapes :

#### Étape 1 : Écrire le rappel de règle

Voici un exemple de code pour écrire le rappel de règle `in` :

```typescript
import { RuleCallBack, splitParam, throwEmptyArgsException } from "../validation/quickv";

/**
 * Vérifie si la valeur d'entrée se trouve dans la liste spécifiée.
 * @param input - La valeur actuelle du champ à valider. Il peut être de types tels que `string`, `Blob`, `File`, `number`, `null`, `boolean`, `undefined`, `FileList`.
 * @param params - La liste de valeurs à vérifier. Chaîne séparée par des virgules.
 * @returns `true` si l'entrée

 se trouve dans la liste, `false` sinon.
 */
export const inInput: RuleCallBack = (input, params) => {
  if (!params) {
    throwEmptyArgsException("in");
  }
  const list = splitParam(params as string);
  return list.includes(input);
};
```

#### Étape 2 : Tester le rappel

Utilisez l'outil de test Jest pour tester le rappel.

#### Étape 3 : Ajouter le rappel aux règles

Ajoutez le rappel à la liste des règles Quickv dans le fichier `./src/contracts/rule.ts`.

#### Étape 4 : Assigner un message

Ajoutez le message correspondant à votre règle dans les fichiers de langue `./src/local/lang/en_messages.ts` et `./src/local/lang/fr_messages.ts`.

Une fois ces étapes terminées, vous pouvez utiliser votre nouvelle règle dans Quickv.