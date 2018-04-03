import { Routes } from '@angular/router';
import { AuthGuardService } from './authentication/services/auth-guard.service';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    canActivate: [AuthGuardService],
  },
  { path: '**', component: NotFoundPageComponent },
];
