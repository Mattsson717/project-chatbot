// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const nameForm = document.getElementById('name-form')
// Button-Sounds
const voff = document.getElementById('voff')
const voffSound = document.getElementById('voff-sound')
const mjauAlert = document.getElementById('mjau')

let currentQuestion = 1


// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log("I am user!")
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_2.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    console.log("I am bot!")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot_2.png" alt="Bot" />
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
  setTimeout(() => showMessage('Do you like dogs', 'bot'), 1000)
    
    inputWrapper.innerHTML =  `
    <button id="yes">YES</button>
    <button id="no">NO</button>
    `
 document.getElementById('yes').addEventListener('click', () => {
    showMessage('Yes', 'user')
    setTimeout(() => showMessage('That´s what I thought! I mean who doesn’t?!', 'bot'), 500)
    handleInput()
  })
  document.getElementById('no').addEventListener('click', () => {
    showMessage('No', 'user')
    setTimeout(() => showMessage('Wrong answer! Who are you?! A cat person?', 'bot'), 1000)
    setTimeout(() => showMessage('Try another Bot! Bye bye! 👋🏼', 'bot'), 1500)
    wrongAnswer()
  })
} 

const wrongAnswer = () => {
  currentQuestion++
    inputWrapper.innerHTML =  `
    <button id="bye">Bye!</button>
    ` 
    document.getElementById('bye').addEventListener('click', () => {
    location.reload ()    
})
}
  const breedQuestion = () => {
    currentQuestion++
    setTimeout(() => showMessage(`What breed do you like?`, 'bot'), 1500)
      inputWrapper.innerHTML =  `
      <button id="kaffe">German Shepard</button>
      <button id="svante">Labrador</button>
      `

    document.getElementById('kaffe').addEventListener('click', () => {
      showMessage('German Shepard', 'user')
      setTimeout(() => showMessage('Yay! That makes us two!', 'bot'), 1000)
      handleInput()
    }
    )
    document.getElementById('svante').addEventListener('click', () => {
      showMessage('Labrador', 'user')
      setTimeout(() => showMessage('Yay! That makes us two!', 'bot'), 1000)
      handleInput()
  })
}

  const byeBye = () => {
    currentQuestion++
      setTimeout(() => showMessage('Bye for now 👋🏼', 'bot'), 1500)
      inputWrapper.innerHTML =  `
      <button id="bye">Bye bye!</button>
      `
      document.getElementById('bye').addEventListener('click', () => {
        
      location.reload () 
}
)
  }

//Here we change the currentQuestion varible
const handleInput = (event) => {
    
  if (currentQuestion === 1) {
    handleName() }
    else if (currentQuestion === 2){
    dogQuestion()
  } else if (currentQuestion === 3) {
    breedQuestion()
  } else {
    byeBye()
  }
  currentQuestion++
}

// Set up your eventlisteners here
nameForm.addEventListener('submit', (event) => {
    event.preventDefault ()
    handleInput()
    })

  const handleName = () => {
  const name = nameInput.value
    showMessage(name, 'user')
    nameInput.value = ''

    const answerOne = (`Hi ${name}! Welcome!`) 
    setTimeout(() => showMessage(answerOne, 'bot'), 1000)
    setTimeout(dogQuestion, 1000)
  }

voff.addEventListener('click', () => {
  function playAudio (voffSound){
  }
  voffSound.play();
})

mjauAlert.addEventListener('click', () => {
  alert('Oh no, we don´t mjau here!')
})


setTimeout(greeting, 1000)