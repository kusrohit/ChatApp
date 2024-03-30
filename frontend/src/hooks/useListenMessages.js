import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../storeZustand/useConversation";

import notificationSound from "../assets/sound/notification_sound.wav"

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound)
      sound.play()
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
