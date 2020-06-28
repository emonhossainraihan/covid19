## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## dependencies:

- `npm i novelcovid axios react-chartjs-2`

* dependency for react-chartjs-2: `npm i --save chart.js`
* for formatting time and show counting effect: `npm i --save react-moment react-countup`

In JavaScript, arrays and obect are different, although they are somewhat similar, but here the react needs an array. You need to create an array from the object and apply it.

```js
let array = new Array(object.length);
let i = 0;

for (var key in object) {
  array[i] = object[key];
  i = i + 1;
}
```

use this method to check props passing correctly in `CountryPicker.js`

```js
<CountryPicker
  localData={localData}
  handleCountryChange={this.handleCountryChange}
/>;
{
  console.log('Still fetching Opps then you will get nothing');
}
//================================= CountryPicker Component ==============================
const CountryPicker = ({ handleCountryChange, localData }) => {
  let DataArray = new Array(localData.length);
  let i = 0;

  for (var key in localData) {
    DataArray[i] = localData[key];
    i = i + 1;
  }
  return (
    <div>
      <h1>Hello button</h1>
      {console.log('If fetch done then you will get data')}
      {console.log(DataArray)}
    </div>
  );
};
```

## React lifeCycle method

- [react-lifecycle](https://www.youtube.com/watch?v=m_mtV4YaI8c)
- [replace-lifecycle-by-hook](https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n)

## InlineStyling JSX

- The only difference with JSX is that inline styles must be written as an object instead of a string.
  `<h1 style={{ color: "red" }}>Hello World</h1>`
- In the style attribute above, the first set of curly brackets will tell your JSX parser that the content between the brackets is JavaScript (and not a string). The second set of curly bracket will initialize a JavaScript object.

- **Inline Styling/CSS Stylesheets/CSS Modules/Styled Components** :airplane: [All](https://www.freecodecamp.org/news/react-styled-components-inline-styles-3-other-css-styling-approaches-with-examples/)

## About Me

<a href="https://stackexchange.com/users/9277340"><img src="https://stackexchange.com/users/flair/9277340.png" width="208" height="58" alt="profile for emonhossain on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for emonhossain on Stack Exchange, a network of free, community-driven Q&amp;A sites"></a>
