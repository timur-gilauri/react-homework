const HelloWorldFunctionalComponent = () => <h1>Hello World from functional component!</h1>

const HelloWorldElement = React.createElement('h1', {}, 'Hello World from createElement!')

class HelloWorldComponent extends React.Component {
  render () {
    return <h1>Hello World from Component!</h1>
  }
}

class HelloWorldPureComponent extends React.PureComponent {
  render () {
    return <h1>Hello World from Pure Component!</h1>
  }
}

class App extends React.PureComponent {
  render () {
    return (
      <div>
        {HelloWorldElement}
        <HelloWorldFunctionalComponent/>
        <HelloWorldComponent/>
        <HelloWorldPureComponent/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
