import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



import { AppComponent } from './app.component';
import { RepoListComponent } from './repo/repo-list/repo-list.component';
import { RepoListService } from './repo/repo-list/services/repo-list.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    LoadingBarHttpClientModule,
    RouterModule.forRoot([
      { path: '', component: RepoListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    RepoListComponent,
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [RepoListService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/