import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.auth_routes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./client/client.routes').then((m) => m.client_routes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.admin_routes),
  },
];
