// 3. Async Challenge — Simulate Mission Outcome
function mission() {
  return new Promise((resolve, reject) => {
    console.log("Mission started");
    let result = Math.random();
    setTimeout(() => {
      if (result >= 0.3) {
        resolve({status:"Mission Success!",xp:Math.floor(Math.random()*30)+10});
      } else {
        reject("Mission Failed!");
      }
    }, 2000);
  });
}
async function sendOnMission(character) {
  try {
    console.log(`sending ${character} on a mission`);
    const response = await mission();
    console.log(`${response.status}\nExp gained:${response.xp}`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Mission finished!");
  }
}

sendOnMission("Sonar");
