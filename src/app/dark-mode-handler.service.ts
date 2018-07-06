import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DarkModeHandlerService {
public subject = new BehaviorSubject<any>(true) ;
 
setDarkMode(darkModeState: boolean){
this.subject.next(darkModeState );
}
}
