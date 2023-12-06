# Validation des dates

Les règles suivantes sont utilisées pour valider les dates. Ces règles vous permettent de vérifier si une saisie est une date valide, de comparer des dates et de vérifier si une date se situe dans une plage spécifique.

### Règle : `date`

Cette règle vérifie si la saisie est une date valide.

```html
<input type="date-local" data-qv-rules="date" />
```

- Utilisation : Vous pouvez utiliser cette règle pour vous assurer que l'utilisateur entre une date valide dans un champ de saisie de date.

### Règle : `before`

Cette règle vérifie si la date saisie est antérieure à la date de comparaison.

```html
<input type="date-local" data-qv-rules="before:2020-11-11" />
```

- Utilisation : Cette règle est utile lorsque vous souhaitez vous assurer que l'utilisateur sélectionne une date antérieure à une date spécifique.

### Règle : `after`

Cette règle vérifie si la date saisie est postérieure à la date de comparaison.
 
```html
<input data-qv-rules="after:now" />
```

- Utilisation : Vous pouvez utiliser cette règle pour vous assurer que l'utilisateur sélectionne une date postérieure à la date actuelle.

### Règle : `dateBetween`

Cette règle vérifie si la date saisie se situe entre deux autres dates.

```html
<input type="date-local" data-qv-rules="dateBetween:2020-11-11,now" />
```

- Utilisation : Cette règle est utile lorsque vous souhaitez valider si une date se trouve dans une plage de dates spécifique.

### Règle : `time`

Cette règle vérifie si la chaîne de caractères saisie représente une heure valide au format 24 heures.

```html
<input data-qv-rules="time" />
```

- Utilisation : Vous pouvez utiliser cette règle pour valider les champs de saisie d'heure, en vous assurant que l'utilisateur entre une heure valide au format 24 heures.

---

N'hésitez pas à contribuer vos propres règles personnalisées à la bibliothèque en visitant la page [/docs/contribution](/docs/contribution).

Nous espérons que cette documentation vous aidera à comprendre et à utiliser les règles de validation des dates fournies par Quickv.
 