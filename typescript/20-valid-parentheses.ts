/**
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 1. Open brackets must be closed in the correct order.
 *
 * @example1
 * Input: s = "()"
 * Output: true
 *
 * @example2
 * Input: s = "([)]"
 * Output: false
 *
 * @constraints
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */
describe('20 Valid Parentheses', () => {
  test('solution', () => {
    function isValid(s: string): boolean {
      const map = { '{': '}', '[': ']', '(': ')' }
      const stack = []
      for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) in map) {
          stack.push(s.charAt(i))
        } else if (map[stack[stack.length - 1]] === s.charAt(i)) {
          stack.pop()
        } else {
          return false
        }
      }
      return stack.length == 0
    }

    expect(isValid('{[]}')).toBe(true)
    expect(isValid('[(]')).toBe(false)
  })

  test('extra solution', () => {
    /**
     * @description handle for extra characters besides brackets
     * as a practical application
     */
    const isValid = (brackets: string): boolean => {
      const map = { '{': '}', '[': ']', '(': ')' }
      const endings = Object.values(map)
      const stack: (keyof typeof map)[] = [] // LIFO
      for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets.charAt(i) // single element brackets[i]
        if (bracket in map) {
          // I'm not a big fan of type casting, but haven't found a workaround yet
          stack.push(bracket as keyof typeof map)
        } else if (
          // not really necessary unless the string has extra content
          endings.includes(bracket)
        ) {
          const last = stack.pop() // Last in first out
          if (!last || map[last] !== bracket) {
            return false
          }
        }
      }
      return stack.length === 0 // all brackets have been matched
    }

    expect(isValid('')).toBe(true)
    expect(isValid('{{}{{}}}')).toBe(true)
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('[()]({{}})')).toBe(true)
    expect(isValid('}{')).toBe(false)
    expect(isValid('([)]')).toBe(false)
    expect(isValid('{]}')).toBe(false)
    expect(isValid('(x^2 + x + a}')).toBe(false)
    expect(isValid('invalid markdown link](https://github.com)')).toBe(false)
    expect(isValid('[2 * (x + 1)]')).toBe(true)
    expect(isValid('[valid markdown link](https://github.com)')).toBe(true)
  })
})
