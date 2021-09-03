import { getActivity, getActivityByKey } from './request-commands';

Cypress.Commands.add('getActivity', getActivity);
Cypress.Commands.add('getActivityByKey', getActivityByKey);
