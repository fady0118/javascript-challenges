const src = "https://apis.scrimba.com/bored/api/activity";

async function getTask(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    let result = await response.json();
    console.log(result);
    // activity type
    
  } catch (error) {
    console.error(`error fetching: ${error}`)
  }
}
getTask(src)