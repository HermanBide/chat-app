import React from "react";

const chatfooter = ({ input, setInput, room, socket, username }) => {

    const handleSubmit = (e) => { 
        e.preventDefault();
        // console.log({ userName: localStorage.getItem('userName'), message });
        if (input.trim() && localStorage.getItem('userName')) {
            socket.emit('message', {
                username: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketId: socket.id,
            });
        }
        setInput(input.value);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const sendMessage = async () => {
      if (input !== "") {
        const messageData = {
          room: room,
          sender: username,
          message: input,
          timestamp:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes,
        };
        await socket.emit("send_message", messageData);
        console.log("Sent message");
      }
    };
    

  return (
    <div className="text-form">
      <form>
        <div className="form-group" onSubmit={handleSubmit}>
            <textarea 
                className="form-control"
                id="name"
                type="text"
                name="name"
                required
                cols="120"
                rows="4"
                placeholder="Message"
                value={input}
                onChange={handleChange}
            />
        </div>
      </form>
          <div className="form-btn">
            <button type="submit" className="btn" >send</button>
          </div>
    </div>
  );
};

export default chatfooter;
