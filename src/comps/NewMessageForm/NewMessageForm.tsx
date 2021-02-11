import React, { useState } from 'react';

interface NewMessageFormProps {
  onSend: (msg: string) => void;
}

function NewMessageForm({ onSend }: NewMessageFormProps) {
  const [msg, setMsg] = useState('');

  const _onSend = () => {
    onSend(msg);
    setMsg('');
  };

  return (
    <div>
      <input
        data-testid="messageText"
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button data-testid="sendButton" onClick={_onSend}>
        Send
      </button>
    </div>
  );
}

export default NewMessageForm;
