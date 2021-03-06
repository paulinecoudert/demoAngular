import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbMenuModule, NbCardModule, NbInputModule, NbSelectModule, NbDatepickerModule, NbDialogModule, NbCheckboxModule, NbToastrModule, NbIconModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExercicesComponent } from './pages/exercices/exercices.component';
import { Exercice1Component } from './pages/exercices/exercice1/exercice1.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimestampToDatePipe } from './pipes/timestamp-to-date.pipe';
import { LoginComponent } from './pages/login/login.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductComponent } from './pages/product/product.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExercicesComponent,
    Exercice1Component,
    TimestampToDatePipe,
    LoginComponent,
    ProductAddComponent,
    ProductComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,

//Ajout de modules
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(), //.forRoot() c'est des ajouts de services en +
    NbDialogModule.forRoot(),
    NbCheckboxModule,
    NbToastrModule.forRoot(),
    NbIconModule,
    NbChatModule.forRoot(),


  AngularFireModule.initializeApp(environment.firebase),  
  FormsModule,
 
  
//fin des modules d'ajouts

    NbEvaIconsModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
