import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

function Conversations() {
  const { loading, conversations } = useGetConversations();
  // console.log("Conversation: ",conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;

// starter code for conversations

// function Conversations() {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   )
// }

// export default Conversations
