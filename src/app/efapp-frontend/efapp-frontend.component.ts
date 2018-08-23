import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-efapp-frontend',
  templateUrl: './efapp-frontend.component.html',
  styleUrls: ['./efapp-frontend.component.css']
})
export class EfappFrontendComponent {
  options: FormGroup;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, fb: FormBuilder) {
      this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }
}
