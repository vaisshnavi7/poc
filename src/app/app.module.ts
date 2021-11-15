import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from ''
import { reducer } from './store/reducer/details.reducer';

import{StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../app/form/form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
