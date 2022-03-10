import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LibrarySectionModel } from "./Library_section.model";

@Injectable(
    {providedIn: 'root'}
)
export class LibrariesService {
    private baseUrl:string = "https://polyhaven-940a4-default-rtdb.firebaseio.com/";
    private librariesdEndPoint:string = "libraries.json";

    constructor(private http:HttpClient) {

    }

    getLibraries() {
        return this.http.get<LibrarySectionModel []>(this.baseUrl + this.librariesdEndPoint);
    }

    getLibrary(index:number) {
        return this.http.get<LibrarySectionModel>(this.baseUrl + 'products' + '/' + index + '.json');
    }
} 