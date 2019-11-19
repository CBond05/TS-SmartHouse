import { AbstractDevice } from "./AbstractDevice"
import { TaskList } from "./Enums"

export class Multicooker  extends AbstractDevice {
    protected task: null | string  = null; // The main goal is that user sets task and cooking starts, so it's not possible to set default value
    protected currentTask: number = 0;
    protected taskList: string[] = Object.keys(TaskList);
    protected temperature: number = 100;

    getTasklist(): string[] {
        return this.taskList;
    }

    getTask(): string {
        if (this.task != null) {
            return this.task;
        } else {
            return "Task is not set. Please, set task."
        }
    }

    setUpTask(): void {
        if( this.state === true){
            this.task = this.taskList[this.currentTask]
        } else {
            this.task = this.taskList[0];
        }
         
    }

    getCurrentTask() {
        return this.taskList[this.currentTask];
    }

    nextTask() {
        return this.state === true &&
        this.currentTask > this.taskList.length - 1
            ? this.currentTask
            : ++this.currentTask;
    }

    previousTask() {
        return this.state === true && this.currentTask <= 0
            ? this.currentTask
            : --this.currentTask;
    }

    getTemperature() {
        return this.temperature;
    }

    increaseTemperature(): number{
        return this.state === true && this.temperature >= 100
            ? this.temperature
            : ++this.temperature;
    }
    decreaseTemperature(): number {
        return this.state === true && this.temperature <= 0
            ? this.temperature
            : --this.temperature;
    }

    async setUpTaskWithTimer(str: string): Promise<void> {
        await super.timer(str, true);
        this.task = this.taskList[this.currentTask];
        console.log("task is set");
    }
}
