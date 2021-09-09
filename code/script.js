// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')

// Global variables, if you need any, declared here
let currentQuestion = 1
console.log('HEJ')

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("I am user!")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("I am bot!")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Questions
const greeting = () => {
  currentQuestion = 1
    showMessage(`Hello there, What's your name?`, 'bot')
}
const dogQuestion = () => {
  currentQuestion++
  showMessage(`Do you like dogs`, 'bot')
  inputWrapper.innerHTML =  `
  <button id="yes">YES</button>
  <button id="no">NO</button>
  `
 document.getElementById('yes').addEventListener('click', () => {
    console.log('Yes-knapp')
    showMessage('Yes', 'user')
    showMessage('That´s what I thought! I mean who doesn’t?!', 'bot')
    handleInput()
  }
  )
  document.getElementById('no').addEventListener('click', () => {
    console.log('no-knapp')
    showMessage('No', 'user')
    showMessage('Wrong answer! Who are you?! A cat person?', 'bot')
    showMessage('Try another Bot! Bye bye! 👋🏼', 'bot')
  }
  )
} 

  const breedQuestion = () => {
    currentQuestion++
    showMessage(`What breed do you like?`, 'bot')
    inputWrapper.innerHTML =  `
    <button id="kaffe">German Shepard</button>
    <button id="svante">Labrador</button>
    `

    document.getElementById('kaffe').addEventListener('click', () => {
      console.log('kaffe')
      showMessage('German Shepard', 'user')
      showMessage('Yay! That makes us two!', 'bot')
      handleInput()
    }
    )
    document.getElementById('svante').addEventListener('click', () => {
      console.log('svante')
      showMessage('Labrador', 'user')
      showMessage('Yay! That makes us two!', 'bot')
      handleInput()
  })
}

  
  const byeBye = () => {
    currentQuestion++
    console.log('BYE')
      showMessage('Bye for now 👋🏼', 'bot')
      inputWrapper.innerHTML =  `
      <button id="bye">Bye bye!</button>
      `
    document.getElementById('bye').addEventListener('click'), (refreshPage) => {
        const refreshPage = () => {
        location.reload();
      }
      
      // byeBye.addEventListener('click'), (refreshPage) {
      // const refreshPage = () => {
      //   location.reload();
      // }

    }
}
//Here we handle all the user input answers. 
nameForm.addEventListener('submit', (event) => {
    event.preventDefault ()
    handleInput ()
    })

  const handleName = () => {
  const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    const answerOne = (`Hi ${name}! Welcome!`) 
    showMessage(answerOne, 'bot')
    setTimeout(dogQuestion, 1000)
    console.log('Answer')
  }


//We change the currentQuestion varible. I moved it to the end as it's more logic to change to next question AFTER you've answered it.
const handleInput = (event) => {
  // event.preventDefault()
  
  console.log('our currentQuestion variable is:', currentQuestion)

  if (currentQuestion === 1) {
    handleName() }
    else if (currentQuestion === 2){
    dogQuestion()
  } else if (currentQuestion === 3) {
    breedQuestion()
  } else if (currentQuestion === 4) {
    byeBye()
  }
  
  currentQuestion++
  console.log('handing over to the bot with a new currentQuestion value', currentQuestion)
}

   //Here we passing the next bot question. This could also be setup more generic, for example with a botQuestion function.


// Set up your eventlisteners here




  
    

  // nameForm.addEventListener('submit', handleInput)



// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 500)
