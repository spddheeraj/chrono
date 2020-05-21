import * as chrono from '../../src/chrono';
import { testSingleCase } from '../test_util';

test("Test - Single Expression", function() {

    testSingleCase(chrono, '雞2016年9月3號全部都係雞', new Date(2012,8-1,10), (result) => {
        expect(result.index).toBe(1);
        expect(result.text).toBe('2016年9月3號');

        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(3);

        expect(result.start).toBeDate(new Date(2016, 9-1, 3, 12));
    });

    testSingleCase(chrono, '雞二零一六年，九月三號全部都係雞', new Date(2012,8-1,10), (result) => {
        expect(result.index).toBe(1);
        expect(result.text).toBe('二零一六年，九月三號');

        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(3);

        expect(result.start).toBeDate(new Date(2016, 9-1, 3, 12));
    });

    testSingleCase(chrono, '雞九月三號全部都係雞', new Date(2014,8-1,10), (result) => {
        expect(result.index).toBe(1);
        expect(result.text).toBe('九月三號');

        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2014);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(3);

        expect(result.start).toBeDate(new Date(2014, 9-1, 3, 12));
    });
});


test("Test - Range Expression", function() {

    testSingleCase(chrono, '2016年9月3號-2017年10月24號', new Date(2012,8-1,10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe('2016年9月3號-2017年10月24號');

        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(3);

        expect(result.start).toBeDate(new Date(2016, 9-1, 3, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get('year')).toBe(2017);
        expect(result.end.get('month')).toBe(10);
        expect(result.end.get('day')).toBe(24);

        expect(result.end).toBeDate(new Date(2017, 10-1, 24, 12));
    });

    testSingleCase(chrono, '二零一六年九月三號ー2017年10月24號', new Date(2012,8-1,10), (result) => {
        expect(result.index).toBe(0);
        expect(result.text).toBe('二零一六年九月三號ー2017年10月24號');

        expect(result.start).not.toBeNull();
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(3);

        expect(result.start).toBeDate(new Date(2016, 9-1, 3, 12));

        expect(result.end).not.toBeNull();
        expect(result.end.get('year')).toBe(2017);
        expect(result.end.get('month')).toBe(10);
        expect(result.end.get('day')).toBe(24);

        expect(result.end).toBeDate(new Date(2017, 10-1, 24, 12));
    });

});
