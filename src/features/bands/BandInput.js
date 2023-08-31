import { useState } from "react";
import bandAdded from './bandsSlice'

function BandInput() {
  const [text, setText] = useState("");

  function handleChange(e){
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatchEvent(bandAdded(text))
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" onChange={handleChange}>
      </input>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default BandInput;
