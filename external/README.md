# External Dependencies

This directory contains git submodules for external dependencies.

## WLED Library

The main WLED library is included as a git submodule. To initialize it, run:

```sh
git submodule add https://github.com/wled/WLED external/wled
git submodule update --init --recursive
```

## License

The WLED library is licensed under the EUPL-1.2 license. See the library's LICENSE file for details.

## Updates

To update the WLED library to the latest version:

```sh
cd external/wled
git fetch origin
git checkout main
git pull origin main
cd ../..
git add external/wled
git commit -m "update: WLED submodule to latest version"
``` 