# handy-utils

Pequeña colección de utilidades en JavaScript sin dependencias: cadenas, números y fechas.

## Uso

```js
const { slugify, formatBytes, clamp } = require('./src');

slugify('Hola Mundo!');   // "hola-mundo"
formatBytes(1536);        // "1.5 KB"
clamp(12, 0, 10);         // 10
```

## Scripts

```bash
npm test
```

## Licencia

MIT
