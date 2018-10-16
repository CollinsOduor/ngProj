import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pics',
  templateUrl: './pics.component.html',
  styleUrls: ['./pics.component.css']
})
export class PicsComponent implements OnInit {

  pics$: Object;

  constructor(private pic: DataService) { }

  ngOnInit() {
    this.pic.getPics().subscribe(data => this.pics$ = data);
  }

}
