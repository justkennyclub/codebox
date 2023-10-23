require.config({
  // module name mapped to CDN URL
  paths: {
    dev: "./dist",
    // Require.js appends `.js` extension for you
    // react: "../node_modules/react/umd/react.production.min",
    react: "https://unpkg.com/react@18.2.0/umd/react.production.min",
    // "react-dom": "../node_modules/react-dom/umd/react-dom.production.min",
    "react-dom":
      "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min",
  },
});

//   // load the modules defined above
//   require(['react', 'react-dom'], function (React, ReactDOM) {
//     // now you can render your React elements
//     ReactDOM.render(
//       React.createElement('p', {}, 'Hello, AMD!'),
//       document.getElementById('root')
//     );
//   });

require(["dev/AppStarter"], function (AppStarter) {
  AppStarter.AppStarter.launch();
});
