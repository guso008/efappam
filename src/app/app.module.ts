import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EfappNavComponent } from './efapp-nav/efapp-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import { EfappDashboardComponent } from './efapp-dashboard/efapp-dashboard.component';
import { EfappTableComponent } from './efapp-table/efapp-table.component';
import { EfappIndexfrontendComponent } from './efapp-indexfrontend/efapp-indexfrontend.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { EfappFrontendComponent } from './efapp-frontend/efapp-frontend.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EfappamTableHeroesComponent } from './efappam-table-heroes/efappam-table-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: FirstPageComponent },
  { path: 'heroes', component: SecondPageComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EfappNavComponent,
    EfappDashboardComponent,
    EfappTableComponent,
    EfappIndexfrontendComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    EfappFrontendComponent,
    HeroesComponent,
    EfappamTableHeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
