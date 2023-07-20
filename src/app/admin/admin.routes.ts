import { Routes } from '@angular/router';

export const admin_routes: Routes = [
  {
    path: 'product',
    loadComponent: () =>
      import('./product/product.component').then((m) => m.ProductComponent),
  },
];
