import React, { useRef } from "react";
import { useTodoContext } from "../utils/GlobalState";

export default function Form() {
  const [todos, dispatch] = useTodoContext();

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <form className='form-group mt-5' onSubmit={handleSubmit}>
      <input
        className='form-control'
        ref={inputRef}
        placeholder='Start typing what you need to do...'
      />
      <button className='btn btn-success mt-3 mb-5' type='submit'>
        Add to List
      </button>
    </form>
  );
}
