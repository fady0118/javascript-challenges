// 5. Data Structure Challenge — Generate Randomized Characters
const namesArray = ["William","John","Robert","Henry","Thomas","Walter","Alice","Isabella","Emma","Eleanor","Margaret","Ademar","Alaric","Ingram","Beatrice","Isabeau","Lavinia","Christian","Julian","Manfred","Foulques","Bertran","Geoffrey","Godfrey","Elrond","Maximus","Flynn","Melina","Hoel","Berenguer","Tancrède","Thibaut"];
const roles = ['Warrior','Mage','Scout','Marksman','Tank','Healer','Assassin']
function generateCharacter() {
    const name = namesArray[Math.floor(Math.random() * namesArray.length)];
    const role = roles[Math.floor(Math.random()*roles.length)];
    const level = Math.floor(Math.random()*5)+1;
    const stamina = Math.min((Math.floor(Math.random()*level)+1)*20,80);

    const character = {
        name: name,
        role: role,
        level: level,
        stamina: stamina,
        id: crypto.randomUUID()
    }
	return character
}
console.log(generateCharacter())
