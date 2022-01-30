# Live Url

https://gitir.herokuapp.com

# How to run the project

Clone a copy of this project and run the command below to install dependencies

# Install dependencies

> npm install

# Start the application

Run the with

> npm run start

# LOCAL Test

Run test with

> npm run test

# Live test

```
Request Body
POST https://gitir.herokuapp.com
Content-Type: application/json

  {
    "endDate": "2017-01-28",
     "startDate": "2016-11-27",
     "minCount": 2700,
     "maxCount": 3000
   }
```

```
Response data:
{
  "code": 0,
  "msg": "success",
  "records": [
    {
      "key": "ibfRLaFT",
      "createdAt": "2016-12-25T16:43:27.909Z",
      "totalCount": 2892
    },
    {
      "key": "pxClAvll",
      "createdAt": "2016-12-19T10:00:40.050Z",
      "totalCount": 2772
    },
    {
      "key": "XCiSazeS",
      "createdAt": "2016-12-13T18:58:33.864Z",
      "totalCount": 2906
    },
    {
      "key": "kzSqsBrJ",
      "createdAt": "2016-12-02T15:07:30.465Z",
      "totalCount": 2803
    },
    {
      "key": "KYKAKxDr",
      "createdAt": "2016-11-27T00:30:34.725Z",
      "totalCount": 2713
    }
  ]
}
```

Wrong req body `endDatee`

```
POST https://gitir.herokuapp.com
Content-Type: application/json

  {
    "endDatee": "2017-01-28",
     "startDate": "2016-11-27",
     "minCount": 2700,
     "maxCount": 3000
   }

Response

{
  "code": 1,
  "msg": "Please provide the `startDate`, `endDate`, `minCount`, and `maxCount` for this operation"
}

```
