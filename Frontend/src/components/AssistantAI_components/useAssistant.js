// useAssistant.js
import { useState } from 'react';
import { useChatBot } from '../../Api_Calls/AI_functions';

export function useAssistant() {

  //* Estado que almacena los mensajes del chat
  const [messages, setMessages] = useState([
    {
      message: "Hola, soy tu Asistente Nutricional, ¿en qué puedo ayudarte hoy?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);

  //* Estado que indica si el chatbot está escribiendo
  const [isTyping, setIsTyping] = useState(false);

  //* Función para enviar un mensaje al chatbot
  const sendMessage = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    //* Añade el mensaje del usuario al estado de mensajes
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    //* Llama a la función useChatBot para obtener una respuesta del chatbot
    //* y añade la respuesta al estado de mensajes, si la respuesta no está vacía.
    try {
      const response = await useChatBot(message);
      console.log('Response:', response);
      console.log('Response.message:', response.message);
  
      if (response && response.message && response.message.length > 0) {
        const content = response.message;
  
        if (content) {
          const chatGPTResponse = {
            message: content,
            sender: "ChatGPT",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  //* Devuelve los mensajes, el estado de escritura y la función para enviar mensajes
  return { messages, isTyping, sendMessage };
}