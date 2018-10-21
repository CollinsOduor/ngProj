import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  pics$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPics().subscribe(data => this.pics$ = data);
  }

  public get singleCategory() {
    return this.categories.filter((item, index) => index > 2 )
 }

}
