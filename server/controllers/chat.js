const asyncHandler = require("express-async-handler");
const Chat = require("../models/chat");
const User = require("../models/user");


const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    console.error("User not found");
    return res.sendStatus(404);
  }

  let isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      {
        users: {
          $elemMatch: { $eq: req.user._id },
        },
      },
      {
        users: {
          $elemMatch: { $eq: userId },
        },
      },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name picture email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
    //storing chat in databse
    try {
      const createdChat = await Chat.create(chatData);
      const Fllchat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(chatData);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

const fetchChat = asyncHandler(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name picture email",
        });
        res.status(200).send(results);
      });
  } catch (err) {
    res.status(500).send(err);
    throw new Error(err);
  }
});

const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.user || !req.body.name) {
    return res.status(400).send({ message: "Pleaser Fill in the blank" });
  }
  const groupUsers = JSON.parse(req.body.user);
  if (groupUsers.length < 2) {
    return res
      .status(400)
      .send({ message: " group users must be more than 2" });
  }

  groupUsers.push(req.user);
  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      isGroupChat: true,
      users: User,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("user", "-password")
      .populate("groupAdmin", "-password");

    res.status(200).send(fullGroupChat);
  } catch (err) {
    res.status(500).send(err);
    throw new Error(err.message);
  }
});

const renameGroupChat = asyncHandler(async (req, res) => {
  const { chatName, chatId } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName: chatName,
    },
    { new: true }
  )
  .populate("user", "-password")
  .populate("groupAdmin", "-password");
  if(!updatedChat){
   res.status(400);
   throw new Error(" Couldn't update chat, chat not found")
  } else {
    res.status(200).json(updatedChat);
  }  
});

const addToGroup = asyncHandler(async (req, res) => {
   const { chatId , userId } = req.body;

   const added = await Chat.findByIdAndUpdate( 
    chatId, 
    {
      $push: { users: userId}
    }, 
    {new: true}
  )
  .populate("user", "-password")
  .populate("groupAdmin", "-password");

  if(!added) {
    res.status(400)
    throw new Error('User not Found')
  } else {
    res.status(201).json(added)
  }
})

const removeFromGroup = asyncHandler(async (req, res) => {
  const { chatId , userId } = req.body;

  const removeUser = await Chat.findByIdAndUpdate( 
   chatId, 
   {
     $pull: { users: userId}
   }, 
   {new: true}
 )
 .populate("user", "-password")
 .populate("groupAdmin", "-password");

 if(!removeUser) {
   res.status(400)
   throw new Error('User not Found')
 } else {
   res.status(201).json(removeUser)
 }
})

module.exports = { accessChat, fetchChat, createGroupChat, renameGroupChat, addToGroup, removeFromGroup };
