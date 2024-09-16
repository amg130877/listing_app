import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
import { fDateTime } from '../utils/formatTime';

// ----------------------------------------------------------------------

const statuses = ['In Underwriting', 'App Saved', 'Open', 'Closed'];

const users = [...Array(250)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['Approved', 'Un Approved']),
  businessName: faker.company.name(),
  legalName: faker.company.name(),
  phoneNumber: faker.phone.number(),
  agentName: faker.name.fullName(),
  agentCode: faker.datatype.number(),
  nbdName: faker.name.fullName(),
  subAgentCode: faker.datatype.number(),
  agentEmail: faker.internet.email(),
  agentMobileNumber: faker.phone.number(),
  ownerName: faker.name.fullName(),
  accountStatus: sample(statuses),
  createdAt: fDateTime(faker.date.past()),
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

const reports = [...Array(250)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: files[index],
  date: faker.date.past().toDateString(),
  totalRecords: faker.datatype.number(),
  sendToMAX: faker.datatype.number(),
  receivedFromMax: faker.datatype.number(),
  invoiceValue: faker.datatype.number(),
  status: sample([1, 2, 3]),
  businessName: faker.company.name(),
  legalName: faker.company.name(),
  phoneNumber: faker.phone.number(),
  agentName: faker.name.fullName(),
  ownerName: faker.name.fullName(),
  accountStatus: sample(statuses),
  createdAt: faker.date.past()
}));

export { reports };

export default users;
