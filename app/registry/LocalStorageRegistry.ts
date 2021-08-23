import { RegistryStorage } from "./RegistryStorage";
import { Registry } from "./Registry";

export class LocalStorageRegistry implements Registry {

    private keysInUse: string[];

    public constructor() {
        this.keysInUse = [];
    }

    public getStorageType(): RegistryStorage {
        return RegistryStorage.LOCAL_STORAGE;
    }

    public write(key: string, value: string): boolean {
        window.localStorage.setItem(key, value);
        if (!this.keysInUse.includes(key)) this.keysInUse.push(key);
        return true;
    }

    public read(key: string): string {
        let value = window.localStorage.getItem(key);
        return value === null ? '' : value;
    }

    public getAllKeys(): string[] {
        return this.keysInUse;
    }

}