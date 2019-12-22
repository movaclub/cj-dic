import {BehaviorSubject, Observable} from "rxjs";

export interface InputInterface {
  c2zi: string;
  zi2code: string;
  c2ziRes: [];
  zi2codeRes: [];
  curPage: string;
}

export class InputService {

  private inputContainer: InputInterface = {
    c2zi: '',
    zi2code: '',
    c2ziRes: [],
    zi2codeRes: [],
    curPage: 'startPage'
  };

  private bSubj = new BehaviorSubject(this.inputContainer);
  private iObservable = this.bSubj.asObservable();
  getInputs():Observable<InputInterface> {
    return this.iObservable;
  }

  // UI/screen switcher
  savePage( page: string ): void {
    this.inputContainer.curPage = page;
    console.log('savePage:', this.inputContainer);
    this.bSubj.next({...this.inputContainer});
  }

  saveCode(c2zi: string): void {
    this.inputContainer.c2zi = c2zi;
    console.log('saveCode: ', this.inputContainer);
    this.bSubj.next({...this.inputContainer});
  }

  saveZi(zi2code: string): void {
    this.inputContainer.zi2code = zi2code;
    this.bSubj.next({...this.inputContainer});
  }

}
