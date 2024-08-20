import { useState } from "react";

function Name() {
  const [name, setName] = useState<String>("");
  
  return (
    <article className="name-container">
      <h2>Hello {name}</h2>
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        type="text"
        placeholder="Your name here"
        style={{padding: "10px", margin: "1rem"}}
      />
    </article>
  );
}

export default Name;
