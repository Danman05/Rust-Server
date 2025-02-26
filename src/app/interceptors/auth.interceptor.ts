import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  try {
  if (req.url.includes('/api/auth')) {
    req = req.clone({
      withCredentials: true
    });
  }
  return next(req);
  } catch (error) {
    return next(req)
  }
};
