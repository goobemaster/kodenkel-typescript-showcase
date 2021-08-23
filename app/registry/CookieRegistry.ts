import { RegistryStorage } from "./RegistryStorage";
import { Registry } from "./Registry";

export class CookieRegistry implements Registry {

    public constructor() {

    }

    public getStorageType(): RegistryStorage {
        return RegistryStorage.COOKIE;
    }

    public write(key: string, value: string): boolean {
        document.cookie = `REGKEY${key}=${value}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`
        return true;
    }

    public read(key: string): string {
        return document.cookie
            .split('; ')
            .find(row => row.startsWith('REGKEY' + key + '='))
            .split('=')[1];
    }

    public getAllKeys(): string[] {
        let keys: string[] = [];

        document.cookie.split('; ').forEach((row) => {
            if (row.startsWith('REGKEY')) keys.push(row.split('=')[0].slice(6));
        });

        return keys;
    }

}