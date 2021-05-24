// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // EXERCISE 1
  //   const submitHandler = (evt) => {
  //     evt.preventDefault();
  //     const username = evt.target.elements[0].value;

  //     onSubmitUsername(username);
  //   };

  //   return (
  //     <form onSubmit={submitHandler}>
  //       <div>
  //         <label htmlFor="username">Username:</label>
  //         <input type="text" id="username" />
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   )
  // }

  // function App() {
  //   const onSubmitUsername = username => alert(`You entered: ${username}`)
  //   return <UsernameForm onSubmitUsername={onSubmitUsername} />
  // }

  // 💯EXTRA CREDIT 1
  // const inputEl = React.useRef(null);

  // const submitHandler = (evt) => {
  //   evt.preventDefault();
  //   console.log(inputEl);

  //   const username = inputEl.current.value;

  //   onSubmitUsername(username);
  // };

  // return (
  //   <form onSubmit={submitHandler}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input type="text" id="username" ref={inputEl} />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // 💯EXTRA CREDIT 2
  const inputEl = React.useRef(null)
  const errorMessage = React.useRef(null)
  const [error, setError] = React.useState('')

  const handleChange = evt => {
    const value = evt.target.value
    const hasError = value === value.toLowerCase()

    // Approach 1
    setError(
      hasError
        ? ''
        : (errorMessage.current.innerText = 'Username must be lower case'),
    )

    //Approach 2
    // setError(hasError ? '' : 'Username must be lower case');
  }

  const submitHandler = evt => {
    evt.preventDefault()
    console.log(inputEl)

    const username = inputEl.current.value

    onSubmitUsername(username)
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={inputEl}
          onChange={handleChange}
        />
        <span
          role="alert"
          ref={errorMessage}
          style={{color: 'red', display: 'block'}}
        >
          {error}
        </span>

        {/*
        // Approach 2
        {error && (
          <span role="alert" style={{color: 'red', display: 'block'}}>
            {error}
          </span>
        )} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
