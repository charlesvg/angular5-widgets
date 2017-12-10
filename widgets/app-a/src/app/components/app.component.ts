import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HeroService} from '../services/hero.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  param = {value: 'world'};
  constructor(private http: HttpClient, private heroService: HeroService, private translate: TranslateService) {}
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => {
      console.log(data);
    });

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

  }
}

