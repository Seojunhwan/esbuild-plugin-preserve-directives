# esbuild-plugin-preserve-directives

esbuild-plugin-preserve-directives is a plugin for esbuild that preserves important directives (e.g., 'use client') at the top of output files.

## Installation

```bash
npm install -D esbuild-plugin-preserve-directives

yarn add -D esbuild-plugin-preserve-directives

pnpm add -D esbuild-plugin-preserve-directives
```

## Usage

### With esbuild

```typescript
import { build } from 'esbuild';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';

build({
  // ... other esbuild options
  metafile: true, // improving the accuracy
  plugins: [
    preserveDirectivesPlugin({
      directives: ['use client', 'use strict'],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
});

build();
```

### With tsup

```typescript
import { defineConfig } from 'tsup';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';

export default defineConfig({
  // ... other tsup options
  metafile: true, // improving the accuracy
  esbuildPlugins: [
    preserveDirectivesPlugin({
      directives: ['use client', 'use strict'],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
});
```

## Options

- `directives`: List of directives to preserve
- `include`: File pattern to apply the plugin (regex)
- `exclude`: File pattern to ignore (regex)

## How it works

This plugin operates during the build process as follows:

1. Loads specified files and searches for directives.
2. Stores found directives.
3. After the build is complete, adds relevant directives to the top of output files.

Using esbuild's metafile option can provide more accurate results:

- With metafile, the plugin can obtain a precise list of input files for each output file, improving the accuracy of directive preservation.
- It may enhance performance in larger projects.

To enable the metafile option, add `metafile: true` to your esbuild configuration:

```typescript
import { build } from 'esbuild';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';
build({
  // ... other esbuild options
  metafile: true,
  plugins: [
    preserveDirectivesPlugin({
      directives: ['use client', 'use strict'],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
});
```

Note: Using metafile may slightly increase build time and memory usage, but the impact is usually minimal in most cases.

## License

MIT

## Contributing

Issues and pull requests are always welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

seojunhwan <seojunhwan@kakao.com>
