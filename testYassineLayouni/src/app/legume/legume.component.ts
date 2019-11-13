import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {
  @Input() legume;
  qnt : number;
  prix1 : number;;
  onCalculPrix(){
   this.prix1 = this.legume.prix * this.qnt;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
