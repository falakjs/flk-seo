# flk-seo

Convert a string to seo friendly slug for optimized and readable links.

# Installation

`npm install flk-seo`


# Usage

First import it to your application

```js
import seo from 'flk-seo';
```
OR 

```js
const { seo } = require('flk-seo');
```

In browser

```html
<script src="dist/seo.min.js"></script>
```


```js
let title = 'Hello world';

console.log(seo(title)); // hello-world

let AnotherTitleWithOtherSymbols = 'Hello   world & thanks for coming, take these $20.25 as a gift for you.';

console.log(seo(AnotherTitleWithOtherSymbols)); // hello-world-and-thanks-for-coming-take-these-2025-as-a-gift-for-you
```


# Other languages support

Currently only **English** and **Arabic** letters are supported, feel free to **PR** your language!

# Thanks to

This snippet of code was originally created by [Dan Barto](https://stackoverflow.com/a/48000411/3380387) with slight modifications.