# Chat Log

## Conversation with GitHub Copilot

### User Query

Myslel jsem si to. Využiji tedy jejich nativní aplikace jen k experimentům ohledně Wled knihovny, a postupně budu implementovat svoje řešení. Připrav mi návrh všech potřebných dokumentů a licencí a kam je mám uvést a kam mám přidávat svoje změny. návrh mojí licence na Expo RN app. Contribution, code of conduct, changelog atd. všechno.

### Copilot Response

Zde je kompletní návrh potřebných dokumentů a licencí, které by měly být zahrnuty ve vašem repozitáři `ignis-wled-controller`. Tento návrh zahrnuje licence, soubory pro přispívání, kodex chování a další.

### Struktura repozitáře

```
ignis-wled-controller/
├── LICENSE.md
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CHANGELOG.md
├── wled/
│   ├── LICENSE.md
│   └── README.md
├── wled-native-ios/
│   ├── LICENSE.md
│   └── README.md
├── wled-native-android/
│   ├── LICENSE.md
│   └── README.md
└── expo-react-native/
    ├── LICENSE.md
    └── README.md
```

### Hlavní soubory

```markdown name=LICENSE.md
# Main License for ignis-wled-controller

This repository is a collection of various implementations for controlling juggling light toys using the WLED library. Each implementation included here retains its original license, as specified in their respective directories. The Expo React Native implementation is licensed under the MIT License.

## Expo React Native Implementation License (MIT)

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
