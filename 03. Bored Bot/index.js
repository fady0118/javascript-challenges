const src = "https://apis.scrimba.com/bored/api/activity";
const taskEl = document.querySelector('.container h4');
const fetchBtn = document.querySelector('.container button');

async function getTask(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    let result = await response.json();
    console.log(result);
    // activity type
    taskEl.textContent = result.activity;
  } catch (error) {
    console.error(`error fetching: ${error}`)
  }
}
// getTask(src)
fetchBtn.addEventListener('click',()=>{
  getTask(src);
})
