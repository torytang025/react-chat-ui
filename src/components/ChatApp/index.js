import React from 'react';
import PropTypes from 'prop-types';
import StyledChatApp, { Content, Drawer, Nav, Siderbar } from './style';
import NavBar from 'components/NavBar';
import MessageList from 'components/MessageList';
import Conversation from 'components/Conversation';
import Profile from 'components/Profile';

function ChatApp({ children, ...rest }) {
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Siderbar>
        <MessageList />
      </Siderbar>
      <Content>
        <Conversation />
      </Content>
      <Drawer>
        <Profile />
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
