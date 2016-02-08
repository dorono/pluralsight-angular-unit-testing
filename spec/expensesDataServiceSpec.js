describe('expensesDataService', function () {

  beforeEach(module('app'));

  it ('should return 3 expense items', inject(function (expensesDataService) {
    expect(expensesDataService.getExpenses().length).toBe(3);
  }));

});
