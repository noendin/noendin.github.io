/*
The simplist React component ever.
It just renders an H1 tag into the body of the page. Since
JSX is basically just HTML, you can use any valid tag you want.
*/
// JSX - requires Build time JSX compilation
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));

// going with plain React.js JavaScript for simplicity
ReactDOM.render(React.createElement('h1',{id:'root3'},'Hello World'), document.getElementById('root1'));

//and now overwriting same DOM element with simple example with data binding
class Hello extends React.Component {
  render() {
    return React.createElement('h2', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render( React.createElement( Hello, {toWhat: 'World'}, null ), document.getElementById('root2') );
