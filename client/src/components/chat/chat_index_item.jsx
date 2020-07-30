import React from "react";

class ChatIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.renderParticipants = this.renderParticipants.bind(this);
    this.renderTime = this.renderTime.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  renderParticipants() {
    let usernames = [];
    const { chat } = this.props.chatData;
    const { users, currentUser } = this.props;

    try{
    if (chat.name) {
      usernames.push(chat.name);
    } else {
      chat.participants.map(user => {
        if (user === currentUser.id) {
          return usernames;
        } else {
          return usernames.push(users[user].username);
        }
      });
    }
   } catch (err) {

   }

    return <div className="participants">{usernames.join(", ")}</div>;
  }

  renderTime() {
    let { messages } = this.props.chatData;
    try{
    if (messages.length > 0) {
      const time = messages[messages.length - 1].timestamp;
      const month = time.slice(5, 7);
      const date = time.slice(8, 10);
      const year = time.slice(2, 4);

      return (
        <p className="date">
          {month}-{date}-{year}
        </p>
      );
    }
  } catch(err) {

  }
  }

  renderMessage() {
    let { messages } = this.props.chatData;

    try{

    if (messages.length > 0) {
      const message = messages[messages.length - 1];

      return (
        <p>{message.body}</p>
      );
    }
   } catch(err) {

   }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeGroupModal();
    let chatId = this.props.chatData.chat._id;
    if(chatId == undefined) { chatId = null; }
    console.log('chatId',chatId)
    this.props.openChatModal(chatId);
  }

  render() {
    return (
      <li className="chats" onClick={this.handleClick}>
        <div className="user-pictures">
          <i id="pf-pic" className="fas fa-user-circle" />
        </div>
        <div className="chat">
          <div className="chat-content">
            {this.renderParticipants()}
            {this.renderMessage()}
          </div>
          <div></div>{this.renderTime()}
        </div>
      </li>
    );
  }
}

export default ChatIndexItem;
