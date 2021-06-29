/**
 * @url https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 *
 * @description You are given a string s consisting of lowercase English letters.
 * A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 * We repeatedly make duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made.
 * It can be proven that the answer is unique.
 *
 * @example1
 * Input: s = "abbaca"
 * Output: "ca"
 * Explanation: For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal,
 * and this is the only possible move. The result of this move is that the string is "aaca", of which
 * only "aa" is possible, so the final string is "ca".
 *
 * @example2
 * Input: s = "azxxzy"
 * Output: "ay"
 *
 * @constraints
 * - 1 <= s.length <= 105
 * - s consists of lowercase English letters.
 */
describe('1047 Remove All Adjacent Duplicates In String', () => {
  it('stack solution', () => {
    function removeDuplicates(s: string): string {
      const stack = []
      for (let i = 0; i < s.length; i++) {
        const last = stack[stack.length - 1]
        if (last == s.charAt(i)) {
          stack.pop()
        } else {
          stack.push(s.charAt(i))
        }
      }
      return stack.join('')
    }

    expect(removeDuplicates('abbaca')).toBe('ca')
    expect(removeDuplicates('azxxzy')).toBe('ay')
  })
})
