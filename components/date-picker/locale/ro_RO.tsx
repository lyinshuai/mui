import CalendarLocale from '../rc-picker/locale/ro_RO';
import TimePickerLocale from '../../time-picker/locale/ro_RO';
import { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
    placeholder: 'Selectează data',
    rangePlaceholder: ['Data start', 'Data sfârșit'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;
