const assert = require('assert')

function greet(name, greeting = 'Hi') {
  return `${greeting} ${name}`
}

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")