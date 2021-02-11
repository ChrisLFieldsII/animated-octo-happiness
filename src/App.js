import React, { useState } from 'react';

import { NewMessageForm, MessageList } from './comps';

const App = () => {
  const [messages, setMessages] = useState([]);

  const onSendMsg = (msg) => {
    setMessages(messages.concat(msg));
  };

  return (
    <div>
      <NewMessageForm onSend={onSendMsg} />
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
