import { Pipe, PipeTransform } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';

@Pipe({
  name: 'isToday',
})
export class IsTodayPipe implements PipeTransform {
  transform(value: TuiDay | null, ...args: unknown[]): boolean {
    if (!value) {
      return false;
    }
    const today = TuiDay.currentLocal();
    return value.daySame(today);
  }
}
