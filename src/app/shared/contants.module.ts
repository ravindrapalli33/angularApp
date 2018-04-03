import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ConstantsModule {
    dev: {
        baseApiUrl: 'http://localhost:8080/angularBankApp',
        appVersion: '1.0', // Shown at login screen
        defaultLang: 'en'
    };

    production: {
        baseApiUrl: 'http://localhost:8080/angularBankApp',
        appVersion: '1.0', // Shown at login screen
        defaultLang: 'en'
    };

    env: 'dev'; // Environment to use
}
