import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-legumes',
  templateUrl: './list-legumes.component.html',
  styleUrls: ['./list-legumes.component.css']
})
export class ListLegumesComponent implements OnInit {
  tablegumes = [{image : "../assets/tomate.jpg",nom : "tomate",prix:2.8,frais : false},
                {image : "../assets/radis.jpg",nom : "radis",prix:1.8,frais : true},
                {image : "../assets/carotte.jpg",nom : "carotte",prix:3.8,frais : false},
                ]

min : number;
rechercheMin()
{
  let minimum = 0;
  for(let i = 0;i < 3;i++)
  {
    if(this.tablegumes[i].prix > this.min )
    {
      minimum++;
    }
  }
  return minimum;
}
  constructor() { }

  ngOnInit() {
  }

}
