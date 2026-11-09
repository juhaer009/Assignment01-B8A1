# Type vs Interface

## Introduction

`type` and `interface` both name a shape, so I treated them as the same thing for a while. They split once I tried to merge a declaration, write a union, or type a tuple. `interface` is for object shapes. `type` is a label I can put on almost any type, including ones that are not objects.

## Declaration merging

If the value is an object and I might add fields later, I use `interface`. Two blocks with the same name merge. That matters when I want to add a field to a type I did not write, without editing the original file.

```ts
interface User {
  id: number;
  name: string;
}

interface User {
  role: string;
}
```

`User` now has `id`, `name`, and `role`. A type alias is closed. Writing `type User` twice is just a duplicate identifier. I can still combine object types with `&`, and an interface can `extend` another interface. Opening the same name twice is the part only `interface` does.

## Unions, tuples, and classes

I switch to `type` when the value is not a plain object. Unions and tuples come up the most.

```ts
type Input = string | number | boolean;

type Coordinate = readonly [number, number, string];
```

There is no interface form of that union. I also use `type` for a function signature and for something computed, like `T[K]` when I pull one property off each object. A class can `implement` an interface, and it can implement an object type alias too. I still put a class contract on an interface. The field list is easier to scan that way.

## Conclusion

Object that other files will extend or implement: `interface`. Union, tuple, primitive alias, or a computed type: `type`. A one-off object inside one function can go either way. I keep one style per kind of data so I am not guessing later why one name is a `type` and the next is an `interface`.
