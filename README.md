# micro-uuid-v4

> **Why use micro-uuid-v4?**
> Importing standard UUID packages adds multiple sub-dependencies, bloats node_modules, and increases bundle size for basic identifier needs.

An ultra-lightweight secure UUID v4 generator. It wraps native Node.js crypto, creating identifiers without dependency bloat.

---

## ⚡ Features
* **Zero dependencies**
* **Uses cryptographically secure random values**
* **Ultra-lightweight footprint**

---

## 📦 Installation
```bash
npm i micro-uuid-v4
```

---

## 🚀 Usage
```javascript
import { uuid } from 'micro-uuid-v4';

const newId = uuid();
console.log('UUID v4:', newId); // e.g. "a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6"
```

---

## ⚙️ API Reference
### uuid()
* Returns a cryptographically secure UUID v4 string.

---

## 📺 Demonstration
![Terminal Demo](./demo.gif)

---

## 📄 License
MIT License.
