
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { PatreonSectionModel } from "src/app/splashelements/Patreon_section.model";
@Injectable(
    {providedIn: 'root'}
)
export class PatronService {
    constructor(private db: AngularFireDatabase) {
    }
    getPatrons() {
        return this.db.list<PatreonSectionModel>("patrons").valueChanges();
    }

    addPatron(product: PatreonSectionModel) {
        this.db.list<PatreonSectionModel>("products").push(product);
    }
} 