describe('custom testing framework', function(){
  it('has a equal matcher', function(){
    expect(equal(5,5));
    expect(equal(5,10));
  });

  it('has a notEqual matcher', function(){
    expect(notEqual(5,6));
    expect(notEqual(5,5));
  });

  it('has a string contains matcher', function(){
    expect(contains('string', 'i'));
    expect(contains('string', 'x'));
  });

  it('has a array contains matcher', function(){
    expect(contains([1,2,3], 2));
    expect(contains([1,2,3], 4));
  });

  it('has a notContains matcher', function(){
    expect(notContains('string', 'x'));
    expect(notContains('string', 'i'));
  });
});
