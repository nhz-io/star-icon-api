<p align="center">
  <img src="https://star.nhz.io?layers=6&width=300&height=300&fill=navy,silverblue,lightblue,navy,silverblue,lightblue&ratio=0.55,0.5,0.44,0.55,0.5,0.44&rotation=0,0,0,36,36,36&zoom=1,0.95,0.9,0.5,0.45,0.4"
    alt="STAR">
</p>
<h1 align="center">star-icon-hapi</h1>
<p align="center">  
  <a href="https://npmjs.org/package/star-icon-hapi">
    <img src="https://img.shields.io/npm/v/star-icon-hapi.svg?style=flat"
      alt="NPM Version">
  </a>
  <a href="https://travis-ci.org/nhz-io/star-icon-hapi">
    <img src="https://img.shields.io/travis/nhz-io/star-icon-hapi.svg?style=flat"
      alt="Build Status">
  </a>  
</p>
<h3 align="center">SVG Stars as a Service</h3>

## Install

```sh
$ npm i -S star-icon-hapi
```

## Usage
```js
...
import starIconRoute from 'star-icon-hapi'
...
// Setup hapi server
...
server.route(starIconRoute({
	method: 'GET',
	path: '/api/star',
}))
```

### Query parameter

* `layers` - number of layers in the star
* `width` - optional width (height must be present too)
* `height` - optional height (width must be present too)
* `arms` - single number / list of numbers per layer
* `fill` - single color / list of colors per layer
* `ratio` - single inner/outer ratio / list of ratios per layer (`ratio < 1`)
* `rotatio` - single rotation angle / list of angles per layer (degrees)
* `zoom` - single zoom value / list of values per layer (`zoom < 1`)

## Examples

### [Header Star](https://star.nhz.io?layers=6&width=300&height=300&fill=navy,silverblue,lightblue,navy,silverblue,lightblue&ratio=0.55,0.5,0.44,0.55,0.5,0.44&rotation=0,0,0,36,36,36&zoom=1,0.95,0.9,0.5,0.45,0.4)

![Header Star](https://star.nhz.io?layers=6&width=300&height=300&fill=navy,silverblue,lightblue,navy,silverblue,lightblue&ratio=0.55,0.5,0.44,0.55,0.5,0.44&rotation=0,0,0,36,36,36&zoom=1,0.95,0.9,0.5,0.45,0.4)

* **layers**: `6`
* **width**: `300`
* **height**: `300`
* **fill**: `navy`, `silverblue`, `lightblue`, `navy`, `silverblue`, `lightblue`
* **ratio**: `0.55`, `0.5`, `0.44`, `0.55`, `0.5`, `0.44`
* **rotation**: `0`, `0`, `0`, `36`, `36`, `36`
* **zoom**: `1`, `0.95`, `0.95`, `0.5`, `0.45`, `0.4`

### [Compass](https://star.nhz.io?layers=8&width=300&height=300&arms=4&fill=black,white,black,white,black,%23eee,black,%23eee&ratio=0.16,0.12,0.16,0.12,0.16,0.12,0.16,0.12&rotation=337.5,337.5,22.5,22.5,0,0,45,45&zoom=0.8,0.75,0.8,0.75,1,0.95,1,0.95)

![Compass](https://star.nhz.io?layers=8&width=300&height=300&arms=4&fill=black,white,black,white,black,%23eee,black,%23eee&ratio=0.16,0.12,0.16,0.12,0.16,0.12,0.16,0.12&rotation=337.5,337.5,22.5,22.5,0,0,45,45&zoom=0.8,0.75,0.8,0.75,1,0.95,1,0.95)

* **layers**: `8`
* **width**: `300`
* **height**: `300`
* **fill**: `black`, `white`, `black`, `white`, `black`, `#eee`, `black`, `#eee`
* **ratio**: `0.16`, `0.12`, `0.16`, `0.12`, `0.16`, `0.12`, `0.16`, `0.12`
* **rotation**: `337.5`, `337.5`, `22.5`, `22.5`, `0`, `0`, `45`, `45`
* **zoom**: `0.8`, `0.75`, `0.8`, `0.75`, `1`, `0.95`, `1`, `0.95`

### [Magen David](https://star.nhz.io/?layers=4&width=300&height=300&arms=3&fill=navy,white,navy,white&ratio=0.5,0.5,0.5,0.5&rotation=0,0,180,180&zoom=1,0.9,1,0.9)

![Magen David](https://star.nhz.io/?layers=4&width=300&height=300&arms=3&fill=navy,white,navy,white&ratio=0.5,0.5,0.5,0.5&rotation=0,0,180,180&zoom=1,0.9,1,0.9)

* **layers**: `4`
* **width**: `300`
* **height**: `300`
* **fill**: `navy`, `white`, `navy`, `white`
* **ratio**: `0.5`, `0.5`, `0.5`, `0.5`
* **rotation**: `0`, `0`, `180`, `180`
* **zoom**: `1`, `0.9`, `1`, `0.9`

## [ESDOC](http://nhz-io.github.io/star-icon-hapi)

## See Also
![star-icon-tag](https://star.nhz.io?layers=6&width=30&height=30&fill=brown,orange,yellow,brown,orange,yellow&ratio=0.55,0.5,0.44,0.55,0.5,0.44&rotation=0,0,0,36,36,36&zoom=1,0.95,0.9,0.5,0.45,0.4)
[https://github.com/nhz-io/star-icon-tag](https://github.com/nhz-io/star-icon-tag)

## License

MIT © [Ishi Ruy](https://nhz.io/star-icon-hapi)
