/**
 * @param {number} n
 * @return {number}
 */

/*----- solution 1 -----
Two iterations.
Time complexity is O(n*sqrt(n))
Space complexity is O(1)
*/
var countPrimes = function (n) {
  let isPrime = num => {
    for (let i = 2; i ** 2 <= num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      result++
    }
  }
  return result
}

/*----- solution 2 -----
Sieve of Eratosthenes
Time complexity is O(n*log(log(n)))
Space complexity is O(n)
*/
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1)
  let result = 0

  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      result++
      for (let j = i ** 2; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return result
}
