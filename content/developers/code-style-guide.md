# Coding Style Guide

We use prettier and eslint to maintain code style and best practices.

## Development Principles

We follow two key principles when developing our framework:

- [Abstraction Principle](<https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)>) - We aim to abstract away the complexity of development to provide a fast and consistent interface for our developers client projects.
- [KISS](https://en.wikipedia.org/wiki/KISS_principle){:target="_blank"} - We aim to keep things as simple as possible, don't use 20 lines of code when 1 will do, using external tooling like [lodash](https://lodash.com/){:target="_blank"} is fine, but don't overcomplicate things.

## Naming Conventions

-   **File Names** - We use dot notation for file names e.g. `name.controller.ts`
-   **Class Names** - We use PascalCase for class names e.g. `class NameController`
-   **Variable Names** - We use camelCase for variable names e.g. `const nameController`
-   **Function Names** - We use camelCase for function names e.g. `function nameController()`

## Syntax

### Const vs Functions

We don't use `const` for doing any form of calculation or manipulation, we use functions instead. `const` should only be used for the storing of values.

For example, don't do this:

```ts
const varName = function (parameters) {
	// return statement
}
```

Do this instead

```ts
const varName = run(parameters)

function run(parameters): string {
	// return statement
}
```

The later example allows better typing and readability. The slightly longer code is worth it for the benefits it brings.

## File Structure

### NestJS

We follow the [NestJS](https://nestjs.com/){:target="_blank"}  file structure conventions. Ensuring each module is self-contained and can be easily moved between projects.