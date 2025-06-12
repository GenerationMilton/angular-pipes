import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [ LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
 
})
export default class BasicPageComponent { 

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('milton');
  nameUpper = signal('MILTON');
  fullName = signal('MiLToN MuNOz');


  customDate = signal( new Date() );

  tickingDateEffect = effect((onCleanup)=>{
    const interval = setInterval(()=>{
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(()=>{
      clearInterval(interval);
    });
  
  });

  changeLocale(locale: AvailableLocale ){
    console.log({ locale })
    this.localeService.changeLocale(locale);
  }
}
