import { Duck } from "./Duck"
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck ('Patolino', 3, 50, 2, true, 'preto');

function takeOff (animal : ICanFly) {
 animal.fly ();
}

takeOff (duck)
