import {
  MercedElement,
  makeLiveComponent,
  makeComponent,
  captureProps,
  getQueryHash,
  FormTool,
  simpleComponent,
  MercedRouter,
  MercedLink,
  quickComponent,
  $m,
  $s,
  mapToString,
  mRoutes,
} from "./MUIMODULE.js";

///////////////////////
//Navigation
///////////////////////

console.log(mRoutes);

const links = [
  { name: "Github", url: "http://www.github.com/alexmercedcoder" },
  { name: "NPM", url: "http://www.github.com/alexmercedcoder" },
  { name: "Dev.To", url: "https://dev.to/alexmercedcoder" },
  {
    name: "Slack",
    url:
      "https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA",
  },
  { name: "Discord", url: "https://discord.gg/hQ2AySW" },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ",
  },
];

const navBuilder = (store) => {
  const style = `<style>.menu{
      display: flex;
      justify-content: space-around;
      width: 90%;
      font-weight: 800;
      padding: 10px;
      border: 4px solid purple;
      margin: 15px auto;}
      .menu a {color: black;
        text-transform: uppercase;
      text-decoration: none;}
      .menu a:hover {
        color: purple;
      }

      @media(max-width: 600px){
        .menu {
          width: 90%;
          flex-wrap: wrap;
          font-size: .8em;
          overflow: scroll;
        }
        .menu div {
          margin: 2px 8px;
        }
      }
      </style>`;
  const menu = mapToString(store.links, (value) => {
    return `<a href="${value.url}"><div class="link">            ${value.name}</div></a>`;
  });

  return `${style} <div class="menu">${menu}</div>`;
};

makeLiveComponent({
  prefix: "al",
  name: "nav",
  builder: navBuilder,
  store: { links },
});

//////////////////////
// Main Content
/////////////////////

makeComponent({
  prefix: "al",
  name: "main",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center;}</style><h1> Welcome!!! </h1><p>Here you'll be able to see my Javascript libraries to make use in your projects, click on a button to see the different resources available</p>`,
});

////////////////
// MercedUI
///////////////

makeComponent({
  prefix: "al",
  name: "mercedui",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> MercedUI</h1><p>This is my main Front-End UI library build around the Web Component API with tools to create reactive components, local and global state management, tools for forms, capturing element props and url queries, and component routing.</p><h3><a href='https://github.com/AlexMercedCoder/MercedUI'> GITHUB </a></h3><h3><a href='https://github.com/AlexMercedCoder/MercedUI_Template'> Template </a></h3><h3><a href='https://www.npmjs.com/package/mercedui'> NPM </a></h3><h3><a href='https://www.youtube.com/playlist?list=PLY6oTPmKnKbYrP3DfCUTYYADu0IT9DRZZ'> Tutorial Video </a></h3><h3><a href='https://tuts.alexmercedcoder.com/mercedui/'> Tutorial Blog </a></h3><h4>'npx create-mercedui-app projectName'</h4>`,
});

////////////////
// SimpleComponent
///////////////

makeComponent({
  prefix: "al",
  name: "simplecomponent",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> SimpleComponent</h1><p>This is a function to make it super simple to create basic reactive components. This function is included in the MercedUI library but also available as a standalone library.</p><h3><a href='https://github.com/AlexMercedCoder/simpleComponents'> GITHUB </a></h3><h3><a href='https://github.com/AlexMercedCoder/simpleComponents-parcel-template'> Template </a></h3><h3><a href='https://www.npmjs.com/package/@alexmerced/simple_components'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=RJzGdNu3Fck'> Tutorial </a></h3>`,
});

////////////////
// MercedElement
///////////////

makeComponent({
  prefix: "al",
  name: "mercedelement",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> MercedElemet</h1><p>MercedElement is class to create WebComponents which is at the core of the MercedUI library, this library only includes MercedElement for those who don't need the other bells and whistles.</p><h3><a href='https://github.com/AlexMercedCoder/MercedElement'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mercedelement'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=p0pT8egjpR4'> Tutorial </a></h3>`,
});

////////////////
// ChainElement
///////////////

makeComponent({
  prefix: "al",
  name: "chainelement",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> ChainElement</h1><p>ChainElement is a web component class that creates reactive components but also passes url queries and global data to its components at render. This is a standalone library, this class IS NOT part of the MercedUI library.</p><h3><a href='https://github.com/AlexMercedCoder/ChainElement'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/chainelement'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=9uP17YUjpJA'> Tutorial </a></h3>`,
});

////////////////
// MercedUtils
///////////////

makeComponent({
  prefix: "al",
  name: "mercedutils",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> MercedUtils</h1><p>MercedUtils is a library that add several useful tools and functions to the array prototype. If you prefer these functions not be added to the array prototype the Bettertypes library provies an alternative.</p><h3><a href='https://github.com/AlexMercedCoder/JS_Utilities'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mercedutils'> NPM </a></h3><h3><a href='https://www.youtube.com/playlist?list=PLY6oTPmKnKbbge3XP8ne041HAQwGle8_Z'> Tutorial </a></h3>`,
});

////////////////
// BetterTypes
///////////////

makeComponent({
  prefix: "al",
  name: "bettertypes",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> BetterTypes</h1><p>BetterTypes offers many of the same utilities that MercedUtils does but does through new classes vs adding functions to the array and string prototypes.</p><h3><a href='https://github.com/AlexMercedCoder/bettertypesjs'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/@alexmerced/bettertypes'> NPM </a></h3><h3><a href='https://www.youtube.com/playlist?list=PLY6oTPmKnKbbge3XP8ne041HAQwGle8_Z'> Tutorial </a></h3>`,
});

////////////////
// mutils
///////////////

makeComponent({
  prefix: "al",
  name: "mutils",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> Mutils</h1><p>A Utility library of utility classes that extends Sets, Arrays and help work with Random Numbers.</p><h3><a href='https://github.com/AlexMercedCoder/Mutils'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mutils_am'> NPM </a></h3>`,
});

///////////////////
//Basic Element
///////////////////

makeComponent({
  prefix: "al",
  name: "basicelement",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> BasicElement</h1><p>BasicElement aims to be the simplest possible extension to HTMLElement adding state and props and nothing else..</p><h3><a href='https://github.com/AlexMercedCoder/BasicElement'> GITHUB </a></h3><h3><a href='https://github.com/AlexMercedCoder/BasicElement'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=QsmMGaPPm7g'> Tutorial </a></h3><h4>'npx merced-spinup basicelement projectName'</h4>`,
});

///////////////////
//ComponentZoo
///////////////////

makeComponent({
  prefix: "al",
  name: "componentzoo",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> ComponentZoo</h1><p>ComponentZoo aims to house all the HTMLElement extended classes from all my other libraries and more including a Router Component, StyleWrapper Component (think styled components), and FormWrapper (FormTool as a Component).</p><h3><a href='https://github.com/AlexMercedCoder/ComponentZoo'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/componentzoo'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=EE0N7Yluu6o'> Tutorial </a></h3><h4>'npx merced-spinup componentzoo projectName'</h4>`,
});

///////////////////
//FunComponent
///////////////////

makeComponent({
  prefix: "al",
  name: "funcomponent",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> FunComponent</h1><p>Allows you to make web component is a functional style that enables the creation of hooks.</p><h3><a href='https://github.com/AlexMercedCoder/funComponent'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/funcomponents'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=5_EIaA9iyPw'> Tutorial </a></h3><h4>'npx create-funcomponent-app projectName'</h4>`,
});

///////////////////
//mBlocks
///////////////////

makeComponent({
  prefix: "al",
  name: "mblocks",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> mBlocks</h1><p>A class based front-end UI library for creating components without the web-component api or other tooling like Babel or JSX.</p><h3><a href='https://github.com/AlexMercedCoder/mBlocks'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mblocks'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=MglHxXiSMwA'> Tutorial Video</a></h3><h3><a href='https://tuts.alexmercedcoder.com/mblocks/'> Tutorial Blog </a></h3><h4>'npx merced-spinup mblocks projectName'</h4>`,
});

///////////////////
//superFunc UI
///////////////////

makeComponent({
  prefix: "al",
  name: "superfuncui",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> superFunc UI</h1><p>A function based front-end UI library for creating components without the web-component api or other tooling like Babel or JSX.</p><h3><a href='https://github.com/AlexMercedCoder/superFunc'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/superfuncui'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=pZRD1Iq99Hs'> Tutorial </a></h3><h4>'npx merced-spinup superfunc projectName'</h4>`,
});

///////////////////
//merced-reactor
///////////////////

makeComponent({
  prefix: "al",
  name: "mercedreactor",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> merced-reactor</h1><p>A tool for quickly generating lightweight react projects, think of it as a slimmer create-react-app.</p><h3><a href='https://www.npmjs.com/package/merced-reactor'> NPM </a></h3><h3><a href='https://github.com/AlexMercedCoder/merced-reactor'> GITHUB </a></h3><h3><a href='https://www.youtube.com/watch?v=HtjvYdlYJ38'> Tutorial </a></h3><h4>'npx merced-reactor projectName js' or 'npx merced-reactor projectName ts'</h4>`,
});

///////////////////
//merced-Vuer
///////////////////

makeComponent({
  prefix: "al",
  name: "mercedvuer",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> merced-vuer</h1><p>AA tool for generating a Vue project with Router and the Buefy component library already configured.</p><h3><a href='https://www.npmjs.com/package/merced-vuer'> NPM </a></h3><h3><a href='https://github.com/AlexMercedCoder/merced-vuer'> GITHUB </a></h3><h3><a href='https://www.youtube.com/watch?v=gmOOGs59KN4'> Tutorial </a></h3><h4>'npx merced-vuer projectName'</h4>`,
});

///////////////////
//merced-Spinup
///////////////////

makeComponent({
  prefix: "al",
  name: "mercedspinup",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> merced-spinup</h1><p>A tool for spinning up a projects in several different backend and frontend frameworks, rad the docs to see the full list of templates.</p><h3><a href='https://www.npmjs.com/package/merced-spinup'> NPM </a></h3><h3><a href='https://github.com/AlexMercedCoder/merced-spinup'> GITHUB </a></h3><h3><a href='https://www.youtube.com/watch?v=7msl1qJsA1U'> Tutorial Video</a></h3><h3><a href='https://tuts.alexmercedcoder.com/mercedspinuptut/'> Tutorial Blog </a></h3><h4>'npx merced-spinup templateName projectName'</h4>`,
});

///////////////////
//RenderBlocks
///////////////////

makeComponent({
  prefix: "al",
  name: "renderblocks",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1>RenderBlocks</h1><p>A library for having basic reactive UI features in a small package.</p><h3><a href='https://github.com/AlexMercedCoder/RenderBlocks'> Github </a></h3><h3><a href='https://www.npmjs.com/package/renderblocks'>NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=xskOxRo3tqc'> Tutorial Video </a></h3><h3><a href='https://tuts.alexmercedcoder.com/renderblocks/'> Tutorial Blog </a></h3><h4>'npx merced-spinup renderblocks projectName'</h4>`,
});

///////////////////
//AMPonent
///////////////////

makeComponent({
  prefix: "al",
  name: "amponent",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1>AMPonent</h1><p>A Web Component Library for building reactive and styling web components.</p><h3><a href='https://github.com/AlexMercedCoder/Ponent'> Github </a></h3><h3><a href='https://www.npmjs.com/package/amponent'>NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=Gy0SeuYIY8o'> Tutorial Video</a></h3><h3><a href='https://tuts.alexmercedcoder.com/amponenttut/'> Tutorial Blog </a></h3><h4>'npx create-amponent-app projectName'</h4>`,
});

///////////////////
//Merver
///////////////////

makeComponent({
  prefix: "al",
  name: "merver",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1>Merver</h1><p>A MicroWebserver framework for building APIs and Microservices.</p><h3><a href='https://github.com/AlexMercedCoder/merver'> Github </a></h3><h3><a href='https://www.npmjs.com/package/am-merver'>NPM </a></h3><h3><a href='https://youtu.be/kejYk7KsH78'> Tutorial </a></h3><h4>'npx merced-spinup merver projectName'</h4>`,
});

///////////////////
//useDataStore
///////////////////

makeComponent({
  prefix: "al",
  name: "usedatastore",
  template: `<style>h1, h4 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1>useDataStore</h1><p>A mini React library for scaffolding Application level state in React.</p><h3><a href='https://github.com/AlexMercedCoder/useDataStore'> Github </a></h3><h3><a href='https://www.npmjs.com/package/usedatastore'>NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=62tzQ8cFxpM'> Tutorial Video </a></h3><h3><a href='https://tuts.alexmercedcoder.com/usedatastore/'> Tutorial Blog </a></h3><h4>'npm install usedatastore'</h4>`,
});
