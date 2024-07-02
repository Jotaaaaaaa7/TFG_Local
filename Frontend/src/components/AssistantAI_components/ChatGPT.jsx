// ChatGPT.jsx
import { useAssistant } from './useAssistant';
import './ChatGPT.scss';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const ChatGPT = () => {

  //* Hook que maneja la lógica del chatbot
  const { messages, isTyping, sendMessage } = useAssistant();

  return (
    <div className="ChatBot">
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="Pensando respuesta" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} style={{ marginTop: '15px' }} />
              })}
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={sendMessage} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default ChatGPT;