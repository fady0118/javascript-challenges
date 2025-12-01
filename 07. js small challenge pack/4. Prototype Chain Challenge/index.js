const baseStats = { level: 1, stamina: 20 };

const warrior = Object.create(baseStats);
warrior.weapon = "axe";
baseStats.showStats=function(){
    return(`lvl:${this.level}, stamina:${this.stamina}`)
}

console.log(warrior.weapon)
console.log(warrior.showStats())