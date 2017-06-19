/* eslint-disable eol-last */
/**
 * Created by admin on 6/14/17.
 */
import React from 'react';
import { Panel, InputGroup, FormControl, Button , Table} from 'react-bootstrap';
import Inbox from './Inbox.jsx';
let io = require('socket.io-client');
let socket =  io();

const MessageContent = (props) => {
  let messages = props.messages.map((message, i) =>
    <div key={i}>{message.user} {message.text}</div>);
  return(
    <div>{messages}</div>
  );
}

MessageContent.propTypes = {
  messages: React.PropTypes.array.isRequired,
};

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chatBoxShow: 'tabbed_sidebar ng-scope chat_sidebar', message:{user:'', text:'', server_read: false,
        idMessage: 0, time: new Date()}, messagesInbox: [],
        emitAddress: '', onAddress: '', messages: [{user: '', text: ''}], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.loadMessage = this.loadMessage.bind(this);
  }

  componentDidMount() {
    console.log('Chat box did mount, socket.on at: ', this.props.onAddress);
    socket.on(this.props.onAddress, (data) => {
      console.log('Receive message: ', data.message);
      this.receiveMessage(data);
      if(data.message.user ==='Client: '){
          console.log('Admin da doc tin nhan.');
          data.message.server_read = true;
          fetch(`/api/message/update`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data.message),
          });

      }
    });
    this.props.onAddress==='receiveClient' && this.loadMessage();
  }

  componentWillReceiveProps(props) {
    console.log('Chat box WillReceiveProps.', props);
    this.setState({emitAddress: props.emitAddress});
    this.setState({onAddress: props.onAddress});
    if(props.messages) this.setState({messages: props.messages});
  }

  loadMessage() {
    console.log('Load message was call');
    fetch(`api/message`).then(response =>
      response.json()
        ).then(message => {
            this.setState({ messagesInbox: message });
            console.log('List Messages Inbox load from database');
            console.log(this.state.messagesInbox);
        }).catch(err => {
            console.log(err);
        });
  }

  handleChange(event) {
    const idMessage = new Date().getTime();
    const time = new Date();
    this.setState({text: event.target.value});
    this.setState({ message: {user: this.props.user, text: event.target.value,
        server_read: false, idMessage: idMessage, time: time}});
    console.log('id message la: ', idMessage);
  }

  sendMessage() {
    this.setState({text: ''});
    console.log('Tin nhan gui di', this.state.message);
    socket.emit(this.state.emitAddress, {
      message: this.state.message,
    });

    //Write message to database
    const newMessage = this.state.message;
    newMessage.server_read = (newMessage.user==='Admin: ')?true:false;
    console.log('Write message: ',newMessage);
      fetch(`/api/message`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMessage),

      }).catch(err => {
          console.log('Error adding car:', err);
      });
    //Add messsage to messages
    let addMessage = this.state.messages;
    addMessage.push(this.state.message);
    this.setState({messages: addMessage});
    console.log('Messages sau khi add: ', this.state.messages);
    this.setState({ message: '' });
  }

  receiveMessage(data) {
    this.setState({message: data.message})
    let addMessage = this.state.messages;
    addMessage.push(data.message);
    this.setState({messages: addMessage});
  }

  render() {
    return (
      <div>
        <Inbox messagesInbox = {this.state.messagesInbox}/>
        <Panel bsStyle = "primary" collapsible defaultExpanded header="ChatBox">
          <MessageContent messages={this.state.messages}/>
          <InputGroup>
              <FormControl type = "text" value = {this.state.text}
                onChange = {this.handleChange} />
              <InputGroup.Button>
               <Button onClick={() => { this.sendMessage();}}>Send</Button>
              </InputGroup.Button>
          </InputGroup>
        </Panel>
      </div>
    );
  }
}