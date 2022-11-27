import React from 'react'
import AuthCheck from '../../components/AuthCheck';



export default function post() {
  return (
    <AuthCheck>
      <form >
      {(
        <div className=" caret-slate-400">
          content
        </div>
      )}

      <div className="">

        <textarea
          name="content"
          // ref={register({
          //   maxLength: { value: 20000, message: 'content is too long' },
          //   minLength: { value: 10, message: 'content is too short' },
          //   required: { value: true, message: 'content is required' },
          // })}
        ></textarea>


        <fieldset>
          <input className name="published" type="checkbox" />
          <label>Published</label>
        </fieldset>

        <button type="submit" className="btn-green" >
          Save Changes
        </button>
      </div>
    </form>
</AuthCheck>
  );
} 
