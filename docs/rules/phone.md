# Validation des numéros de téléphone

Ces règles sont spécifiquement conçues pour la validation des numéros de téléphone. Elles vous permettent de vérifier le format des numéros de téléphone. Voici une description détaillée de chaque règle et des exemples pratiques d'utilisation :

> Veuillez noter que le code et les exemples fournis peuvent contenir des erreurs ou des limitations en raison de la complexité et des variations des formats de numéros de téléphone dans différentes régions et pays. Il est toujours recommandé d'effectuer une validation supplémentaire ou de consulter les normes pertinentes lors de la manipulation de numéros de téléphone.

## Règle `phone`

La règle `phone` valide le format d'un numéro de téléphone. Veuillez noter que, compte tenu de la diversité des numéros de téléphone existants, cette validation peut ne pas couvrir tous les cas possibles.

**Utilisation :** Vous pouvez utiliser cette règle pour vous assurer qu'un numéro de téléphone saisi par l'utilisateur respecte le format attendu.

**Exemple :**
```html
<input data-qv-rules="phone:FR,BJ" /> 

<input data-qv-rules="phone" />
<!-- Valide les numéros de téléphone de manière globale -->
```

Dans le premier exemple, la règle valide le numéro de téléphone en fonction des codes de pays spécifiés (FR,BJ). Elle s'assure que le numéro de téléphone saisi respecte le format utilisé dans les pays respectifs.

Dans le deuxième exemple, la règle valide les numéros de téléphone de manière globale, sans restriction de code de pays spécifique.

---

Si vous souhaitez contribuer en ajoutant votre propre règle de validation des numéros de téléphone, vous pouvez vous rendre sur la [page de contribution](/docs/contribution).
