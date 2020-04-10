import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControladorEventosService {

  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  executar(valor: boolean) {
    this.messageSource.next(valor);
  }

}
