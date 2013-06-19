describe('filter', function () {
  beforeEach(module('myApp'));

  describe('reverse', function () {
    var msg = {message:"This is data!"};

    beforeEach(module(function($provide) {
      $provide.value('Data', msg);
    }));

    it('should reverse a string', inject(function (reverseFilter) {
      expect(reverseFilter('ABCD')).toEqual('DCBAThis is data!');
    }));
  });
});