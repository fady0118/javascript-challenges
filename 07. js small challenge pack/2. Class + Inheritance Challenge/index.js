// 2. Class + Inheritance Challenge
class Character {
  constructor(name, level, stamina) {
    this.name = name;
    this.level = level;
    this.stamina = stamina * level;
    this.currentStamina = stamina * level;
  }
  rest(hours) {
    this.currentStamina = Math.max(
      0,
      Math.min(this.currentStamina + 20 * hours, this.stamina)
    );
  }
  performAction(cost, action, damage) {
    if (this.currentStamina >= cost) {
      this.currentStamina -= cost;
      return `${this.name} ${action}! ${
        damage > 0 ? `Damage: ${this.level * damage}` : ""
      } (stamina: ${this.currentStamina}/${this.stamina}).`;
    } else {
      return `${this.name} Can't perform this action: not enough stamina(${this.currentStamina}/${cost}).`;
    }
  }
}

class Warrior extends Character {
  powerStrike() {
    return super.performAction(25, "performs a POWER STRIKE", 15);
  }
}
class Mage extends Character {
  fireBall() {
    return super.performAction(20, "casts a FIRE BALL", 12);
  }
}
class Scout extends Character {
  recon() {
    return super.performAction(
      15,
      "performs RECON and reveals nearby threats",
      0
    );
  }
}

const valir = new Mage("valir", 10, 7);
const lapu = new Warrior("lapu", 12, 9);
const columbus = new Scout("columbus", 10, 5);

valir.fireBall();
valir.fireBall();
valir.fireBall();
console.log(valir.fireBall());
console.log(lapu.powerStrike());
console.log(columbus.recon());
