# `iframeHasTitle.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/jsx-a11y/iframeHasTitle.test.ts --update-snapshots` to update.

## `jsx-a11y iframe has title`

### `0`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe />
    ^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
<iframe />;

```

### `1`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe {...props} />
    ^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
<iframe {...props} />;

```

### `2`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title="" />
    ^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
<iframe title='' />;

```

### `3`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title={""} />
    ^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
<iframe title={""} />;

```

### `4`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title={``} />
    ^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
<iframe title={``} />;

```

### `5`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title={undefined} />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
<iframe title={undefined} />;

```

### `6`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title={false} />
    ^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
<iframe title={false} />;

```

### `7`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title={true} />
    ^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `7: formatted`

```
<iframe title={true} />;

```

### `8`

```

 unknown:1 lint/jsx-a11y/iframeHasTitle ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Provide a title attribute when using iframe elements.

    <iframe title={42} />
    ^^^^^^^^^^^^^^^^^^^^^

  ℹ Screen readers rely on the title set on an iframe to describe the content being displayed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `8: formatted`

```
<iframe title={42} />;

```

### `9`

```
✔ No known problems!

```

### `9: formatted`

```
<iframe title='title' />;

```

### `10`

```
✔ No known problems!

```

### `10: formatted`

```
<iframe title={title}></iframe>;

```
