describe('135 Candy', () => {
  test('solution', () => {
    function candy(ratings: number[]): number {
      let candy = 0
      let j = 0
      for (let i = 0; i < ratings.length; i++) {
        j++
        if (ratings[j] > ratings[i]) {
          candy += 2
        } else {
          candy++
        }
      }
      return candy
    }

    expect(candy([1, 0, 2])).toBe(5)
    expect(candy([1, 2, 2])).toBe(4)
    expect(candy([1, 1, 2])).toBe(5)
    expect(candy([1, 2, 3, 4])).toBe(7)
  })
})
