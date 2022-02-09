import { Component } from "@angular/core";
import { library_list } from '../splashelements/Library_list';
import { LibrarySectionModel } from '../splashelements/Library_section.model';

@Component({
    selector: 'app-librarysplash',
    templateUrl: 'Librarysplash.component.html',
    styleUrls: ['Librarysplash.component.css']
})

export class LibrarySplashComponent{
    sections: LibrarySectionModel [] = [];


    constructor(){
        for(var section of library_list){
            console.log(section);
            this.sections.push(section);
        }
    }
}