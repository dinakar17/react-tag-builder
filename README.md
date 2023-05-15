# react-tag-builder

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

A customizable tag input component for React.

## Features

- Add tags by typing and pressing Enter.
- Click on a tag to trigger custom behavior.
- Customize the appearance of the input field and tags.
- Initialize with default tags.
- Written in TypeScript.

## Installation

```bash
npm install react-tag-builder
```

## Usage

Here's a basic example of how to use the `TagInput` component:

```tsx
import React from 'react'
import TagInput from 'react-tag-builder'

const App: React.FC = () => {
  return (
    <div>
      <TagInput
        defaultTags={['React', 'JavaScript', 'TypeScript']}
        onChange={(tags) => console.log('Tags: ', tags)}
        onClick={(tag) => console.log('Clicked tag: ', tag)}
      />
    </div>
  )
}

export default App
```

## Props

| Prop             | Type                       | Description                                                   |
| ---------------- | -------------------------- | ------------------------------------------------------------- |
| `defaultTags`    | `string[]`                 | An array of tags to initialize the input with.                |
| `onChange`       | `(tags: string[]) => void` | A callback function that is called whenever the tags change.  |
| `onClick`        | `(tag: string) => void`    | A callback function that is called whenever a tag is clicked. |
| `inputClassName` | `string`                   | A class name to apply to the input field.                     |
| `tagClassName`   | `string`                   | A class name to apply to the tags.                            |
| `tagStyle`       | `React.CSSProperties`      | A style object to apply to the tags.                          |
| `inputStyle`     | `React.CSSProperties`      | A style object to apply to the input field.                   |
| `placeholder`    | `string`                   | A placeholder to display in the input field.                  |
| `separator`      | `string`                   | A string to use as the separator between tags.                |
| `validator`      | `(tag: string) => boolean` | A function that returns `true` if the tag is valid.           |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[npm-url]: https://www.npmjs.com/package/my-react-typescript-package
[npm-image]: https://img.shields.io/npm/v/my-react-typescript-package
[github-license]: https://img.shields.io/github/license/gapon2401/my-react-typescript-package
[github-license-url]: https://github.com/gapon2401/my-react-typescript-package/blob/master/LICENSE
[github-build]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/gapon2401/my-react-typescript-package/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/my-react-typescript-package
