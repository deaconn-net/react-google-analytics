# React Google Analytics
A small NPM package to handle inserting the scripts needed for Google Analytics to operate via a React component.

## Usage
### Props
* **tag** - Your analytics tag ID.

```ts
import { GoogleAnalytics } from "deaconn-google-analytics"

...

return (
    <head>
        <GoogleAnalytics tag="mytagID" />
    </head>
);

```

## Installation
You may install component using the NPM package manager.

```bash
npm install deaconn-google-analytics
```

## Credits
* [Christian Deacon](https://github.com/gamemann)