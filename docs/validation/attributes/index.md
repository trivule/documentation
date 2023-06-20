 
# Les attributs

Quickv utilise des attributs HTML pour configurer et personnaliser la validation des formulaires. Ces attributs, qui commencent tous par `data-qv`, offrent une approche simple et intuitive pour définir les règles de validation, les événements, les messages d'erreur, les classes CSS et d'autres fonctionnalités liées à la validation des champs de formulaire. En utilisant ces attributs, vous pouvez rapidement mettre en place la validation des formulaires dans vos applications web, sans avoir besoin d'écrire du code JavaScript complexe. Dans cette documentation, nous allons explorer les attributs Quickv les plus couramment utilisés et expliquer leur utilité, ainsi que fournir des exemples pour illustrer leur utilisation.

Attributs Quickv:

1. `data-qv-rules`:
   - Utilité: Ce attribut permet de définir les règles de validation pour un champ de formulaire.
   - Cas d'utilisation: Lorsque vous avez besoin de spécifier des conditions spécifiques pour la validation d'un champ de formulaire, telles que la longueur minimale ou maximale, le format de date, la correspondance avec une expression régulière, etc.
   - Exemple: `<input type="text" data-qv-rules="required|email">`

2. `data-qv-events`:
   - Utilité: Ce attribut permet de spécifier les événements déclencheurs pour la validation d'un champ de formulaire.
   - Cas d'utilisation: Lorsque vous souhaitez valider un champ de formulaire lorsqu'un événement spécifique se produit, tel que la perte de focus, la saisie de texte, etc.
   - Exemple: `<input type="text" data-qv-events="blur|input">`

3. `data-qv-messages`:
   - Utilité: Ce attribut permet de définir des messages d'erreur personnalisés pour un champ de formulaire.
   - Cas d'utilisation: Lorsque vous souhaitez afficher des messages d'erreur spécifiques pour chaque règle de validation appliquée à un champ de formulaire.
   - Exemple: `<input type="text" data-qv-rules="required" data-qv-messages="Ce champ est requis.">`

4. `data-qv-invalid-class` et `data-qv-valid-class`:
   - Utilité: Ces attributs permettent de définir les classes CSS à appliquer à un champ de formulaire en fonction de son état de validation.
   - Cas d'utilisation: Lorsque vous souhaitez appliquer des styles visuels différents à un champ de formulaire en fonction de sa validité.
   - Exemple: `<input type="text" data-qv-invalid-class="invalid" data-qv-valid-class="valid">`

5. `data-qv-auto`:
   - Utilité: Ce attribut permet d'activer ou de désactiver la validation automatique lors de la saisie dans un champ de formulaire.
   - Cas d'utilisation: Lorsque vous souhaitez valider un champ de formulaire à mesure que l'utilisateur saisit les données, sans avoir besoin de déclencher manuellement la validation.
   - Exemple: `<input type="text" data-qv-auto="true">`

6. `data-qv-feedback`:
   - Utilité: Ce attribut permet de spécifier un élément de feedback associé à un champ de formulaire.
   - Cas d'utilisation: Lorsque vous souhaitez afficher un élément de feedback personnalisé pour un champ de formulaire, tel qu'une icô

ne, un message, etc.
   - Exemple: `<span data-qv-feedback class="feedback-icon"></span>`

7. `data-qv-submit`, `data-qv-enabled-class` et `data-qv-disabled-class`:
   - Utilité: Ces attributs sont utilisés pour configurer le bouton de soumission du formulaire en relation avec la validation.
   - Cas d'utilisation: Lorsque vous souhaitez activer ou désactiver le bouton de soumission en fonction de la validité du formulaire, et appliquer des styles CSS correspondants.
   - Exemple: `<button type="submit" data-qv-submit data-qv-enabled-class="enabled" data-qv-disabled-class="disabled">Submit</button>`

8. `data-qv-lang`:
   - Utilité: Ce attribut permet de spécifier la langue utilisée pour les messages d'erreur et les éléments de l'interface utilisateur de Quickv.
   - Cas d'utilisation: Lorsque vous souhaitez personnaliser la langue des messages d'erreur et de l'interface utilisateur de Quickv.
   - Exemple: `<form data-qv-lang="fr">...</form>`

Note: N'oubliez pas d'inclure la bibliothèque Quickv dans votre application avant d'utiliser ces attributs. Vous pouvez trouver la bibliothèque et des exemples de code sur le [référentiel GitHub de Quickv](https://github.com/quick-v/quickv).

N'hésitez pas à consulter la documentation officielle de Quickv pour plus de détails sur l'utilisation des attributs et d'autres fonctionnalités de la librairie.