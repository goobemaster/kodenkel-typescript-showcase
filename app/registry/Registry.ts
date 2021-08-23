import { RegistryStorage } from "./RegistryStorage";

export interface Registry {

    getStorageType(): RegistryStorage;

    write(key: string, value: string): boolean;

    read(key: string): string;

    getAllKeys(): string[];

}