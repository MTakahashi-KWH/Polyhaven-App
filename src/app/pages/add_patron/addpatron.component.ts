import { Component, OnInit } from '@angular/core';
import { PatreonSectionModel } from 'src/app/splashelements/Patreon_section.model';
import { PatronService } from './patron.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addpatron.component.html',
  styleUrls: ['./addpatron.component.css']
})
export class AddPatronComponent implements OnInit {

  constructor(private patreon: PatronService) { }

  ngOnInit(): void {
  }
  addLibrary(lib: PatreonSectionModel){
    console.log('you pressed submit');
    console.log(lib);
  }
}
