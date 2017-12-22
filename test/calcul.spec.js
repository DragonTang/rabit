const { expect } = require('chai')
const { sum } = require('../src/calcul')

describe('sum', () => {
  it('should return 21 when array is [1,2,3,4,5,6]', () => {
    expect(sum([1, 2, 3, 4, 5, 6])).to.equal(21)
  })
})
