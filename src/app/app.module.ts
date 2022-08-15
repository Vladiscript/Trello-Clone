import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './modules/layout/layout.module';
import { HomeModule } from './modules/home/home.module';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModalModule } from './modules/shared/modals/header-modal/header-modal.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        HomeModule,
        StoreModule.forRoot({}, {}),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatIconModule,
        HeaderModalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
