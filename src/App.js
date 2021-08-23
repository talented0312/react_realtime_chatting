import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29vbC1idXR0ZXJmbHktOCIsImV4cCI6MTYyOTcwMTExN30.u3zoa0AkASXIL8UVMDk1atGfOFFS4jN5N8sn_LTkVB0';

chatClient.connectUser(
  {
    id: 'cool-butterfly-8',
    name: 'cool',
    image: 'https://getstream.io/random_png/?id=cool-butterfly-8&name=cool',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'cool-butterfly-8', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['cool-butterfly-8'],
});

const App = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
