import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiCalendarModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TuiCalendarRangeModule } from '@taiga-ui/kit';
import { TimelineCalendarComponent } from './components/timeline/timeline-calendar/timeline-calendar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IsTodayPipe } from './pipes/is-today.pipe';

@NgModule({
  declarations: [AppComponent, TimelineComponent, TimelineCalendarComponent, IsTodayPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiCalendarModule,
    TuiCalendarRangeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
