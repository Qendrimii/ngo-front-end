import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paymentsFilter'
})
export class PaymentsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
