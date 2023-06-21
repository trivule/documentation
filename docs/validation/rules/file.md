 
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
# Règle : "mimes"

La règle "mimes" est utilisée pour vérifier si le type MIME d'un objet `File` ou `Blob` correspond au(x) type(s) MIME spécifié(s). Elle vous permet de valider les téléchargements de fichiers en fonction de leurs types MIME.

## Utilisation


### Description
La règle "mimes" valide le type MIME du fichier téléchargé en le comparant aux types MIME spécifiés. Elle renvoie `true` si le type MIME correspond à l'un des types MIME fournis, et `false` sinon.

## Exemples

### Exemple 1 : Accepter uniquement les fichiers PDF
```html
<input type="file" data-qv-rules="mimes:.pdf">
```
Cet exemple restreint les téléchargements de fichiers pour n'accepter que les fichiers avec le type MIME "application/pdf".

### Exemple 2 : Accepter plusieurs types MIME
```html
<input type="file" data-qv-rules="mimes:image/jpeg, image/png">
```
Dans cet exemple, les téléchargements de fichiers sont autorisés pour les fichiers image au format JPEG et PNG.

### Exemple 3 : Accepter des groupes spécifiques de types MIME
```html
<input type="file" data-qv-rules="mimes:audio/*">
```
Cet exemple autorise les téléchargements de fichiers audio, quel que soit leur type MIME spécifique.

### Exemple 4 : Utilisation de jokers
```html
<input type="file" data-qv-rules="mimes:image/*">
```
Dans ce cas, tous les fichiers image avec un type MIME commençant par "image/" seront acceptés.

## Remarques
- La règle "mimes" doit être utilisée en combinaison avec d'autres règles de validation pour fournir une validation complète des téléchargements de fichiers.
- Il est important de noter que la validation est effectuée côté client, et une validation supplémentaire côté serveur est également recommandée pour assurer l'intégrité et la sécurité des données.

N'oubliez pas d'adapter le code d'exemple en fonction de votre cas d'utilisation et de vos exigences spécifiques.

Pour plus d'informations sur les autres règles disponibles et leur utilisation, veuillez vous référer à la documentation.
----------
N'hésitez pas à me faire savoir si vous avez besoin d'une assistance supplémentaire !