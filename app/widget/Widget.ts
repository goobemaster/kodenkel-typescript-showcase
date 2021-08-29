import { Random } from "../utility/Random";

export abstract class Widget {
    private uniqueId: string;
    private name: string;

    protected parentElement: HTMLElement;
    protected widgetElement: HTMLElement;

    protected subWidgets: Widget[];

    public constructor(parentElement: HTMLElement, name: string = 'generic', tagName = 'div') {
        this.uniqueId = Random.getUniqueId();
        this.name = name;
        this.parentElement = parentElement;
        this.subWidgets = [];

        this.widgetElement = document.createElement(tagName);
        this.widgetElement.setAttribute('data-uid', this.uniqueId);
        this.parentElement.append(this.widgetElement);
    }

    public getName(): string {
        return this.name;
    }

    public getParent(): HTMLElement {
        return this.parentElement;
    }

    public refreshParent(): void {
        this.parentElement = this.widgetElement.parentNode.parentElement;
    }

    public getWidgetElement(): HTMLElement {
        return this.widgetElement;
    }

    public addSubWidget(subWidget: Widget): void {
        this.subWidgets.push(subWidget);
        if (subWidget.getParent() !== this.widgetElement) {
            this.widgetElement.appendChild(subWidget.widgetElement);
            subWidget.refreshParent();
        }
    }

    public removeSubWidgetByIndex(index: number): boolean {
        if (index < 0 || index > this.subWidgets.length - 1) return false;

        this.subWidgets[index].getWidgetElement().remove();
        this.subWidgets.splice(index, this.subWidgets.length);

        return true;
    }

    public removeSubWidgetByName(nameToRemove: string): number {
        let originalSubWidgetsCount: number = this.subWidgets.length;

        let index = 0;
        this.subWidgets = this.subWidgets.filter((widget: Widget) => { 
            index++;
            if (widget.getName() === nameToRemove) {
                this.removeSubWidgetByIndex(index);
                return true;
            }
            return false;
        });

        return originalSubWidgetsCount - this.subWidgets.length;
    }

    public getSubWidgetByIndex(index: number): Widget | null {
        if (index < 0 || index > this.subWidgets.length - 1) return null;

        return this.subWidgets[index];
    }

    public subWidgetCount(): number {
        return this.subWidgets.length;
    }

}