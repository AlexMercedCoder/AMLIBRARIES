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
} from './MUIMODULE.js';

///////////////////////
//Navigation
///////////////////////

console.log(mRoutes);

const links = [
    { name: 'Github', url: 'http://www.github.com/alexmercedcoder' },
    { name: 'NPM', url: 'http://www.github.com/alexmercedcoder' },
    { name: 'Dev.To', url: 'https://dev.to/alexmercedcoder' },
    {
        name: 'Slack',
        url:
            'https://join.slack.com/t/amwebdev/shared_invite/enQtNzc4NDA3MDU3MDE0LTZjNjIyZmQ3MzA5Y2Q3MWUwZjk3NTIyYjliOThlMWFjNTFkYWM1OGUxN2Y3NGExNGVhOGIzZTg0YTJjZTk5NDA',
    },
    { name: 'Discord', url: 'https://discord.gg/hQ2AySW' },
    { name: 'Spectrum', url: 'https://spectrum.chat/devnursery' },
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
      </style>`;
    const menu = mapToString(store.links, (value) => {
        return `<a href="${value.url}"><div class="link">            ${value.name}</div></a>`;
    });

    return `${style} <div class="menu">${menu}</div>`;
};

makeLiveComponent({
    prefix: 'al',
    name: 'nav',
    builder: navBuilder,
    store: { links },
});

//////////////////////
// Main Content
/////////////////////

makeComponent({
    prefix: 'al',
    name: 'main',
    template: `<style>h1 {text-align: center;} p{text-align: center;}</style><h1> Welcome!!! </h1><p>Here you'll be able to see my Javascript libraries to make use in your projects, click on a button to see the different resources available</p>`,
});

////////////////
// MercedUI
///////////////

makeComponent({
    prefix: 'al',
    name: 'mercedui',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> MercedUI</h1><p>This is my main Front-End UI library build around the Web Component API with tools to create reactive components, local and global state management, tools for forms, capturing element props and url queries, and component routing.</p><h3><a href='https://github.com/AlexMercedCoder/MercedUI'> GITHUB </a></h3><h3><a href='https://github.com/AlexMercedCoder/MercedUI_Template'> Template </a></h3><h3><a href='https://www.npmjs.com/package/mercedui'> NPM </a></h3><h3><a href='https://www.youtube.com/playlist?list=PLY6oTPmKnKbYrP3DfCUTYYADu0IT9DRZZ'> Tutorial </a></h3>`,
});

////////////////
// SimpleComponent
///////////////

makeComponent({
    prefix: 'al',
    name: 'simplecomponent',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> SimpleComponent</h1><p>This is a function to make it super simple to create basic reactive components. This function is included in the MercedUI library but also available as a standalone library.</p><h3><a href='https://github.com/AlexMercedCoder/simpleComponents'> GITHUB </a></h3><h3><a href='https://github.com/AlexMercedCoder/simpleComponents-parcel-template'> Template </a></h3><h3><a href='https://www.npmjs.com/package/@alexmerced/simple_components'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=RJzGdNu3Fck'> Tutorial </a></h3>`,
});

////////////////
// MercedElement
///////////////

makeComponent({
    prefix: 'al',
    name: 'mercedelement',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> MercedElemet</h1><p>MercedElement is class to create WebComponents which is at the core of the MercedUI library, this library only includes MercedElement for those who don't need the other bells and whistles.</p><h3><a href='https://github.com/AlexMercedCoder/MercedElement'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mercedelement'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=p0pT8egjpR4'> Tutorial </a></h3>`,
});

////////////////
// ChainElement
///////////////

makeComponent({
    prefix: 'al',
    name: 'chainelement',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> ChainElement</h1><p>ChainElement is a web component class that creates reactive components but also passes url queries and global data to its components at render. This is a standalone library, this class IS NOT part of the MercedUI library.</p><h3><a href='https://github.com/AlexMercedCoder/ChainElement'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/chainelement'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=9uP17YUjpJA'> Tutorial </a></h3>`,
});

////////////////
// MercedUtils
///////////////

makeComponent({
    prefix: 'al',
    name: 'mercedutils',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> MercedUtils</h1><p>MercedUtils is a library that add several useful tools and functions to the array prototype. If you prefer these functions not be added to the array prototype the Bettertypes library provies an alternative.</p><h3><a href='https://github.com/AlexMercedCoder/JS_Utilities'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mercedutils'> NPM </a></h3><h3><a href='https://www.youtube.com/playlist?list=PLY6oTPmKnKbbge3XP8ne041HAQwGle8_Z'> Tutorial </a></h3>`,
});

////////////////
// BetterTypes
///////////////

makeComponent({
    prefix: 'al',
    name: 'bettertypes',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> BetterTypes</h1><p>BetterTypes offers many of the same utilities that MercedUtils does but does through new classes vs adding functions to the array and string prototypes.</p><h3><a href='https://github.com/AlexMercedCoder/bettertypesjs'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/@alexmerced/bettertypes'> NPM </a></h3><h3><a href='https://www.youtube.com/playlist?list=PLY6oTPmKnKbbge3XP8ne041HAQwGle8_Z'> Tutorial </a></h3>`,
});

////////////////
// mutils
///////////////

makeComponent({
    prefix: 'al',
    name: 'mutils',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> Mutils</h1><p>A Utility library of utility classes that extends Sets, Arrays and help work with Random Numbers.</p><h3><a href='https://github.com/AlexMercedCoder/Mutils'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mutils_am'> NPM </a></h3>`,
});

///////////////////
//Basic Element
///////////////////

makeComponent({
    prefix: 'al',
    name: 'basicelement',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> BasicElement</h1><p>BasicElement aims to be the simplest possible extension to HTMLElement adding state and props and nothing else..</p><h3><a href='https://github.com/AlexMercedCoder/BasicElement'> GITHUB </a></h3><h3><a href='https://github.com/AlexMercedCoder/BasicElement'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=QsmMGaPPm7g'> Tutorial </a></h3>`,
});

///////////////////
//ComponentZoo
///////////////////

makeComponent({
    prefix: 'al',
    name: 'componentzoo',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> ComponentZoo</h1><p>ComponentZoo aims to house all the HTMLElement extended classes from all my other libraries and more including a Router Component, StyleWrapper Component (think styled components), and FormWrapper (FormTool as a Component).</p><h3><a href='https://github.com/AlexMercedCoder/ComponentZoo'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/componentzoo'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=EE0N7Yluu6o'> Tutorial </a></h3>`,
});

///////////////////
//FunComponent
///////////////////

makeComponent({
    prefix: 'al',
    name: 'funcomponent',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> FunComponent</h1><p>Allows you to make web component is a functional style that enables the creation of hooks.</p><h3><a href='https://github.com/AlexMercedCoder/funComponent'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/funcomponents'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=5_EIaA9iyPw'> Tutorial </a></h3>`,
});

///////////////////
//mBlocks
///////////////////

makeComponent({
    prefix: 'al',
    name: 'mblocks',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> mBlocks</h1><p>A class based front-end UI library for creating components without the web-component api or other tooling like Babel or JSX.</p><h3><a href='https://github.com/AlexMercedCoder/mBlocks'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/mblocks'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=MglHxXiSMwA'> Tutorial </a></h3>`,
});

///////////////////
//superFunc UI
///////////////////

makeComponent({
    prefix: 'al',
    name: 'superfuncui',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> superFunc UI</h1><p>A function based front-end UI library for creating components without the web-component api or other tooling like Babel or JSX.</p><h3><a href='https://github.com/AlexMercedCoder/superFunc'> GITHUB </a></h3><h3><a href='https://www.npmjs.com/package/superfuncui'> NPM </a></h3><h3><a href='https://www.youtube.com/watch?v=pZRD1Iq99Hs'> Tutorial </a></h3>`,
});

///////////////////
//merced-reactor
///////////////////

makeComponent({
    prefix: 'al',
    name: 'mercedreactor',
    template: `<style>h1 {text-align: center;} p{text-align: center; width: 90%; margin: 10px auto;} h3 {text-align: center;}</style><h1> merced-reactor</h1><p>A tool for quickly generating lightweight react projects, think of it as a slimmer create-react-app.</p><h3><a href='https://www.npmjs.com/package/superfuncui'> NPM </a></h3><h3><a href='https://www.npmjs.com/package/merced-reactor'>`,
});
