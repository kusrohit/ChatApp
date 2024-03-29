import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params; // It's a way to extract specific properties from an object and assign them to variables with different names.
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // socket.io functionality go here

    // this will run in sync (one after another)
    // await conversation.save();
    // await newMessage.save();

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in send message controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
  // console.log("message sent.", req.params.id);
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // not references but actual messages

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get message controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
