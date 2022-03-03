const manager = require('../lib/manager.js');

// jest.mock('../lib/manager.js')
test('managerquestions', () => {
    expect(manager.name).tobe();
    expect(manager.officenumber).tobe();
    expect(manager.department).tobe();

});