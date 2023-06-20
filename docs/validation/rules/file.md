 
# Validation des fichiers

Les règles suivantes sont utilisées pour valider les fichiers. Elles permettent de vérifier si une valeur est un objet `File` ou `Blob`, de vérifier la taille d'un fichier et de vérifier si la taille d'un fichier se situe entre des valeurs minimales et maximales.

### Règle : `file`

Cette règle vérifie si la valeur d'entrée est un objet `File` ou `Blob`.

```html
<input data-qv-rules="file" />
```

- Utilisation : Vous pouvez utiliser cette règle pour vous assurer qu'un champ de saisie de fichier est rempli avec un fichier valide.

### Règle : `maxFileSize`

Cette règle vérifie si la taille d'un objet `File` ou `Blob` est inférieure ou égale à une taille maximale donnée.

```html
<input data-qv-rules="maxFileSize:1MB" />
```

- Utilisation : Vous pouvez utiliser cette règle pour limiter la taille des fichiers que les utilisateurs peuvent télécharger.

### Règle : `minFileSize`

Cette règle vérifie si la taille d'un objet `File` ou `Blob` est supérieure ou égale à une taille minimale donnée.

```html
<input data-qv-rules="minFileSize:1MB" />
```

- Utilisation : Cette règle est utile lorsque vous souhaitez vous assurer que les fichiers téléchargés ont une taille minimale spécifique.

### Règle : `fileBetween`

Cette règle vérifie si la taille d'un objet `File` ou `Blob` se situe entre des valeurs minimales et maximales spécifiées.

```html
<input data-qv-rules="fileBetween:1MB,5MB" />
```

- Utilisation : Vous pouvez utiliser cette règle pour limiter la taille des fichiers téléchargés à une plage spécifique.

---

N'hésitez pas à me faire savoir si vous avez besoin d'une assistance supplémentaire !