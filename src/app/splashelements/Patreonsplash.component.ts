import { Component } from "@angular/core";
import { patreon_list } from '../splashelements/Patreon_list';
import { PatreonSectionModel } from '../splashelements/Patreon_section.model';

@Component({
    selector: 'app-patreonsplash',
    templateUrl: 'Patreonsplash.component.html',
    styleUrls: ['Patreonsplash.component.css']
})

export class PatreonSplashComponent{
    sections: PatreonSectionModel [] = [];


    constructor(){
        for(var section of patreon_list){
            console.log(section);
            this.sections.push(section);
        }
    }
}