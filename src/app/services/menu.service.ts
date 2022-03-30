import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private showView: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleView(): void {
    this.showView = !this.showView;
    this.subject.next(this.showView)
  }

  onToggleView(): Observable<any> {
    return this.subject.asObservable();
  }
}
