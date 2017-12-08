import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private http: HttpClient, private heroService: HeroService){}
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => {
      console.log(data);
    })

  }
}
