## 1. Transforming Characters (map/filter challenge)

#### Given an array of character objects:
```javascript
const chars = [
  { name: "Lira", level: 3, stamina: 40, role: "scout" },
  { name: "Daro", level: 1, stamina: 10, role: "warrior" },
  { name: "Mika", level: 4, stamina: 70, role: "mage" },
];
```
#### Tasks

- Return only characters with stamina ≥ 30

- Add a computed property power = level * stamina to each item

- Sort by power, descending