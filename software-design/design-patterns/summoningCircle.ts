interface Creature {
  name: string;
  useAbility(): void;
}

class Dragon implements Creature {
  name: string;
  constructor() {
    this.name = "Dragon";
  }
  useAbility(): void {
    console.log("Dragon breathes fire!");
  }
}

class Phoenix implements Creature {
  name: string;
  constructor() {
    this.name = "Phoenix";
  }
  useAbility(): void {
    console.log("Phoenix rises from the ashes and is reborn!");
  }
}

class Unicorn implements Creature {
  name: string;
  constructor() {
    this.name = "Unicorn";
  }
  useAbility(): void {
    console.log("Unicorn dances on a rainbow of sparkles!");
  }
}

class SummonigCircle {
  summon(ingredientType: string): Creature {
    switch (ingredientType) {
      case "fire":
        return new Dragon();
      case "air":
        return new Phoenix();
      case "sparkles":
        return new Unicorn();
      default:
        throw new Error(`Unknown ingredient: ${ingredientType}`);
    }
  }
}

const circle = new SummonigCircle();

const dragon = circle.summon("fire");
console.log(dragon.name);
dragon.useAbility();

const phoenix = circle.summon("air");
console.log(phoenix.name);
phoenix.useAbility();

const unicorn = circle.summon("sparkles");
console.log(unicorn.name);
unicorn.useAbility();
