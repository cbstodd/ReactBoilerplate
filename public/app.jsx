let GreeterMessage = React.createClass({
    render: function () {
        let name = this.props.name;
        let message = this.props.message;

        return (
          <div>
              <h1>Hello {name}!</h1>
              <p>{message}</p>
          </div>
        );
    }
});

let GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        let name = this.refs.name.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
          <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="name"/>
              <button>Set Name</button>
          </form>
        );
    }
});

let Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    handleNewName: function (name) {
        this.setState({
            name: name
        });
    },
    render: function () {
        let name = this.state.name;
        let message = this.props.message;

        return (
          <div>
              <GreeterMessage name={name} message={message}/>
              <GreeterForm onNewName={this.handleNewName}/>
          </div>
        );
    }
});

let firstName = 'Colper';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
