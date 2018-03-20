import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

import { ServicesModule } from '../services/services.module'

import 'rxjs/add/operator/take';
import '../utils/debug.util';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule.forRoot()
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: {
      uri: 'http://localhost:3000'
    }}
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！')
    }
  }
}