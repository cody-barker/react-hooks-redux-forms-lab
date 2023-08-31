import { useState } from "react";
import { bandAdded } from './bandsSlice';
import { useDispatch } from 'react-redux';

function BandInput() {
  const [name, setname] = useState("");
  const dispatch = useDispatch();

  function handleChange(e){
    setname(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(bandAdded(name))
    setname("")
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>add band</label>
      <input type="text" name="name" onChange={handleChange}>
      </input>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default BandInput;
