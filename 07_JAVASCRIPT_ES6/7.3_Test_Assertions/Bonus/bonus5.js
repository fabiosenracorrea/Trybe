import assert from 'assert';

let password = "something";

function Verify(ps) {
  let errorCount = 0;
  let okTests = 0;

  try {
    const hasLowerCase = ps.match(/[a-z]/);
    assert.notEqual(hasLowerCase, null, "Password should have at least 1 lower case letter");
    okTests += 1;

    if (okTests === 3) return "All good!";

  } catch (err) {
    throw new Error(err);
  }

  try {
    assert.strictEqual((ps.length > 8), true, "Password should be longer than 8 characters");
    okTests += 1;

    if (okTests === 3) return "All good!";

  } catch (err) {
    errorCount += 1;
    if (errorCount > 2) {
      throw new Error(err);
    }
  }

  try {
    assert.notEqual((ps), null, "Password should not be null");
    okTests += 1;

    if (okTests === 3) return "All good!";

  } catch (err) {
    errorCount += 1;
    if (errorCount > 2) {
      throw new Error(err);
    }
  }

  try {
    const hasUpperCase = ps.match(/[A-Z]/);
    assert.notEqual(hasUpperCase, null, "Password should have at least 1 upper case letter");
    okTests += 1;

    if (okTests === 3) return "All good!";

  } catch (err) {
    errorCount += 1;
    if (errorCount > 2) {
      throw new Error(err);
    }
  }

  try {
    const hasNumber = ps.match(/[0-9]/);
    assert.notEqual(hasNumber, null, "Password should have at least 1 number");
    okTests += 1;

    if (okTests === 3) return "All good!";

  } catch (err) {
    errorCount += 1;
    if (errorCount > 2) {
      throw new Error(err);
    }
  }
}

Verify(password);
