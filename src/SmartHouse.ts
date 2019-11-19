import { DeviceInterface } from "./DeviceInterface";

export class SmartHouse<T extends DeviceInterface> {
    private devices = new Map<string, T>();
    
    addDevice(value: T):void {
        this.devices.set(value.getName() ,value);
    }

    getAllDevices(): Map<string, T> {
        return this.devices;
    }

    getDeviceByKey(key: string): T {
        return this.devices.get(key);
    }

    deleteDevice(key:string):void {
        this.devices.delete(key);
    }

    deleteAllDevices():void {
        this.devices.clear();
    }

    everythingOn(): void {
        for (let value of this.devices.values()) {
            value.on();
        }
    }

    everythingOff(): void {
        for (let value of this.devices.values()) {
            value.off();
        }
    }
}

