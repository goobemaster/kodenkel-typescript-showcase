import { Container } from "./widget/Container";
import { FlexContainer } from "./widget/FlexContainer";
import { Card } from "./widget/Card";
import { Random } from "./utility/Random";

/**
 * Entry point for the application, and with the help of TypeScript,
 * this class follows the singleton pattern as well.
 */
export class Application {
    private static instance: Application;

    protected BODY: HTMLElement = document.getElementsByTagName('body')[0];
    protected HTML: HTMLElement = document.getElementsByTagName('html')[0];

    private constructor() {
        this.HTML.style.padding = '15px';

        let outerContainer = new Container(this.BODY, 'outer');
        outerContainer.setPadding(15);
        outerContainer.setBackgroundColor('lightskyblue');
        outerContainer.setHeight('250px');

        let innerContainer = new FlexContainer(this.BODY, 'inner', 'div');
        innerContainer.setPadding(15);
        innerContainer.setBackgroundColor('#ffffff');

        outerContainer.addSubWidget(innerContainer);

        for (let i = 0; i < 5; i++) {
            let randomCard: Card = new Card(innerContainer.getWidgetElement(), 'card_' + i.toString());
            randomCard.setTitle(Random.getString());
            randomCard.setContent('Lorem Ipsum...');
            if (i < 4) randomCard.getWidgetElement().style.marginRight = '15px';

            innerContainer.addSubWidget(randomCard);
        }
        console.log(innerContainer.subWidgetCount() + ' sub widgets added.');

        let firstCard: Card = innerContainer.getSubWidgetByIndex(0) as Card;
        firstCard.setTitle('Composite Pattern');

        innerContainer.removeSubWidgetByName('card_1');

        console.log(innerContainer.subWidgetCount() + ' sub widgets remain after removal.');
    }

    public static getInstance(): Application {
        if (Application.instance === undefined) Application.instance = new Application();
        return Application.instance;
    }
}

const app = Application.getInstance();