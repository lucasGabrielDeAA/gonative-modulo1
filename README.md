# modulo1-gonative

## Installation

To run the application, after package.json adjustments you just nedd to execute the command above

#### For Android

```
yarn run android
```

#### For IOS

```
yarn run ios
```

## Execution

If you already have the application installed on your emulator and, did not had installed native libraries on your application, you won't need to reinstall the application, using the commands listed ahead. For this situation, you just need to execute the command

```
yarn start
```

#### Running the packager with the cache cleaned

```
yarn start --reset-cache
```

## Using the react-devtools to inspect the application

To install the [react-devtools](https://github.com/facebook/react-devtools) run the command

```
yarn add react-devtools --dev
```

After installed, go to package.json and add the line in the script section.

```
"react-devtool": "react-devtools"
```

To run the react-devtools simply run
```
yarn run react-devtool
```
