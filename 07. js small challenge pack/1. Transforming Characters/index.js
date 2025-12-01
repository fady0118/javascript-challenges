// 1. Transforming Characters (map/filter challenge)
const chars = [
  { name: "Lira", level: 3, stamina: 40, role: "scout" },
  { name: "Daro", level: 1, stamina: 10, role: "warrior" },
  { name: "Mika", level: 4, stamina: 70, role: "mage" },
];

function modifyChars(chars,stThreshold) {
    // 1. stamina filtering
    chars = chars.filter(character=>character.stamina>=stThreshold)
    // 2. add power stat
    chars.forEach(char=>{
        char.power = char.level * char.stamina
    })
    // 3. sort by power
    return chars.sort((a, b)=>b.power - a.power)
}

const chars_new = modifyChars(chars,30);
console.log(chars_new)