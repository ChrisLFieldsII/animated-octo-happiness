import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from './NewMessageForm';

describe('<NewMessageForm />', () => {
  let getByTestId;
  let onSend;

  describe('clicking the send button', () => {
    beforeEach(async () => {
      onSend = jest.fn();
      ({ getByTestId } = render(<NewMessageForm onSend={onSend} />));

      await userEvent.type(getByTestId('messageText'), 'New Message');

      userEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('messageText').value).toEqual('');
    });

    it('calls onSend callback', () => {
      expect(onSend).toHaveBeenCalledWith('New Message');
    });
  });
});
