import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const id = Number(route.params['id']);
  if (isNaN(id) || id < 1)
  {
    alert('Invalid product id');
    inject(Router).navigate(['/products']);
    return false;
  }
  return true;
};
