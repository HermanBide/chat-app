import React, { useContext, createContext, useState, useEffect} from 'react';
// import { useHistory } from 'react-router-dom';

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();

  // const history = useHistory()

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo", user))
  //   setUser(userInfo);

  //   if(!userInfo) {
  //     history.push('/')
  //   }
  // },[history]);

  return (
    <ChatContext.Provider value={{user,setUser}}>
        {children}
    </ChatContext.Provider>
  )
}

export const chatState = () => {
  return useContext(ChatContext)
}
export default ChatProvider