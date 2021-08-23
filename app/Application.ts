import { Registry } from "./registry/Registry";
import { RegistryStorage } from "./registry/RegistryStorage";
import { CookieRegistry } from "./registry/CookieRegistry";
import { LocalStorageRegistry } from "./registry/LocalStorageRegistry";
import { MemoryRegistry } from "./registry/MemoryRegistry";
import { NullRegistry } from "./registry/NullRegistry";

/**
 * Entry point for the application, and with the help of TypeScript,
 * this class follows the singleton pattern as well.
 */
export class Application {
    private static instance: Application;

    private registry: Registry;

    private constructor() {
        this.registry = this.getRegistry(RegistryStorage.LOCAL_STORAGE);

        this.appendToBody('<h1>Strategy Pattern</h1><h2>Reading/Writing to various registries</h2>');
        this.appendToBody('<p>Registry storage is: <b>' + this.registry.getStorageType().toString() + '</b></p>');

        this.registry.write('title', 'Learning TypeScript');
        this.registry.write('url', 'https://www.kodenkel.com/tutorial/getting-started-with-typescript-frameworkless-browser-application');

        this.appendToBody('<p>' + JSON.stringify(this.registry.getAllKeys()) + '</p>');

        this.registry.getAllKeys().forEach((key: string) => {
            this.appendToBody(`<p>${key} = ${this.registry.read(key)}</p>`);
        });
    }

    public static getInstance(): Application {
        if (Application.instance === undefined) Application.instance = new Application();
        return Application.instance;
    }

    private getRegistry(storage: RegistryStorage): Registry {
        switch (storage) {
            case RegistryStorage.COOKIE:
                return new CookieRegistry();
                break;
            case RegistryStorage.LOCAL_STORAGE:
                return new LocalStorageRegistry();
                break;
            case RegistryStorage.MEMORY:
                return new MemoryRegistry();
                break;
            default:
                return new NullRegistry();
            
        }
    }

    private appendToBody(html: string): void {
        document.getElementsByTagName('body')[0].innerHTML += html;
    }
}

const app = Application.getInstance();