import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  imports: [MatIconModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  logoPage = 'B R I A N';
  linkLinkedin:string = 'https://www.linkedin.com/in/brianfreijomil/'
  linkGitHub:string = 'https://github.com/brianfreijomil'
  email:string = 'brianfreijomil@hotmail.com'

  linkPostBengalu:string = "https://www.linkedin.com/feed/update/urn:li:activity:7290031673193164800/?actorCompanyId=101494190";
  linkTechforbChallenge:string = "https://challengetechforb.netlify.app";
  linkTechforbChallengeFront:string = "https://github.com/brianfreijomil/desafio-frontend-techforb"
  linkTechforbChallengeBack:string = "https://github.com/brianfreijomil/desafio-backend-techforb"

  @ViewChild('backApp') backApp!: ElementRef;
  scrolled = false;
  
  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    if (this.backApp) {
      this.backApp.nativeElement.addEventListener('scroll', () => {
        this.scrolled = this.backApp.nativeElement.scrollTop > 30;
      });
    }
  }

  downloadResumeEn() {
    this.http.get('brian-freijomil-en-cv.pdf', { responseType: 'blob' }).subscribe((blob: Blob) => {
      saveAs(blob, 'brian-freijomil-en-cv.pdf');
    });

  }

  downloadResumeEs() {
    this.http.get('brian-freijomil-cv.pdf', { responseType: 'blob' }).subscribe((blob: Blob) => {
      saveAs(blob, 'brian-freijomil-cv.pdf');
    });

  }

}
