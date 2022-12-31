# @calpa/utils

This package is a collection of utilities that perform various tasks. It is written in TypeScript and tested with Jest and fast-check.

## Installation

To install the package, run the following command:

```bash
npm install @calpa/utils
```

## Usage

To use the package, import the utilities you need into your TypeScript code:

```ts
import { reverseString } from "@calpa/utils";

let reversed = reverseString("hello");
console.log(reversed); // 'olleh'
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

This will run the test suite, which includes unit tests and property-based tests using fast-check. The test suite checks that the utilities in the package work as expected and are free of errors.

## Contributing

If you want to contribute to the package, please follow these guidelines:

1. Fork the repository and create a new branch for your changes.
1. Make your changes and add tests to cover them.
1. Run the tests to ensure that they pass.
1. Submit a pull request for review.

## License

This package is licensed under the MIT License. See the LICENSE file for details.
