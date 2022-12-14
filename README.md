# Tenpo Eats

This is a simple application using react native maps integration with google maps provider.

## Supported platforms

| Platform  |  Support |
|---|---|
| iOS  |  ❌ |
| Android  |  ✅ |


## How to start

You can follow [this guide](https://reactnative.dev/docs/environment-setup) to setup your environment.

## Setting API keys

You will have to create a dotenv file in the root of your proyect:

```bash
touch .env
```

Inside that file you need to add a google maps API KEY named ALEX_GOOGLE_MAPS_API_KEY (you can change the name, but make sure that you change it everywhere) it is going to look like this

`ALEX_GOOGLE_MAPS_API_KEY=yourGoogleMapsApiKey`

Now you are going to do the same, inside android folder, like so:

```bash
cd android && touch local.properties
```

And add the same api key like this:

`ALEX_GOOGLE_MAPS_API_KEY=yourGoogleMapsApiKey`


## Dependencies used: 

- node: v16.17.0
- yarn 1.22.19 

Just make sure that you initialize your project like so:
```bash
yarn install
yarn android
```

### Tests

Unit tests implementation pending, but most likely to use Jest with [testing library native](https://testing-library.com/docs/react-native-testing-library/intro)

### Recomended extensions for vscode

- [Color highlight](https://github.com/naumovs/vscode-ext-color-highlight)
- [Styled Components highlight](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

### Screens examples

![Example Screen!](/assets/images/examples/sampleImg%20(1).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(2).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(3).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(4).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(5).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(6).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(7).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(8).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(9).jpg)

---

![Example Screen!](/assets/images/examples/sampleImg%20(10).jpg)
