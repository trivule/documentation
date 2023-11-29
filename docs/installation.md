---
sidebar_position: 1
---

# Installation

> **Note:** Cette documentation concerne la version de développement de Quickv 2.0.

 

## Téléchargement ou Via CDN

Pour utiliser Quickv, suivez ces étapes :


1. **[Téléchargez](https://quick-v.github.io/documentation/quickv.2-alpha.js)** la bibliothèque Quickv depuis [ici](https://quick-v.github.io/documentation/quickv.2-alpha.js). Vous pouvez également utiliser directement le lien: `https://quick-v.github.io/documentation/quickv.2-alpha.js`
2. Incluez la bibliothèque Quickv dans votre page web comme on importe n'importe quel fichier javascript.

 
## Installation via npm
> Non publiée encore

## Exemple complet

 ```html
 <form id="myForm" > 
      <div>
        <label class="label">Téléphone</label>
        <input type="text" data-qv-rules="required|phone:FR" name="phone" />
        <div data-qv-feedback="phone"></div>
      </div>
      <div>
        <label class="label">Date</label>
        <input
          type="date"
          data-qv-rules="required|date|after:now"
          name="date"
        />
        <div data-qv-feedback="date"></div>
      </div>
      <div>
        <label class="label">Fichier</label>
        <input
          type="file"
          data-qv-rules="required|file|maxFileSize:1MB"
          name="file"
        />
        <div data-qv-feedback="file"></div>
      </div>
      <p><button type="submit" data-qv-submit>Envoyer</button></p>
</form>
<script src="https://quick-v.github.io/documentation/quickv.2-alpha.js"></script>
<script>
  const qv = new Quickv();
  qv.init();
</script>
```