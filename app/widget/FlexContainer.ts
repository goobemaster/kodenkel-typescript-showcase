import { Container } from "./Container";

export class FlexContainer extends Container {

    public constructor(parentElement: HTMLElement, name = 'generic', tagName = 'section') {
        super(parentElement, name, tagName);

        this.setDisplay('flex');
    }

}