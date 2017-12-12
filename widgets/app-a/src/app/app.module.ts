import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';


import { AppComponent } from './components/app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from "./providers/http-loader.factory";
import {HeroService} from "./providers/hero.service";
import {MainInterceptor} from "./providers/main-interceptor";
import {WindowRefService} from "./providers/window-ref";
import {WidgetPubsubService} from "./providers/widget-pubsub.service";
import {WidgetPubSubBackbaseService} from "./providers/widget-pubsub-backbase.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // ,
    // Warning: HttpClientInMemoryWebApiModule will intercept calls to assets/i18n/en.json
    // // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // // and returns simulated server responses.
    // // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    HeroService,
    WindowRefService,
    {provide: Window, useValue: window },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true,
    },
    {
      provide: WidgetPubsubService,
      useClass: WidgetPubSubBackbaseService
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
