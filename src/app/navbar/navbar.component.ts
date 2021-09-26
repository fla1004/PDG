import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-componente-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
         this.mobileQuery = media.matchMedia('(max-width: 600px)');
         this._mobileQueryListener = () => changeDetectorRef.detectChanges();
         this.mobileQuery.addListener(this._mobileQueryListener);
       }
     
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
     
  ngOnInit(): void {
  }
  

}
