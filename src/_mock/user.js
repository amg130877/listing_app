import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

const files = ['nlad_ics_detail', 'nlad_non_ics_detail', 'acp_ ics_detail', 'ebb_ ics_detail', 'xerox_daily_act']

const reports = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: files[index],
  date: faker.date.past().toDateString(),
  totalRecords: faker.datatype.number(),
  sendToMAX: faker.datatype.number(),
  receivedFromMax: faker.datatype.number(),
  invoiceValue: faker.datatype.number(),
  status: sample([1, 2, 3]),
}));

export { reports };

export default users;
