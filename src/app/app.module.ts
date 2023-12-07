import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './layout/pages-layout/pages-layout.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { PageTitleComponent } from './layout/components/page-title/page-title.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import { SearchBoxComponent } from './layout/components/header/search-box/search-box.component';
import { UserBoxComponent } from './layout/components/header/user-box/user-box.component';

import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { ArchitectUIState, rootReducer } from './ThemeOptions/store';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    FooterComponent,
    HeaderComponent,
    PageTitleComponent,
    SidebarComponent,
    SearchBoxComponent,
    UserBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    NgReduxModule,
    LoadingBarRouterModule,
    NgbModule,
    // FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    // ChartsModule,
  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
    private devTool: DevToolsExtension) {
    this.ngRedux.configureStore(
    rootReducer,
    {} as ArchitectUIState,
    [],
    [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

    }
 }
