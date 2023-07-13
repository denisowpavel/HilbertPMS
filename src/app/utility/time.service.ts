import { Injectable } from '@angular/core';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  public differenceInDays(range: TuiDayRange | null): number {
    if (!range) {
      return 0;
    }
    return TuiDay.lengthBetween(range.from, range.to);
  }

  public rangeArray(range: TuiDayRange | null): TuiDay[] {
    const list: TuiDay[] = [];
    if (!range) {
      return list;
    }
    for (let i = 0; i <= this.differenceInDays(range); i++) {
      list.push(range.from.append({ year: 0, month: 0, day: i }));
    }
    return list;
  }
}
