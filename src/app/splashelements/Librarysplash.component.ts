import { Component, OnInit } from "@angular/core";
import { LibrarySectionModel } from '../splashelements/Library_section.model';
import { LibrariesService } from "./libraries.service";

@Component({
    selector: 'app-librarysplash',
    templateUrl: 'Librarysplash.component.html',
    styleUrls: ['Librarysplash.component.css']
})

export class LibrarySplashComponent implements OnInit{
    sections: LibrarySectionModel [] = [];


    constructor(private librariesService: LibrariesService){
    }

    ngOnInit(): void {
        this.librariesService.getLibraries().subscribe((data: LibrarySectionModel []) =>{
            console.log("retreiving our libraries");
            for( var library of data){
                this.sections.push(library);
            }
        })
    }
}