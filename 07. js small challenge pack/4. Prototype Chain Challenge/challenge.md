### 4. Prototype Chain Challenge

##### Build objects manually using prototypes (not classes):
```js
const baseStats = { level: 1, stamina: 20 };

const warrior = Object.create(baseStats);
warrior.weapon = "axe";
```
##### Task:

Add an inherited method to baseStats, and show that all derived objects share it without duplicating code.