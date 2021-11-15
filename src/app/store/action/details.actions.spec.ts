
import * as fromDetails from './details.actions';
import { Details } from '../../Model/details';

describe('empEmployees', () => {
  it('should return an action', () => {
    const emp = new Details();
    expect(fromDetails.addDetails(emp).type).toBe('[Employee] Emp Employees');
  });
});
