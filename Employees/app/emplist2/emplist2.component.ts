import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/myservice.service';
@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {
Empinfo: any;

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.Empinfo = this.myservice.employeenames();
  }

}
