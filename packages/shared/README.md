# Shared Utilities and Components

This package contains shared utilities and components used across the Ignis WLED Controller project.

## Contents

- API clients for WLED devices
- Shared UI components
- Common types and interfaces
- Utility functions

## Usage

Import components and utilities from this package:

```typescript
import { WLEDClient } from 'shared/wled';
import { ColorPicker } from 'shared/components';
```

## Development

```sh
# Build the package
nx build shared

# Run tests
nx test shared
```

## Adding New Components

When adding new components or utilities:

1. Create a new file in the appropriate directory
2. Export the component/utility from `index.ts`
3. Add tests in the `__tests__` directory
4. Update documentation if necessary 