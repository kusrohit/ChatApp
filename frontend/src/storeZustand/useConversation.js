import { create } from "zustand";

// custom hooks by zustand
const useConversation = create((set) => ({
  selectedConversation: null, // state
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }), // setter fun for state just like useState hook

  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
