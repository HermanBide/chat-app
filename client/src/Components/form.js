import React from "react";

const form = ({ input, setInput }) => {

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(input.value)
        setInput(input.value);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

  return (
    <div>
      <form>
        <div className="form-group" onSubmit={handleSubmit}>
            <textarea 
                className="form-control"
                id="name"
                type="text"
                name="name"
                required
                cols="170"
                rows="4"
                placeholder="Message"
                value={input}
            />
        </div>
      </form>

            <button type="submit" className="btn" onClick={handleChange}>send</button>
    </div>
  );
};

export default form;
