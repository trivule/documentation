
# Form validation
 Par **form validation**, il faut attendre la validation d'un formulaire dans son entièrété. 
 En principe, `**form validation**`  est développés en se basant sur [Input validation](/docs/validation/qv-input). Il regroupe par exemple la désactivation du bouton de submission, la prévention de la propagation  de l'événement `submit` d'un formulaire
## QvForm
## Personnalisation avancée

### Interaction avec les formulaires lors de la validation

Les méthodes `onFails` et `onPasses` de la classe `QvForm` vous permettent d'interagir avec les éléments `input` lorsque la validation échoue ou réussit pour les champs du formulaire.

La méthode `onFails` définit un écouteur d'événements qui sera déclenché lorsque la validation échoue pour l'un des champs du formulaire. Voici un exemple d'utilisation :

```javascript
qvForm.onFails((e) => {
  // Code à exécuter lorsque la validation échoue pour un champ du formulaire
  console.log("Validation échouée", e.details);
});
```

Dans cet exemple, une fonction de rappel est définie pour afficher un message dans la console lorsque la validation échoue pour un champ du formulaire. Vous pouvez personnaliser le code à exécuter en fonction de vos besoins, par exemple, afficher un message d'erreur à l'utilisateur ou appliquer des styles spécifiques à l'élément `input`.

De manière similaire, la méthode `onPasses` vous permet de définir un écouteur d'événements qui sera déclenché lorsque la validation réussit pour l'un des champs du formulaire. Voici un exemple d'utilisation :

```javascript
qvForm.onPasses((input) => {
  // Code à exécuter lorsque la validation réussit pour un champ du formulaire
  console.log("Validation réussie");
});
```

Dans cet exemple, une fonction de rappel est définie pour afficher un message dans la console lorsque la validation réussit pour un champ du formulaire. Vous pouvez modifier le code à exécuter en fonction de vos besoins, par exemple, valider d'autres champs du formulaire ou activer un bouton de soumission.

En utilisant ces méthodes, vous pouvez réagir aux événements de validation réussis ou échoués et effectuer des actions spécifiques en conséquence. Cela vous permet d'ajouter une logique personnalisée à votre application en fonction du résultat de la validation des champs du formulaire.

### Émission d'événements personnalisés

La méthode `emit` de la classe `QvForm` vous permet d'émettre un événement personnalisé vers les éléments `input` associés. Voici un exemple d'utilisation :

```javascript
qvForm.emit("myEvent", { data: "Valeur personnalisée" });
```

Dans cet exemple, un événement personnalisé nommé "myEvent" est émis vers le formulaire. Des données supplémentaires `{ data: "Valeur personnalisée" }` peuvent être transmises avec l'événement.

Vous pouvez utiliser cette fonctionnalité pour créer une communication et une interaction avancées entre votre application et la classe `QvForm`. Par exemple, vous pouvez émettre un événement personnalisé lorsque la valeur d'un élément `input` change et écouter cet événement pour effectuer des actions spécifiques dans d'autres parties de votre application.

### Attachement d'écouteurs d'événements

La méthode `on` de la classe `QvForm` vous permet d'attacher un écouteur d'évén

ements au formulaire associé. Voici un exemple d'utilisation :

```javascript
qvForm.on("change", (event) => {
  // Code à exécuter lorsque l'événement "change" se produit 
});
```

Dans cet exemple, un écouteur d'événements est attaché au formulaire pour l'événement "change". Lorsque cet événement se produit, la fonction de rappel est exécutée. Vous pouvez écouter d'autres événements tels que vos propres événements ou d'autres événements JavaScript standard.

Cela vous permet d'écouter des événements spécifiques émis par le formulaire et d'effectuer des actions personnalisées en réponse à ces événements.

### Validation du formulaire

La méthode `valid` de la classe `QvForm` vous permet de valider le formulaire en utilisant les règles de validation définies. Voici un exemple d'utilisation :

```javascript
const isValid = qvForm.valid();
if (isValid) {
  // Poursuivre avec la soumission du formulaire ou gérer un formulaire valide
} else {
  // Afficher des messages d'erreur ou gérer un formulaire invalide
}
```

Dans cet exemple, la méthode `valid` est appelée pour valider le formulaire. La valeur de retour `isValid` indique si le formulaire est valide ou non. Vous pouvez utiliser cette information pour prendre des décisions dans votre code, telles que la soumission du formulaire ou l'affichage de messages d'erreur à l'utilisateur.

La méthode `valid` met à jour la propriété `_passed` de l'instance `QvForm` avec le résultat de la validation et retourne ce résultat. Elle effectue la validation en utilisant les valeurs actuelles des éléments `input` et les règles de validation définies.

### Validation et émission d'événements de validation

La méthode `validate` de la classe `QvForm` effectue la validation du formulaire en utilisant les règles de validation définies. Elle émet également les événements "qv.form.passes" ou "qv.form.fails" en fonction du résultat de la validation. Voici un exemple d'utilisation :

```javascript
const isValid = qvForm.validate();
if (isValid) {
  // Poursuivre avec la soumission du formulaire ou gérer un formulaire valide
} else {
  // Afficher des messages d'erreur ou gérer un formulaire invalide
}
```

Dans cet exemple, la méthode `validate` est appelée pour valider le formulaire. La valeur de retour `isValid` indique si le formulaire est valide ou non. Vous pouvez utiliser cette information pour prendre des décisions dans votre code, telles que la soumission du formulaire ou l'affichage de messages d'erreur à l'utilisateur.

La méthode `validate` effectue les étapes suivantes :

1. Elle appelle la méthode `valid` pour effectuer la validation du formulaire et mettre à jour la propriété `_passed` avec le résultat.
2. Elle appelle d'autres méthodes pour mettre à jour les classes CSS, récupérer les messages d'erreur et émettre les événements de validation.
3. Elle renvoie la valeur du résultat de la validation (`this._passed`).

Vous pouvez utiliser la méthode `validate` lorsque vous souhaitez effectuer une validation complète du formulaire, mettre à jour l'interface utilisateur en fonction du résultat de la validation et émettre les événements correspondants.

### Écoute des événements de validation

Lors

que la validation échoue ou réussit, les événements `qv.form.fails` et `qv.form.passes` sont émis pour vous permettre d'interagir avec le formulaire dans votre code.

```javascript
const myForm = document.getElementById('my-form');
myForm.addEventListener('qv.form.fails', (e) => {
  console.log(e.detail);
  // Votre code
});
```

Dans cet exemple, un écouteur d'événements est attaché au formulaire avec l'ID "my-form" pour l'événement "qv.form.fails". Lorsque cet événement se produit, la fonction de rappel est exécutée. Vous pouvez personnaliser le code à exécuter en fonction de vos besoins, par exemple, afficher des messages d'erreur à l'utilisateur ou effectuer des actions spécifiques en cas d'échec de la validation.

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