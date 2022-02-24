import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-patreon-card',
    templateUrl: 'Patreon.card.component.html',
    styleUrls: ['Patreon.card.component.css']
})

export class PatreonCardComponent{
    @Input() img: string;
    @Input() name: string;
    @Input() time: string;

    constructor() {
        this.img = "./assets/Polyhaven_logo.png";
        this.name = "";
        this.time = "just now";
    }

}