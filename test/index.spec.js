const { expect } = require('chai')
const _ = require('../src/calcul')

describe('index sum', () => {
  it('should return 21 when array is [1,2,3,4,5,6]', () => {
    expect(_.sum([1, 2, 3, 4, 5, 6])).to.equal(21)
  })
})
