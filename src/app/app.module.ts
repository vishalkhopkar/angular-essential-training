import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { lookupListToken, lookupLists } from './providers';
import { HttpClientModule } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { HttpXhrBackend } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists},
    { provide: HttpXhrBackend, useClass: MockXHRBackend}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
