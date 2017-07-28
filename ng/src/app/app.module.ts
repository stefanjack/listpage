import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { ListComponent } from './list.component';
import { ListpageComponent } from './listpage.component';
import { EditRowComponent } from './edit-row.component';
import { AddComponent } from './add.component';

import { ListpageService } from './listpage.service';
import { DialogService } from './dialog.service';

import { FocusDirective } from './FocusDirective';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
	SearchComponent,
	ListComponent,
	ListpageComponent,
	EditRowComponent,
	AddComponent,
	FocusDirective
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	HttpModule
  ],
  providers: [ListpageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
