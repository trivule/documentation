---
sidebar_position: 2
---

# Installation 
To use `Quickv` you can install it in one of the following ways:
### Via un cdn
Copy the _Quickv_ code from the CDN and paste it into a file named `quickv2.0.0.js`, and then include the `quickv2.0.0.js` file in your project. [Copy the code](https://cdn.jsdelivr.net/npm/quickv@2.0.0/dist/index.js). You can make it easy by copying the following script tag before the closing body tag of your HTML structure:

```html
<script  src="https://cdn.jsdelivr.net/npm/quickv@2.0.0/dist/index.js"></script>
```
### via npm

Go to the root of the project where you want to use `Quickv`, open your terminal, and type:
```bash
npm install quickv
```
You can then use `Quickv` in your project by importing it:
```js
import {Quickv} from  "quickv";
const  qv=  new  Quickv()
qv.init()
```