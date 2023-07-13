import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { TuiDayOfWeek, TuiDayRange } from '@taiga-ui/cdk';
import { TUI_FIRST_DAY_OF_WEEK } from '@taiga-ui/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-timeline-calendar',
  templateUrl: './timeline-calendar.component.html',
  styleUrls: ['./timeline-calendar.component.scss'],
  providers: [
    {
      provide: TUI_FIRST_DAY_OF_WEEK,
      useValue: TuiDayOfWeek.Monday,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimelineCalendarComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineCalendarComponent implements OnInit, ControlValueAccessor {
  public value: TuiDayRange | null = null;

  ngOnInit() {}

  onChange(_: any) {
    console.log(_);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}

  setDisabledState(isDisabled: boolean) {}

  rangeChanged(value: TuiDayRange | null) {
    this.value = value;
    this.onChange(value);
  }
}
