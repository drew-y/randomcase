# Randomcase

Randomize the casing of any text. Can be used via CLI or Node.js API.

## Installation

```bash
npm i -g rcase # Take out the -g if using for a node package.
```

## CLI Usage

Basic:
```bash
rcase "How are we doing today?"
# Output: how aRE we doInG TodaY?
```

Via Stdin:
```bash
echo "How are we doing today?" | rcase
# Output: HOw ARE WE dOiNg ToDay?
```

## Node.js API

```javascript
import { randomcase } from "rcase";

const randomCasedText = randomcase("My randomized case text");
```

## Use Cases

¯\\_(ツ)_/¯

Note: Randomization is done via `Math.random()`. Don't expect cryptographic grade
randomization here.
