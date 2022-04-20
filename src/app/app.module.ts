import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { RecipeComponent } from './partials/components/recipe/recipe.component';
import { ButtonComponent } from './partials/custom-elements/button/button.component';
import { InputComponent } from './partials/custom-elements/input/input.component';
import { TabListComponent } from './partials/custom-elements/tab-list/tab-list.component';
import { FormsModule } from '@angular/forms';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { LinkComponent } from './partials/custom-elements/link/link.component';
import { TestDirectiveDirective } from './partials/directives/test-directive.directive';
import { BetterTestDirective } from './partials/directives/better-test.directive';
import { UnlessDirective } from './partials/directives/unless.directive'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RecipeComponent,
    ButtonComponent,
    InputComponent,
    TabListComponent,
    RecipeListComponent,
    ShoppingListComponent,
    LinkComponent,
    TestDirectiveDirective,
    BetterTestDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
