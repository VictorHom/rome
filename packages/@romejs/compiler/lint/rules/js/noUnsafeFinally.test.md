# `noUnsafeFinally.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/js/noUnsafeFinally.test.ts --update-snapshots` to update.

## `disallow unsafe usage of break, continue, throw and return`

### `0`

```

 unknown:7:2 lint/js/noUnsafeFinally ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Using JSReturnStatement inside a finally clause is unsafe.

    5 │   throw err;
    6 │  } finally {
  > 7 │   return 1;
      │   ^^^^^^^^^
    8 │  }
    9 │ }

  ℹ Do not use control flow statements inside finally clauses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
function greet1() {
	try {
		throw new Error("Try");
	} catch (err) {
		throw err;
	} finally {
		return 1;
	}
}

```

### `1`

```

 unknown:7:2 lint/js/noUnsafeFinally ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Using JSBreakStatement inside a finally clause is unsafe.

    5 │   throw err;
    6 │  } finally {
  > 7 │   break;
      │   ^^^^^^
    8 │  }
    9 │ }

  ℹ Do not use control flow statements inside finally clauses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
function greet2() {
	try {
		throw new Error("Try");
	} catch (err) {
		throw err;
	} finally {
		break;
	}
}

```

### `2`

```

 unknown:7:2 lint/js/noUnsafeFinally ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Using JSContinueStatement inside a finally clause is unsafe.

    5 │   throw err;
    6 │  } finally {
  > 7 │   continue;
      │   ^^^^^^^^^
    8 │  }
    9 │ }

  ℹ Do not use control flow statements inside finally clauses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
function greet3() {
	try {
		throw new Error("Try");
	} catch (err) {
		throw err;
	} finally {
		continue;
	}
}

```

### `3`

```

 unknown:7:2 lint/js/noUnsafeFinally ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Using JSThrowStatement inside a finally clause is unsafe.

    5 │   throw err;
    6 │  } finally {
  > 7 │   throw new Error("Finally");
      │   ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    8 │  }
    9 │ }

  ℹ Do not use control flow statements inside finally clauses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
function greet4() {
	try {
		throw new Error("Try");
	} catch (err) {
		throw err;
	} finally {
		throw new Error("Finally");
	}
}

```
