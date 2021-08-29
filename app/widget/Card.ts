import { Container } from "./Container";

export class Card extends Container {
    private titleElement: HTMLElement;
    private contentElement: HTMLElement;

    public constructor(parentElement: HTMLElement, name = 'generic', tagName = 'div',
        title = '', content = '') {

        super(parentElement, name, tagName);

        this.widgetElement.classList.add('card');

        this.titleElement = document.createElement('h1');
        this.widgetElement.append(this.titleElement);
        this.setTitle(title);

        this.contentElement = document.createElement('p');
        this.widgetElement.append(this.contentElement);
        this.setContent(content);
    }

    public setTitle(title: string): void {
        this.titleElement.textContent = title;
    }

    public getTitle(): string {
        return this.contentElement.textContent;
    }

    public setContent(title: string): void {
        this.contentElement.textContent = title;
    }

    public getContent(): string {
        return this.contentElement.textContent;
    }    
}