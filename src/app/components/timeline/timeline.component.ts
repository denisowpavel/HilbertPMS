import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TimeService } from '../../utility/time.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit, OnDestroy {
  constructor(
    private timeService: TimeService,
    private cdr: ChangeDetectorRef
  ) {}
  public dateRangeList: TuiDay[] = [];
  public form = new FormGroup({
    dateRange: new FormControl(null),
  });

  ngOnInit() {
    this.form
      .get('dateRange')
      ?.valueChanges.pipe(untilDestroyed(this))
      .subscribe((range) => {
        console.log(range)
        this.dateRangeList = this.timeService.rangeArray(range);
      });
  }
  ngOnDestroy() {}
}
