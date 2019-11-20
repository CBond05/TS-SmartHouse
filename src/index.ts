import { DigitalWatch } from "./DigitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./SmartHouse";
import {AbstractDevice} from "./AbstractDevice";
import { Colors } from "./Enums"
import { sign } from "crypto";

const sh = new SmartHouse<AbstractDevice>();

const newWatch = new DigitalWatch("Rolex");

const someMulticooker = new Multicooker("Polaris");

sh.addDevice(newWatch);
sh.addDevice(someMulticooker);
sh.everythingOn();
console.log(sh.getAllDevices());

someMulticooker.nextTask();
someMulticooker.setUpTask();
console.log(someMulticooker.getTask());
someMulticooker.previousTask();
someMulticooker.setUpTask();
console.log(someMulticooker.getTask());
console.log(someMulticooker.getTasklist());

console.log(newWatch.getAllColors());
console.log(newWatch.getColor());
newWatch.changeColor(Colors.RED);
console.log(newWatch.getColor());