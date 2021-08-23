import { RegistryStorage } from "./RegistryStorage";
import { Registry } from "./Registry";

export class NullRegistry implements Registry {

    public constructor() {}

    public getStorageType(): RegistryStorage {
        return RegistryStorage.NULL;
    }

    public write(key: string, value: string): boolean {
        return true;
    }

    public read(key: string): string {
        return '';
    }

    public getAllKeys(): string[] {
        return [];
    }

}