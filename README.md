# Resto-json
resto-json is a powerful json generator tool for building frontend Applications without delay. It gives user control of generating massive ammount of unique json data with minimum lines of code.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


# Installation
Install resto-json

```bash
npm install resto-json
```

## Importing
```bash
// Using Node.js `require()`
const restoJson = require("resto-json");

// Using ES6 imports
import restoJson from 'resto-json';
```

To generate unique users data
```bash
// jsonData(<listSize>,<listType>)
restoJson(2, "users")
```



### Example for API 
```bash
const express = require("express");
const restoJson = require("resto-json");
const app = express();

app.get("/users", (req, res) => {
  res.send(restoJson(2, "users"));
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
```

### Browser
```bash
http://localhost:3000/users
```

# Results
```bash
{
  "users": [
    {
      "_id": "6261312ce9fc2b6f4ea8cff5",
      "firstName": "Victor",
      "lastName": "Jurgenson",
      "domain": "gmail.com",
      "email": "VictorJur43764@gmail.us",
      "age": 65,
      "gender": "male",
      "phone": "+91 9966376132",
      "birthDate": "1989-3-22",
      "bloodGroup": "AB-negative",
      "height": 234,
      "weight": 65
    },
    {
      "_id": "6261312c6a26b82768508fa9",
      "firstName": "Matthew",
      "lastName": "Hylan",
      "domain": ".com",
      "email": "MatthewHyl46030@cafepress.com",
      "age": 66,
      "gender": "male",
      "phone": "+91 9931396090",
      "birthDate": "2010-10-16",
      "bloodGroup": "B-positive",
      "height": 225,
      "weight": 66
    }
  ]
}
```


## Datatypes

| Users             | Data type                                                               |
| ----------------- | ------------------------------------------------------------------ |
| _id | string
| firstName | string
| lastName | string |
| gender | string |
| age | number |
| email | string |
| phone | string |
| domain | string |
| birthDate | string |
| bloodGroup | string |
| height | number |
| weight | number |




## Version Release Schedule

If you require the absolute latest version of `resto-json` the `master` branch @ <https://github.com/vinayakPandey7/resto-json> should always be up to date and working.

