let GreeterMessage = React.createClass({
    render: function(){
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
    onFormSubmit: function( e ){
        e.preventDefault();

        let name = this.refs.name.value;

        if (name.length > 0){
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },

    render: function(){
        return (
          <form onSubmit={this.onFormSubmit}>
              <input type="text" ref="name"/>
              <button>Set Name</button>
          </form>
        );
    }
});

let MessageForm = React.createClass({
    onFormSubmit: function( e ){
        e.preventDefault();

        let message = this.refs.message.value;

        if (message.length > 0){
            this.refs.message.value = '';
            this.props.onNewMessage(message);
        }
    },

    render: function(){
        return (
          <form onSubmit={this.onFormSubmit}>
              <textarea type="text" ref="message"/>
              <button>Set message</button>
          </form>
        );
    }
});

let Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name:    'React',
            message: 'This is the default message!'
        };
    },

    getInitialState: function(){
        return {
            name:    this.props.name,
            message: this.props.message
        };
    },

    handleNewName: function( name ){
        this.setState({
            name: name
        });
    },

    handleNewMessage: function( message ){
        this.setState({
            message: message
        });
        console.log(message)
    },

    render: function(){
        let name = this.state.name;
        let message = this.state.message;

        return (
          <div>
              <GreeterMessage name={name} message={message}/> <GreeterForm onNewName={this.handleNewName}/>
              <MessageForm onNewMessage={this.handleNewMessage}/>
          </div>
        );
    }
});

let firstName = 'Colper';
let like = 'What do you like?';

ReactDOM.render(
  <Greeter name={firstName} message={like}/>,
  document.getElementById('app')
);
