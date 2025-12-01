### 5. Data Structure Challenge — Generate Randomized Characters
##### Create a function:
```js
function generateCharacter() { ... }
```
##### Requirements:
- Random name from a small array
- Random role from [warrior, mage, scout]
- Random level 1–5
- Random stamina 20–80 in steps of 10
- Return a nice object, e.g.:
```js
{
  name: "Ferin",
  role: "mage",
  level: 3,
  stamina: 50
}
```
Bonus: ensure level influences stamina minimum (e.g. higher level = no low stamina rolls).