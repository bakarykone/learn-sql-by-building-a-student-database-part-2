const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const selectAll = /statement:select\*frommajors;/i;

    assert(selectAll.test(lastLog) && !/ERROR/.test(lastLog));
  });
});
