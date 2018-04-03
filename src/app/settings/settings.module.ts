import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { LanguageComponent } from './components/language/language.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountComponent, LanguageComponent]
})
export class SettingsModule { }
