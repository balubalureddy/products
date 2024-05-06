import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route.paramMap)
  let isAllowed = Number(route.paramMap.get('id')) > 4 ? true : inject(Router).createUrlTree(["./no-access"])
  return isAllowed;
};
