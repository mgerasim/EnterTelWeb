import { BrowserModule } from '@angular/platform-browser';
import {forwardRef, NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularSplitModule} from 'angular-split';
import {AppInterceptor} from './app-intercepter';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeListModule } from '@progress/kendo-angular-treelist';
import { MenuModule } from '@progress/kendo-angular-menu';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { UploadModule } from '@progress/kendo-angular-upload';
import { LayoutModule } from '@progress/kendo-angular-layout';













export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => AppInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSplitModule.forRoot(),
    AppRoutingModule,
    TreeViewModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TreeListModule,
    MenuModule,
    DialogsModule,
    ButtonsModule,
    LabelModule,
    InputsModule,
    DateInputsModule,
    DropDownsModule,
    UploadModule,
    LayoutModule
  ],
  providers: [
    AppInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
