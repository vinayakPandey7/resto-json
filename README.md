# resto-json

Npm package to get the fake database data for building frontend fast.

# Getting started

Install resto-json

```bash
npm install resto-json
```

## Usage

To get the data of users

```bash
jsonData(listSize,listType)
```

\
Node js Example

```bash
const express = require("express");
const jsonData = require("resto-json");
const app = express();

app.get("/", (req, res) => {
    res.send(jsonData(10, "users"));
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
```
