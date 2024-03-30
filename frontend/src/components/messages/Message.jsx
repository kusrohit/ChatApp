import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../storeZustand/useConversation";
import { extractTime } from "../../utils/extractTime";

function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const formatedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : ""

  

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="bubble component" src={profilePic} />
          </div>
        </div>
        <div
          className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}
        >
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {formatedTime}
        </div>
      </div>
    </div>
  );
}

export default Message;

// starter code for message

// function Message() {
//   return (
//     <div>
//       <div className="chat chat-end">
//         <div className="chat-image avatar">
//           <div className="w-10 rounded-full">
//             <img
//               alt="Tailwind CSS chat bubble component"
//               src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//             />
//           </div>
//         </div>
//         <div className="chat-bubble text-white bg-blue-500">Hi! It's me, Rohit.</div>
//         <div className="chat-footer opacity-50 text-xs flex gpa-1 items-center">Seen at 12:46</div>
//       </div>
//     </div>
//   );
// }

// export default Message
