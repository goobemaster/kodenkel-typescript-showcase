import { RegistryStorage } from "./RegistryStorage";
import { Registry } from "./Registry";

export class MemoryRegistry implements Registry {

    private storage: {[index: string]: string};

    public constructor() {
        this.storage = {};
    }

    public getStorageType(): RegistryStorage {
        return RegistryStorage.MEMORY;
    }

    public write(key: string, value: string): boolean {
        this.storage[key] = value;
        return true;
    }

    public read(key: string): string {
        return this.storage.hasOwnProperty(key) ? this.storage[key] : '';
    }

    public getAllKeys(): string[] {
        return Object.keys(this.storage);
    }

}