import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {HeroService} from '../providers/hero.service';
import {WidgetPubsubService} from "../providers/widget-pubsub.service";


@Component({
  selector: 'app-root-a',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  param = {value: 'world'};
  constructor(private http: HttpClient, private heroService: HeroService, private translate: TranslateService, private widgetPubSubService: WidgetPubsubService) {}
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => {
      console.log(data);
    });

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    const self = this;
    this.widgetPubSubService.subscribe('test', (evt) => { self.title = evt });

  }
}

