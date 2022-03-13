# eslint-plugin-ban-orthographical-variant

## Features

- ban orthographical variant in your code base

## How to use?

```bash
npm install eslint-plugin-ban-orthographical-variant -D
```

and write eslint config

```javascript
{
    ...
    "plugins": [
        ["ban-orthographical-variant", {
            dictionaryPath: "~~dictionary.json"
        }],
        ...
    ],
    ...
    "rules": [
        ...,
        "ban-orthographical-variant/ban-orthographical-variant": "warn",
    ]
}

```

and write your dictionary

```json
{
  "Audio": {
    "synonyms": ["Speech", "Music"]
  },
  "Video": {
    "synonyms": ["Movie", "TV Show", "Game", "Animation", "Documentary"]
  },
  "Image": {
    "synonyms": ["Photo", "Drawing", "Painting", "Photograph", "Illustration"]
  }
}
```

## examples

```javascript
const audioPath = "hoge"; // ok
const musicPath = "hoge"; // warning!
```
