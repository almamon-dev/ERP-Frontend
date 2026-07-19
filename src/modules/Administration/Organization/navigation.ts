import { companyNavigation } from './Companies/navigation';
import { branchNavigation } from './Branches/navigation';
import { businessUnitNavigation } from './BusinessUnits/navigation';
import { departmentNavigation } from './Departments/navigation';
import { designationNavigation } from './Designations/navigation';
import { teamNavigation } from './Teams/navigation';

export const organizationNavigation = [
  ...companyNavigation,
  ...branchNavigation,
  ...departmentNavigation,
  ...businessUnitNavigation,
  ...designationNavigation,
  ...teamNavigation,
];
