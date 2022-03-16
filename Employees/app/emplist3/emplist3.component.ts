import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/myservice.service';
@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {
Empinfo: any;

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.Empinfo = this.myservice.employeenames();
  }

}
