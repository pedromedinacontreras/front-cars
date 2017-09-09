import { createSelector } from 'reselect';

/**
 * Direct selector to the report state domain
 */
const selectReportDomain = () => (state) => state.get('report');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Report
 */

const makeSelectReport = () => createSelector(
  selectReportDomain(),
  (substate) => substate.toJS()
);

export default makeSelectReport;
export {
  selectReportDomain,
};
