
# Form validation
 Par **form validation**, il faut enttendre la validation d'un formulaire html dans son entièrété. 
 En principe, `**form validation**`  est développé en se basant sur [Input validation](/docs/validation/qv-input). Elle regroupe par exemple la désactivation du bouton de submission, la prévention de la propagation  de l'événement `submit` d'un formulaire
## QvForm
## Personnalisation avancée

### Interaction avec les formulaires lors de la validation

Considérons le formulaire suivant
```html
<form>
  <div>
    <label for="">Email</label>
    <input type="text" data-qv-rules="required|email|maxlength:32" name="email" />
    <div data-qv-feedback="email"></div>
  </div>
 
  <div>
    <label for="">Message</label>
    <textarea
      data-qv-rules="required|between:2,250|startWithUpper|endWith:."
      name="message"
    ></textarea>
    <div data-qv-feedback="message"></div>
  </div>
  <p>
    <button type="submit" value="Submit" data-qv-submit>
      Envoyer
    </button>
  </p>
</form>
```
Initialisons-le:

```js
const qvForm = new QvForm("form");
qvForm.init();
```
### `onInit` - Avant la validation

Lors de l'utilisation de Quickv pour la validation en direct d'un formulaire, il peut arriver que des actions supplémentaires soient nécessaires après l'initialisation du formulaire. Par exemple, des configurations spécifiques ou des manipulations d'objets peuvent être requises pour préparer le formulaire à une interaction plus avancée.

La méthode `onInit` résout ce problème en fournissant un moyen propre d'attacher des gestionnaires d'événements qui seront déclenchés spécifiquement après l'initialisation. Cela permet d'effectuer des actions personnalisées ou de configurer des fonctionnalités supplémentaires en réaction à l'état prêt du formulaire.

La méthode `onInit()` doit être appelée avant la méthode  `init()`

#### Exemple d'utilisation

```typescript
qvForm.onInit((initializedForm: QvForm) => {
  console.log("Le formulaire est prêt pour des actions supplémentaires :", initializedForm);
});
```


#### Cas d'Utilisation Typiques

- **Configuration Personnalisée :** Effectuer des configurations spécifiques au formulaire après son initialisation.
  
- **Actions Post-Initialisation :** Exécuter des actions qui dépendent de la pleine préparation du formulaire.

*Note : Il est recommandé d'utiliser judicieusement `onInit` pour des tâches non liées à la validation, car l'initialisation complète du formulaire peut ne pas garantir la fin des validations asynchrones ou d'autres tâches différées.*

### `onFails` & `onPasses` - Réaction Dynamique à la Validation

Les méthodes `onFails` et `onPasses` de la classe `QvForm` offrent une flexibilité totale pour réagir de manière dynamique aux succès et aux échecs des validations des champs de formulaire.

#### `onFails` - Validation Échouée

La méthode `onFails` permet de définir un gestionnaire d'événements qui se déclenchera dès qu'un champ du formulaire échoue à la validation. Exemple :

```javascript
qvForm.onFails((qvFormInstance) => {
  // Code à exécuter en cas d'échec de validation
  console.log("Validation échouée", qvFormInstance);
  // Personnalisez ici les réactions aux échecs de validation
});
```

Personnalisez le code à exécuter selon vos besoins
#### `onPasses` - Validation Réussie

La méthode `onPasses` fonctionne de manière similaire, déclenchant un gestionnaire d'événements lorsque le formulaire réussit à la validation. Exemple :

```javascript
qvForm.onPasses((qvFormInstance) => {
  // Code à exécuter en cas de validation réussie
  console.log("Validation réussie");
  // Personnalisez ici les réactions aux succès de validation
});
```

Utilisez cette méthode pour effectuer des actions spécifiques en cas de validation réussie, que ce soit pour valider d'autres champs ou activer un bouton de soumission.

En tirant parti de `onFails` et `onPasses`, vous pouvez adapter votre application aux résultats de validation des champs du formulaire, ajoutant ainsi une logique personnalisée et réactive.


### Émission d'événements personnalisés

### `emit` - Personnalisation des Événements

La méthode `emit` de la classe `QvForm` permet d'émettre des événements personnalisés vers le formulaire associé à l'instance de `QvForm`. Cette fonctionnalité avancée facilite la communication et l'interaction au sein de votre application.

#### Exemple d'Utilisation

```javascript
const userData = { name: "John Doe", age: 25 };

// Émission d'un événement personnalisé "user-updated" avec des données supplémentaires
qvForm.emit("user-updated", userData);
```

Dans cet exemple, un événement personnalisé nommé "user-updated" est émis vers le formulaire, transportant les données utilisateur supplémentaires. Cela offre une flexibilité pour créer des scénarios où des parties spécifiques de votre application peuvent réagir à ces événements sur mesure.

#### Utilisations Possibles

- **Communication Avancée :** Émettez des événements lorsque la valeur d'un élément `input` change et écoutez ces événements pour déclencher des actions spécifiques dans différentes parties de votre application.

- **Personnalisation d'Interactions :** Adaptez le comportement de votre application en émettant des événements personnalisés en réponse à des conditions spécifiques ou des états du formulaire.

- **Intégration avec d'Autres Composants :** Facilitez l'intégration avec d'autres composants de votre application en émettant des événements contenant des informations cruciales.

L'utilisation judicieuse de la méthode `emit` peut considérablement enrichir l'interactivité et la modularité de votre application en permettant à différentes parties de réagir de manière personnalisée aux événements émis par la classe `QvForm`.


### Attachement d'écouteurs d'événements

La méthode `on` de la classe `QvForm` ouvre un monde d'opportunités en vous permettant d'attacher des écouteurs d'événements, que ce soient des événements natifs ou personnalisés, à votre formulaire. Découvrez comment personnaliser votre expérience utilisateur en répondant de manière dynamique à des interactions spécifiques.

#### Exemple d'Utilisation

```javascript
// Attache un écouteur d'événements pour l'événement "change"
qvForm.on("change", (event) => {
  // Code à exécuter lorsque l'événement "change" se produit dans le formulaire
  console.log("Changement détecté !");
});
```

Dans cet exemple, un écouteur d'événements est ajouté au formulaire pour l'événement "change". Lorsque cet événement survient, le code à l'intérieur de la fonction de rappel est exécuté. Vous pouvez écouter d'autres événements tels que "submit", "click", ou même vos propres événements personnalisés.

#### Utilisations Possibles

- **Réactivité aux Interactions Utilisateur :** Surveillez les événements de changement (`change`), de clic (`click`), ou de soumission (`submit`) pour déclencher des actions spécifiques.

- **Validation Personnalisée :** Attachez un écouteur pour réagir à des événements personnalisés émis par la classe `QvForm` et effectuez des validations ou des actions spécifiques en conséquence.

- **Intégration avec d'Autres Composants :** Créez une interaction harmonieuse avec d'autres parties de votre application en écoutant des événements spécifiques émis par d'autres composants.

En incorporant habilement la méthode `on`, vous pouvez personnaliser l'expérience utilisateur et ajouter une réactivité intelligente à votre formulaire, faisant ainsi de votre application une expérience interactive et dynamique.

### Statut de validation du formulaire
 
La méthode `passes` de la classe `QvForm` permet de vérifier si le formulaire est valide ou non. 

#### Exemple d'Utilisation

```javascript
// Vérifie si le formulaire est valide
const isValid = qvForm.passes();

if (isValid) {
  // Poursuivre avec la soumission du formulaire ou gérer un formulaire valide
} else {
  // Afficher des messages d'erreur ou gérer un formulaire invalide
}
```

Dans cet exemple, la méthode `passes` est appelée pour déterminer si le formulaire est valide. Selon le résultat, vous pouvez décider de soumettre le formulaire, afficher des messages d'erreur à l'utilisateur ou effectuer d'autres actions personnalisées.

#### Utilisations Possibles

- **Soumission Conditionnelle :** Utilisez `passes` avant de déclencher la soumission du formulaire pour vous assurer que toutes les validations sont passées avec succès.

- **Réaction Dynamique :** Personnalisez le comportement de votre application en fonction de l'état de validation actuel du formulaire.

- **Logique de Gestion d'Erreurs :** Affichez des messages d'erreur ciblés ou effectuez des actions spécifiques en cas d'échec de la validation.

La méthode `passes` fait appel à la méthode interne `isValid` qui vérifie chaque champ selon les règles de validation définies. En l'intégrant dans votre logique, vous pouvez créer une expérience utilisateur robuste et réactive. Prenez le contrôle de la validation de votre formulaire avec la méthode `passes` de `QvForm`.


### `onValidate()` - Réagissez à la Validation du Formulaire

La méthode `onValidate()` de la classe `QvForm` vous permet de réagir à l'événement de validation du formulaire. Utilisez cette fonctionnalité pour exécuter des actions spécifiques lorsqu'une validation complète du formulaire est effectuée.

#### Exemple d'Utilisation

```typescript 
qvForm.onValidate((qvForm) => {
  console.log("Validation du formulaire effectuée", qvForm);
});
```
 
### Destruction de l'instance QvForm

La méthode `destroy` de la classe `QvForm` vous permet de réinitialiser l'instance `QvForm` en supprimant les règles de validation personnalisées et les écouteurs d'événements associés. Voici un exemple d'utilisation :

```javascript
qvForm.destroy();
```

Dans cet exemple, la méthode `destroy` est appelée sur l'instance `qvForm`. Cela supprime toutes les règles de validation personnalisées et les écouteurs d'événements associés à cette instance.

Vous pouvez utiliser la méthode `destroy` lorsque vous souhaitez réinitialiser l'instance `QvForm` à son état initial, par exemple lors de la suppression ou de la désactivation du formulaire.

En utilisant les méthodes et les événements fournis par la classe `QvForm`, vous pouvez personnaliser la validation du formulaire et l'interaction dans votre application. Que ce soit en réagissant aux événements de validation réussis ou échoués, en émettant des événements personnalisés, en écoutant les événements du formulaire ou en effectuant des validations spécifiques, vous avez la possibilité d'ajouter une logique personnalisée à votre application basée sur les résultats de validation du formulaire.

La méthode `isValid` de la classe `QvForm` permet de vérifier si le formulaire est valide. Elle retourne une valeur booléenne indiquant si tous les champs du formulaire, représentés par les instances `QvInput` attachées à la classe `QvForm`, sont valides.

Voici un exemple d'utilisation :

```javascript
const qvForm = new QvForm(formElement);

const isValid = qvForm.isValid();
if (isValid) {
  // Le formulaire est valide
  // Effectuez les actions souhaitées, par exemple, soumettez le formulaire
} else {
  // Le formulaire n'est pas valide
  // Effectuez les actions souhaitées, par exemple, affichez un message d'erreur
}
```

Dans cet exemple, une instance `QvForm` est créée avec l'élément de formulaire `formElement`. Ensuite, la méthode `isValid` est appelée sur cette instance pour vérifier si le formulaire est valide. La valeur de retour `isValid` sera `true` si tous les champs du formulaire sont valides, et `false` sinon.

Vous pouvez utiliser cette méthode pour prendre des décisions dans votre code en fonction de la validité du formulaire. Par exemple, si le formulaire est valide, vous pouvez soumettre le formulaire ou effectuer d'autres actions souhaitées. Si le formulaire n'est pas valide, vous pouvez afficher un message d'erreur ou empêcher la soumission du formulaire.

La méthode `isValid` parcourt tous les `QvInput` attachés à la classe `QvForm` à l'aide de la méthode `every`. Elle appelle la méthode `passes` sur chaque instance `QvInput` pour vérifier si le champ est valide. Si tous les champs passent la validation, la méthode `isValid` retourne `true`. Sinon, elle retourne `false`.

En utilisant la méthode `isValid`, vous pouvez facilement vérifier la validité globale du formulaire basée sur la validation individuelle de chaque champ.


La méthode `observeChanges` de la classe `QvForm` permet d'attacher un écouteur d'événements à l'événement "qv.form.updated". Lorsque cet événement est déclenché, la méthode initialise et exécute les QvInputs pour le formulaire, puis appelle la fonction fournie avec l'instance du formulaire en tant que paramètre.

Voici un exemple d'utilisation :

```javascript
qvForm.observeChanges((form) => {
  console.log("Form updated", form);
});
```

Dans cet exemple, la méthode `observeChanges` est appelée sur l'instance `qvForm` avec une fonction de rappel qui affiche un message dans la console lorsque l'événement "qv.form.updated" est déclenché. La fonction de rappel prend l'instance du formulaire `form` en tant que paramètre.

Lorsque l'événement "qv.form.updated" est déclenché, la méthode `observeChanges` détruit l'instance actuelle du formulaire en appelant la méthode `destroy`, puis réinitialise le formulaire en appelant la méthode `setContainer` avec le conteneur d'origine. Ensuite, les QvInputs sont initialisés en appelant la méthode `_initQvInputs`, puis exécutés en appelant la méthode `_runQvInputs`. Enfin, la fonction de rappel fournie est appelée avec l'instance du formulaire en tant que paramètre.

L'utilisation de la méthode `observeChanges` vous permet de surveiller les changements dans le formulaire et d'effectuer des actions spécifiques en réponse à ces changements. Vous pouvez réinitialiser et mettre à jour les QvInputs, ainsi que exécuter du code personnalisé lorsque le formulaire est mis à jour.