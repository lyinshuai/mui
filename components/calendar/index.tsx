import { Moment } from 'moment';
import momentGenerateConfig from '../date-picker/rc-picker/generate/moment';
import generateCalendar, { CalendarProps } from './generateCalendar';

const Calendar = generateCalendar<Moment>(momentGenerateConfig);

export { CalendarProps };
export default Calendar;
