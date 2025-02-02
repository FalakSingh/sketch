# Sketch

`sketch` is a lightweight utility for styling terminal output with ANSI codes. It allows you to easily add colors, backgrounds, and text styles (bold, italic, underline) to your terminal logs.

## Installation

You can install Sketch using npm:

```sh
npm install sketch
```

## Usage

### Basic Example

```js
import { sketch } from 'sketch';

// Styling text
sketch('Hello, World!').bgRed.white.log();
```

This will output `Hello, World!` with a red background and white text.

## Available Styles

### Text Colors
- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

### Background Colors
- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`

### Text Styles
- `bold`
- `italic`
- `underline`


## Chaining Styles

You can chain multiple styles together:

```js
sketch('Warning!').bgYellow.black.bold.log();
sketch('Error!').bgRed.white.underline.log();
```

## Logging to the Terminal

Use the `.log()` method to print the styled text to the terminal:

```js
sketch('This is bold and blue').bold.blue.log();
```

## Getting the Styled Text

If you don’t want to log the text immediately, you can use the `.text` property to get the styled string:

```js
const styledText = sketch('Hello, World!').bgGreen.black.text;
console.log(styledText);
```

## API

### `sketch(payload: string | object)`

Creates a new Sketch instance.

- `payload`: The text to style. If an object is provided, it will be converted to a JSON string.

### Methods

- `.log()`: Logs the styled text to the terminal.
- `.text`: Returns the styled text as a string.

### Properties

All style properties (e.g., `red`, `bgBlue`, `bold`) can be chained to apply styles.

## Examples

### Styling JSON Objects

You can style JSON objects for better readability:

```js
const data = { name: 'Sketch', version: '1.0.0' };
sketch(data).bgCyan.white.log();
```

### Combining Styles

Combine multiple styles for more complex outputs:

```js
sketch('Success!').bgGreen.white.bold.log();
sketch('Failed!').bgRed.white.underline.log();
```

## License

Sketch is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! If you find a bug or want to suggest a feature, please open an issue or submit a pull request.

## Author

**Falak Singh**

- GitHub: [FalakSingh](https://github.com/FalakSingh)

