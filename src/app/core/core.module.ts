import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationComponent } from './components/application/application.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataViewerComponent } from './components/data-viewer/data-viewer.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    DataViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class CoreModule { }
