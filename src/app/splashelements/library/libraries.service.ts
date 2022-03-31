import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from "@angular/core";
import { LibrarySectionModel } from "./Library_section.model";

@Injectable(
    {providedIn: 'root'}
)
export class LibrariesService {

    constructor(private db: AngularFireDatabase) {

    }

    getLibraries() {
        return this.db.list<LibrarySectionModel>("libraries").valueChanges();
    }

    getLibrary(index:number) {
        return this.db.list<LibrarySectionModel>("libraries", ref => ref.equalTo(index)).valueChanges();
    }
} 