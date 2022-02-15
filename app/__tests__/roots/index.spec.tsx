function returnOne() {
  return 1;
}

describe('returnOne', () => {
  it('should return 1', () => {
   expect(returnOne()).toEqual(1); 
  })
})

export {}
