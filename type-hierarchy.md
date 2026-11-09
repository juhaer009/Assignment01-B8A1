# Type Hirearchy

## Introduction

I kept mixing these three up because they all show up when a normal type does not fit. They sit at the edges: `unknown` is the top type, `never` is the bottom type, and `any` steps off the ladder and turns the check off.

## Where they sit

I can assign a number, a string, or an object to `unknown`, but going the other way is blocked until I narrow it.

```ts
function shout(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return "not a string";
}
```

`any` accepts those same values, and the split shows up on the way out. TypeScript lets me call a method on it and pass it where a `number` is expected, so a string at runtime still compiles.

`never` means no value. A function that always throws returns `never`, and after I handle every member of a union the leftover is `never` too. I can assign `never` to a `string`, because nothing will ever arrive and break that assignment. I cannot assign a `string` to `never`.

```ts
function crash(message: string): never {
  throw new Error(message);
}
```

## Why unknown is preferred

`any` is quicker to write, and it hides mistakes. Code can call any method on it and pass it into any parameter, so a bad JSON body still typechecks and fails later at runtime. `unknown` blocks that. A `.map` call, a property read, or an assignment to `string` is an error until the value is narrowed with `typeof` or `Array.isArray`. Untyped input, such as JSON or query params, is therefore typed as `unknown`. `any` stays a last resort at the edge of a library that ships no types, and it gets wrapped before it spreads.

## Conclusion

`unknown` takes every value and then requires a check before use. `any` takes every value and skips that check, while `never` marks a spot where no value exists. When a type is unclear, `unknown` is safer, because the mistake fails while compiling.
