If you don't need more than `render()`, you should use a Stateless Function.

## React Events System

They wrap events in cross-browser wrapper called `SyntheticEvent`. In React, events are done `inline`.

In React, you want to stay away from touching the DOM. Instead, you're just manipulating and dealing with data. Instead, you use a `ref`.

## Props, State, and Context

State is a representation as all of the data in our application.

Think of state as one object that holds all the data related to a piece of, or possibly all of, our application.

In React, you edit the data, and React will edit the HTML for you. State is always tied to a specific component.

## Deployment

### Now.sh

Can deploy to now.sh, which will give you a new URL every time you you redeploy and are using the free tier. You can run `ns` from the command line *from within the `/build` directory* for install employment. *However*, this will fail at serving single page applications because it's going to look for folders/directories that do not exist.

Running `ns --cmd "list ./content -s"` will take care of this. Now.sh puts our build directory in a folder called "content." The `-s` denotes "single page" for single-page application.

### GitHub Pages

Didn't watch this.

### Future React Today - Property Initializers

For example, in our constructor function, we currently have to write the following to bind "this".

```javascript
this.loadSamples = this.loadSamples.bind(this);
```

And our function is as follows:

```javascript
loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
```

We can use fat arrow functions to bind "this"; this is called a "property initializer":

```js
loadSamples = () => {
   this.setState({
      fishes: sampleFishes
   });
};
```

**NOTE:** You *need to put a semicolon at the end of the declaration.*

This would allow you to completely remove `this.loadSamples = this.loadSamples.bind(this)` from the constructor function.

