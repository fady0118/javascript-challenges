### 3. Async Challenge — Simulate Mission Outcome

#### Write a function:
```javascript
async function sendOnMission(character) { ... }
```

#### Rules:

- Wait 1–2 seconds randomly (simulate mission duration)

- Resolve with "success" 70% of the time

- Reject with "fail" 30% of the time

- Log "Mission started" → "Mission finished" in between

- Bonus: chain 3 missions in series using await.