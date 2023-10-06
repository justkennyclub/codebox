To work:

1. run `npm run dev` to trigger ts watch
2. dist will be created from compilation
3. open `index.html`

Core concepts:

- using requirejs to load js asynchronously in html
- entry point with requirejs script has the config and the AppStarter class as launcher -> this allows us to code in TS even the launcher
- all js is located under /scripts/, where `dist` is generated from compiling our TS development codes into JS. Others like main.js, require.js are not compiled, but either coded or from library
- the important thing is our dev codes in TS/TSX are compiled in amd module (and also transpiled for react), so we can still use triple slash etc., and such compilation and transpilation are correct.
- with all this, browser literally just navigate to the entry index.html and everything should work.
