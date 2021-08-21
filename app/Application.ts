/**
 * Entry point for the application, and with the help of TypeScript,
 * this class follows the singleton pattern as well.
 */
export class Application {
    private static instance: Application;

    private constructor() {
        document.getElementsByTagName('body')[0].innerHTML = '<h1>Hello World from the Application class!</h1>';
        this.sayHelloInTheConsole();
    }

    private sayHelloInTheConsole(): void {
        console.log('Hello in the console as well!');
    }

    public static getInstance(): Application {
        if (Application.instance === undefined) Application.instance = new Application();
        return Application.instance;
    }
}

const app = Application.getInstance();