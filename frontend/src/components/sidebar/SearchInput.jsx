import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../storeZustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be atleast 3 character long.");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search here"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle text-white bg-sky-500">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;

// starter code for search input

// function SearchInput() {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search here"
//         className="input input-bordered rounded-full"
//       />
//       <button type="submit" className="btn btn-circle text-white bg-sky-500">
//         <FaSearch className="w-6 h-6 outline-none"/>
//       </button>
//     </form>
//   );
// }

// export default SearchInput;
