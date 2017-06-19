/**
 * Created by admin on 6/19/17.
 */
import React from 'react';
import { Panel, Button , Table} from 'react-bootstrap';

const InboxRow = (props) => {
    return (
      <tr>
          <td>{props.message.user}</td>
          <td>{props.message.text}</td>
          <td>{props.message.time}</td>
          <td><Button>Reply</Button></td>
      </tr>
    );
}
InboxRow.propsTypes = {
    message: React.PropTypes.object.isRequired,
}

function InboxTable(props) {
    console.log('Inbox Table receive data');
    console.log(props.messages);
    let inboxRows = props.messages.map((message, i) =>
        <InboxRow key = {i} message = {message}/>
    );

    return (
        <Panel bsStyle = "success" collapsible defaultExpanded header = "Inbox">
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>UserName</th>
                        <th>Message</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {inboxRows}
                    </tbody>
                </Table>
        </Panel>
    );
}
InboxTable.propsTypes = {
    messages: React.PropTypes.array.isRequired,
}

export default class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: []};
    }

    componentWillReceiveProps(props) {
        console.log('Inbox will receive props', props);
        this.setState({messages: props.messagesInbox});
    }

    render() {
        return (
                <div>
                    <InboxTable messages = {this.state.messages} />
                </div>
        );
    }
}