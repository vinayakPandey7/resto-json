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
const restoJson = require("resto-json");
const app = express();

app.get("/users", (req, res) => {
  res.send(restoJson(2, "users"));
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
```

Hit browser with this link
```bash
http://localhost:3000/users
```

# Results
```bash
[
    {"id":"625e92eafa90b2f2979240b3",
    "first_name":"Roger",
    "last_name":"Dewalt",
    "email":"RogerD61171@bbc.co.uk",
    "age":41,
    "gender":"male"
    },
    {"id":"625e92ea4ac22ad34665e8f9",
    "first_name":"Fred",
    "last_name":"Yocum",
    "email":"FredYo11621@odnoklassniki.ru",
    "age":96,
    "gender":"male"}
]
```
