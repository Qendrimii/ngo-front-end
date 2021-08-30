import { PaymentsFilterPipe } from './payments-filter.pipe';

describe('PaymentsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PaymentsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
