import React from 'react';
import renderer from 'react-test-renderer';
import MessageList from './MessageList';

describe('<MessageList />', () => {
  it('renders correctly', () => {
    const messages = ['Message 1', 'Message 2', 'Message 3'];

    const tree = renderer.create(<MessageList messages={messages} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
