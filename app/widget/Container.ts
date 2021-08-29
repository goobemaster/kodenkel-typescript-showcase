import { Widget } from "./Widget";

export class Container extends Widget {

    private static DEFAULT_HEIGHT = '100%';
    private static DEFAULT_WIDTH = '100%';

    public constructor(parentElement: HTMLElement, name = 'generic', tagName = 'section') {
        super(parentElement, name, tagName);

        this.setHeight(Container.DEFAULT_HEIGHT);
        this.setWidth(Container.DEFAULT_WIDTH);
    }

    public setDisplay(display: string): void {
        this.widgetElement.style.display = display;
    }

    public setHeight(height: string | number): void {
        this.widgetElement.style.height = height.toString();
    }

    public setWidth(width: string | number): void {
        this.widgetElement.style.width = width.toString();
    }

    public setMargin(width: number): void {
        this.widgetElement.style.setProperty('margin', width.toString() + 'px');
    }

    public setPadding(width: number): void {
        this.widgetElement.style.setProperty('padding', width.toString() + 'px');
    }

    public setBackgroundColor(color: string): void {
        this.widgetElement.style.setProperty('background-color', color);
    }

}