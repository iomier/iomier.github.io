---
path: "/portfolio/my-first-post"
date: "2017-11-07"
title: "My first blog post"
feature: "./25q.jpg"
excerpt: "React js is javascript based UI Library developed at Facebook, to create an interactive, stateful & reusable UI components. It is one of the most popular Libraries."

---

##  #1: What is ReactJS?

React js is javascript based UI Library developed at Facebook, to create an interactive, stateful & reusable UI components. It is one of the most popular [javascript frameworks](https://www.onlineinterviewquestions.com/javascript/) that is created for handling the presentation layer for the web and mobile apps.

## #2: List some advantages of ReactJS ?

- **React.js is extremely efficient:** React.js creates its own virtual DOM where your components actually live. This approach gives you enormous flexibility and amazing gain in performance. React.js also calculates what are the changes needed to be made in DOM. This process of React.js avoids expensive DOM operations and make updates in a very client manner.

- **It makes writing Javascript easier:** React.js uses a special syntax called JSX, which allows you to mix HTML with Javascript. The user can drop a bit of HTML in the render function without having to concatenate strings, this is another fantastic thing. React.js turns those bits of HTML into functions with a special JSXTransformer.

- **It gives you out-of-the-box developer tools:** When you start your journey with React.js, do not forget to install official React.js chrome extension. It makes debugging your application much easier. After you install the extension, you will have a direct look into the virtual DOM as if you were browsing a regular DOM tree in the elements panel. Isn’t it pretty amazing!

- **It’s awesome for SEO:** One of the biggest problems with other Javascript frameworks is that they do not search engine friendly. Though there have been some improvements in this area, search engines generally have trouble reading Javascript heavy applications. React.js stands out from the crowd because you can run React.js on the server, and the virtual DOM will be rendered to the browser as a regular web page.

- **UI Test Cases:** It is extremely easy to write UI test cases because the virtual DOM system implemented entirely in JS.

  

![./25q.jpg]()

## #3: What are Components in ReactJS?

React Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Below is a sample component written in ES6 class to display a welcome message on the screen.

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} </h1>;
  }
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

## #4: What is JSX?

JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.

By using JSX one can write the following JSX/JavaScript code:

```
var nav = (
    <ul id="nav">
      <li><a href="#">Home</li>
      <li><a href="#">About
	  <li><a href=”#”>Clients
	  <li><a href=”#”>Contact Us
	  </ul> );
```

And Babel will transform it into this:

```
var nav = React.createElement(
   "ul",
   { id: "nav" },
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "Home"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "About"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "Clients"
      )
   ),
   React.createElement(
      "li",
      null,
      React.createElement(
         "a",
         { href: "#" },
         "Contact Us"
      )
   )
);
```

## #5: Explain life Cycle of React JS Component ?

#### React JS Component Lifecycle

Each component has several “lifecycle methods” that you can override to run code at particular times in the process. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

#### Mounting

These methods are called when an instance of a component is being created and inserted into the DOM:

- constructor()
- componentWillMount()
- render()
- componentDidMount()

#### Updating

An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

#### Unmounting

This method is called when a component is being removed from the DOM:

- componentWillUnmount()

#### Other APIs

Each component also provides some other APIs:

- setState()
- forceUpdate()

#### Class Properties

- defaultProps
- displayName

#### Instance Properties

- props
- state

##  #6: List some features of ReactJS?

Undoubtedly today React is among of one the best JavaScript UI frameworks. It comes with a lot of features that helps programmers to create beautiful application easily, we have listed some of them below.

- It’s Adaptability
- Free and Open Source
- Decorators from ES7
- Server-side Communication
- Asynchronous Functions & Generators
- Flux Library
- Destructuring Assignments
- Usefulness of JSX

## #7: How to use Events in ReactJS?

Using Events is React js is very similar to handling event on DOM elements.The difference is only in syntax like.

1. The name of event is React js is always in camelCase.
2. With JSX you pass a function as the event handler, rather than a string.

Lets understand by an example:

```
// In HTML
<button onclick="activateAccount()">
  Activate Account
</button>
//In React
<button onClick={activateAccount}>
  Activate Account
</button>
```

Another difference is that in React js you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. Read more from https://facebook.github.io/react/docs/handling-events.html

## #8: What is flux in JavaScript?

Flux is an application architecture for creating data layers in JavaScript applications.It was designed at Facebook along with the React view library.Flux is not a framework or a library. It is simply a new kind of architecture that complements React and the concept of Unidirectional Data Flow.
further reading https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture

## #9: What are refs in React?When to use it.

In React ref is used to store the reference of element or component returned by the component render() configuration function.Refs should be avoided in most cases, however, they can be useful when we need DOM measurements or to add methods to the components.

Refs can be used in the following cases

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

## #10: What are stateless components in React?

Stateless components are components that don’t have any state. When something is stateless, it calculates its internal state but it never directly mutates it.For creating a stateless components No class and this keyword is needed.You can create a stateless components using plain functions or Es6 arrow function. Below is an example of stateless component in react.

```
//In Es6 
const Pane = (props) =>
```

{props.children}

;

```
//In Es5 
const Username = ({ username }) =>
```

The logged in user is: {username}

## #11: What is the difference between State and props in ReactJs?

Props

 

are shorthand for properties.they are very similar to an argument is passed to a pure javascript function. Props of the component are passed from parent component which invokes component. During a component’s life cycle props should not change consider them as immutable.In React all props can be accessible with this.props.

```
import React from 'react';
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
const element = ;
```

**State** are used to create dynamic and interactive components in React.State is heart of react component that makes it alive and determines how a component renders & behaves.

```
// simple state example 
import React from 'react';
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    return (<button
              onClick={() => this.updateCount()}
            >
              Clicked {this.state.count} times
            </button>);
  }
}

export default Button;
```