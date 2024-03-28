import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

function MessageContainer() {
  const noChatSelected = false;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* <Header /> */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To : </span>
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="text-center px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 🙏 John Doe ✨</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};


// starter code for message container

// function MessageContainer() {
//   return (
//     <div className="flex flex-col md:min-w-[450px]">
//       <>
//       {/* <Header /> */}
//       <div className="bg-slate-500 px-4 py-2 mb-2">
//         <span className="label-text">To : </span>
//         <span className="text-gray-900 font-bold">John Doe</span>
//       </div>
//       <Messages />
//       <MessageInput />
//       </>
//     </div>
//   );
// }

// export default MessageContainer;
