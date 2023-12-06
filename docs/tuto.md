---
sidebar_position: 4
title: Tutoriel  en 5min
---
> **Note:**  Quickv 2.0 (Expérimental)

# Tutoriel en 5min

Bienvenue dans le tutoriel de prise en main de Quickv ! Dans ce tutoriel, nous allons apprendre comment utiliser Quickv pour valider un formulaire de contact. Voici ce que nous allons faire :

- Valider l'adresse email (maximum 32 caractères)
- Valider le sujet (doit commencer par une lettre majuscule)
- Valider le nom (nombre de caractères doit être compris entre 2 et 80, commencer par une lettre, ne doit pas contenir de nombre)
- Valider le numéro de téléphone (valider un numéro de téléphone)
- Valider le message (nombre de caractères compris entre 2 et 250, commencer par une lettre majuscule, se terminer par un point)

## Étape 1 : Inclusion de Quickv

Tout d'abord, téléchargez la bibliothèque Quickv à partir de [ce lien](https://quick-v.github.io/documentation/quickv.2-alpha.js). Ensuite, assurez-vous d'inclure la bibliothèque Quickv dans votre page web. Vous pouvez le faire en ajoutant la balise `<script>` avec le chemin vers le fichier `quickv.2-alpha.js` (le code source). Assurez-vous d'inclure cette balise avant la fermeture de la balise `<body>`.

```html
<script src="quickv.2-alpha.js"></script>
```

## Étape 2 : Définition du formulaire
Créer un page vierge pour le test, mettez du code html.

Nous allons créer le formulaire HTML avec les champs à valider à l'aide de Quickv.

Voici l'exemple :

```html
<form>
  <div>
    <label class="label">Nom</label>
    <div>
      <input
        data-qv-rules="required|startWithLetter|between:2,80|only:string"
        type="text"
        name="nom"
        required
      />
    </div>
    <div data-qv-feedback="nom"></div>
  </div>
  <div>
    <label for="">Email</label>
    <input type="text" data-qv-rules="required|email|maxlength:32" name="email" />
    <div data-qv-feedback="email"></div>
  </div>
  <div>
    <label for="">Sujet</label>
    <input type="text" data-qv-rules="required|startWithUpper" name="sujet" />
    <div data-qv-feedback="sujet"></div>
  </div>
  <div>
    <label for="">Numéro de téléphone</label>
    <input type="text" data-qv-rules="required|phone" name="telephone" />
    <div data-qv-feedback="telephone"></div>
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

Dans cet exemple, nous avons ajouté aux champs des attributs `data-qv-rules` spécifiant les règles de validation et des attributs `data-qv-feedback` à certains `div` pour afficher les retours de validation.

### Style du formulaire

Pour avoir un style un peu propre du formulaire, ajoutons ce code css à notre page.
Vous pouvez le personnalier comme vous le voulez.

```css
form {
  width: 80%;
  min-width: 355px;
  margin: 0 auto;
}
form > div {
  margin-bottom: 0.75rem;
}
[data-qv-feedback] {
  color: red;
}
input,
textarea,
select,
input[type="file"] {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: block;
  width: 100%;
  border-radius: 5px;
}

input,
textarea,
select {
  border: 1px solid #ccc;
  padding: 8px;
  transition: border-color 0.3s ease;
}

input:hover,
textarea:hover,
select:hover,
input[type="file"]:hover {
  border-color: #999;
}

input:focus,
textarea:focus,
select:focus,
input[type="file"]:focus {
  border-color: #007bff;
}
input.is-invalid,
textarea.is-invalid,
select.is-invalid,
input[type="file"].is-invalid {
  border-left: 4px solid #ff0000;
  border-color: #ff0000;
}

input.success,
textarea.success,
select.success,
input[type="file"].success {
  border-left: 4px solid #28a745;
  border-color: #28a745;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
.help {
  display: block;
  margin-top: 4px;
  font-size: 14px;
  color: #777;
}
button,
input[type="button"],
input[type="submit"],
input[type="reset"] {
  display: inline-block;
  margin: 0;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
}

button:not(:disabled):hover,
input[type="button"]:not(:disabled):hover,
input[type="submit"]:not(:disabled):hover,
input[type="reset"]:not(:disabled):hover {
  background-color: #0056b3;
}

button:not(:disabled):focus,
input[type="button"]:not(:disabled):focus,
input[type="submit"]:not(:disabled):focus,
input[type="reset"]:not(:disabled):focus {
  outline: none;
  box-shadow: 0 0 0 2px #007bff;
}
button:disabled,
input[type="button"]:disabled,
input[type="submit"]:disabled,
input[type="reset"]:disabled {
  cursor: not-allowed;
  background-color: #e0e0e0;
  color: #777;
}

form {
  max-width: 500px;
  margin: auto;
}
div,
p {
  margin-bottom: 10px;
}
```

## Étape 3 : Initialisation de Quickv

Maintenant que nous avons défini notre formulaire, nous allons l'associer à Quickv pour effectuer la validation. Ajoutez le code JavaScript suivant à la fin de votre page, juste avant la fermeture de la balise `<body>` :

```html
<script>
  const qv = new Quickv();
  qv.init();
</script>
```

Dans cet exemple, nous créons une instance de `Quickv` et appelons la méthode `init()` pour initialiser la validation.

Et voilà ! Maintenant, lorsque vous soumettez le formulaire, ou  vous tapez dans les champs, Quickv effectuera la validation en fonction des règles définies et affichera les retours de validation appropriés.

N'hésitez pas à personnaliser les règles de validation et les messages d'erreur selon vos besoins. Vous pouvez également consulter la documentation de Quickv pour plus d'informations sur les fonctionnalités avancées.

J'espère que ce tutoriel vous a été utile pour prendre en main Quickv avec un exemple concret. Amusez-vous à valider vos formulaires avec facilité !

## Aller plus loin

Quickv offre de nombreuses possibilités de personnalisation et de configuration pour répondre à vos besoins spécifiques. Voici quelques ressources supplémentaires pour vous aider à explorer ces fonctionnalités :

- [Personnalisation des messages](/docs/validation/messages) : Apprenez comment personnaliser les messages d'erreur et les textes affichés par Quickv.
- [Autres règles de validation](/docs/validation/rules) : Découvrez les différentes règles de validation disponibles dans Quickv, telles que la validation de la longueur, la validation des expressions régulières, et bien plus encore.
- [Les événements de validation](/docs/validation/events) : Explorez les événements de validation pour interagir avec Quickv lors de la validation d'un formulaire.
- [Validation d'un input individuel](/docs/validation/qv-input) : Découvrez comment valider un champ de formulaire individuel avec Quickv.
- [Validation d'un formulaire individuel](/docs/validation/qv-form) : Apprenez à valider un formulaire spécifique en utilisant Quickv.
- [Validation des formulaires sur une page](/docs/validation/qv-quickv) : Découvrez comment valider tous les formulaires présents sur une page en une seule fois.
- [Exemples](/docs/example) : Consultez des exemples concrets d'utilisation de Quickv pour la validation de formulaires.
- [Intégration dans un framework (React, Angular, etc.)](/docs/frameworks) : Obtenez des instructions sur l'intégration de Quickv dans différents frameworks populaires tels que React, Angular, Vue.js, etc.
- [Contribution](/docs/contribution) : Contribuez au développement de Quickv en soumettant des suggestions, des rapports de bugs ou en proposant des améliorations.
- [Développement](/docs/contribution) : Si vous êtes intéressé par le développement de Quickv, consultez cette documentation pour obtenir des informations sur la façon de contribuer au projet.

Ces ressources vous aideront à approfondir vos connaissances et à tirer le meilleur parti de Quickv pour la validation de vos formulaires. Profitez de la puissance et de la flexibilité de Quickv dans vos projets !