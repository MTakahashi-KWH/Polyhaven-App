import { Component, Input } from "@angular/core";


@Component({
    selector: 'app-library-card',
    templateUrl: 'Library.card.component.html',
    styleUrls: ['Library.card.component.css']
})

export class LibraryCardComponent{
    @Input() img: string;
    @Input() name: string;
    @Input() description: string;
    @Input() libcolor: string;
    @Input() btext: string;

    constructor() {
        this.img = "./assets/Polyhaven_logo.png";
        this.name = "";
        this.description = "No assets for you";
        this.libcolor = "alert";
        this.btext = "browse";
    }

}