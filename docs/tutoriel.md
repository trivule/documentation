---
sidebar_position: 2
---

#  Tutoriel

Bienvenue dans le tutoriel de prise en main de Quickv ! Dans ce tutoriel, nous allons apprendre comment utiliser Quickv pour valider un formulaire HTML à l'aide d'un exemple concret.

## Étape 1: Inclusion de Quickv

Tout d'abord, téléchargez la bibliothèque Quickv à partir de <a target="_blank" href="/static/js/quickv.js" download>ce lien</a>. Ensuite, assurez-vous d'inclure la bibliothèque Quickv dans votre page web. Vous pouvez le faire en ajoutant la balise `<script>` avec le chemin vers le fichier `quickv.js`. Assurez-vous d'inclure cette balise avant la fermeture de la balise `<body>`.

```html
<script src="quickv.js"></script>
```

## Étape 2: Définition du formulaire

Dans cette étape, nous allons créer un formulaire HTML avec des champs à valider à l'aide de Quickv. Voici un exemple de formulaire avec quelques champs :

```html
<form action="">
  <div>
    <label class="label">Age</label>
    <div>
      <input
        class="border p-3"
        data-qv-rules
        type="number"
        name="age"
        min="2"
        required
      />
    </div>
    <div data-qv-feedback="age"></div>
  </div>
  <div>
    <label for="">Email</label>
    <input type="text" data-qv-rules="required|email" name="email" />
    <div data-qv-feedback="email"></div>
  </div>
  <div>
    <label for="">Confirm email</label>
    <input
      type="text"
      data-qv-rules="required|same:email"
      name="confirm_email"
    />
    <div data-qv-feedback="confirm_email"></div>
  </div>
  <!-- Ajoutez les autres champs de votre formulaire ici -->
  <p>
    <button
      type="submit"
      value="Submit"
      class="text-white p-3"
      data-qv-submit
    >
      Submit
    </button>
  </p>
</form>
```

Dans cet exemple, nous avons ajouté plusieurs champs avec des attributs `data-qv-rules` spécifiant les règles de validation et des attributs `data-qv-feedback` pour afficher les retours de validation.

## Étape 3: Initialisation de Quickv

Maintenant que nous avons défini notre formulaire, nous allons l'associer à Quickv pour effectuer la validation. Ajoutez le code JavaScript suivant à la fin de votre page, juste avant la fermeture de la balise `<body>` :

```html
<script>
  const qvForm = new QvForm("form");
  qvForm.init();
</script>
```

Dans cet exemple, nous créons une instance de `QvForm` en fournissant le sélecteur CSS `"form"` qui correspond à notre formulaire. Ensuite, nous appelons la méthode `init()` sur l'instance de `QvForm` pour initialiser la validation.

Et voilà ! Maintenant, lorsque vous soumettez le formulaire, Quickv effectuera la validation en fonction des règles définies et aff

ichera les retours de validation appropriés.

N'hésitez pas à personnaliser les règles de validation et les messages d'erreur selon vos besoins. Vous pouvez également consulter la documentation de Quickv pour plus d'informations sur les fonctionnalités avancées.

J'espère que ce tutoriel vous a été utile pour prendre en main Quickv avec un exemple concret. Amusez-vous à valider vos formulaires avec facilité !
 
Assurez-vous de remplacer le lien de téléchargement de Quickv ( <a target="_blank" href="/static/js/quickv.js" download>ce lien</a>) par le lien réel où vous avez téléchargé la bibliothèque Quickv.

Ce tutoriel vous guidera à travers les étapes nécessaires pour utiliser Quickv avec un exemple concret. N'hésitez pas à personnaliser les règles de validation et les messages d'erreur selon vos besoins. Amusez-vous à valider vos formulaires avec facilité grâce à Quickv !