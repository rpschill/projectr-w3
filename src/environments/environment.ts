// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyADXQYH34ujeYL3ZJYDnYPAIaLMEmGyEg8",
        authDomain: "projectr-ember.firebaseapp.com",
        databaseURL: "https://projectr-ember.firebaseio.com",
        storageBucket: "projectr-ember.appspot.com",
        messagingSenderId: "596860793254"
  }  
};
