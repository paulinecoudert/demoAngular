import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { LoaderComponent } from '../components/loader/loader.component';
import {delay,finalize} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(
    private dialog : NbDialogService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let ref = this.dialog.open(LoaderComponent, {closeOnBackdropClick: false});
    return next.handle(request).pipe(delay(500),finalize(() => {
      ref.close();
    }));


  }
}
