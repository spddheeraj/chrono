import * as chrono from '../../src/chrono';
import { testSingleCase } from '../test_util';

test("Test - Single Expression", function() {

    testSingleCase(chrono, 'this week', new Date(2017, 11-1, 19), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2017);
        expect(result.start.get('month')).toBe(11);
        expect(result.start.get('day')).toBe(19);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'this month', new Date(2017, 11-1, 19), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2017);
        expect(result.start.get('month')).toBe(11);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'this month', new Date(2017, 11-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2017);
        expect(result.start.get('month')).toBe(11);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'this year', new Date(2017, 11-1, 19), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2017);
        expect(result.start.get('month')).toBe(1);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });


    testSingleCase(chrono, 'next week', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(8);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next 2 weeks', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(15);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'last week', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(24);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'last 2 weeks', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(17);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next day', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(2);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next 2 days', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(3);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'last day', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(30);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'last 2 days', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(29);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next month', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(11);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next 2 months', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(12);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'last month', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'last 2 months', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(8);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next few weeks', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(22);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next four weeks', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(29);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'past week', new Date(2016, 10-1, 1), (result, text) => {

        expect(result.text).toBe(text);
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(9);
        expect(result.start.get('day')).toBe(24);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono.en, 'next week at 10-06-2016', new Date(2016, 10-1, 1), (result) => {
        expect(result.text).toBe('next week at 10-06-2016');
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(10);
        expect(result.start.get('day')).toBe(6);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono.en, 'next month at 11-06-2016', new Date(2016, 10-1, 1), (result) => {
        expect(result.text).toBe('next month at 11-06-2016');
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(11);
        expect(result.start.get('day')).toBe(6);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next year at Feb-2017', new Date(2016, 10, 10), (result) => {
        expect(result.text).toBe('next year at Feb-2017');
        expect(result.start.get('year')).toBe(2017);
        expect(result.start.get('month')).toBe(2);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'next week (Dec 2016)', new Date(2016, 11, 27), (result) => {
        expect(result.text).toBe('next week (Dec 2016')
        expect(result.start.get('year')).toBe(2016);
        expect(result.start.get('month')).toBe(12);
        expect(result.start.get('day')).toBe(1);
        expect(result.start.get('hour')).toBe(12);
    });

    testSingleCase(chrono, 'She is getting married next year (July 2013).', new Date(2012,7,10), (result) => {
        expect(result.start).not.toBeNull()
        expect(result.start.get('year')).toBe(2013)
        expect(result.start.get('month')).toBe(7)
        expect(result.start.get('day')).toBe(1)

        expect(result.index).toBe(23)
        expect(result.text).toBe('next year (July 2013')

        expect(result.start).toBeDate(new Date(2013, 7-1, 1, 12));
    });
});
