import './App.css'

import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

import { useState } from 'react';

function App() {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [email, setEmail] = useState<string>('')
  const [verify, setVerify] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)


  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }


  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const input = document.querySelector('.inputText input') as HTMLInputElement

    if(regexEmail.test(email)){
      setVerify(true)

    } else{
      setError(true)
      setVerify(false)

      input.style.borderColor = 'red';
    }
  }

  return (
    <div className="App">
      <header>
        <a href="#">
          <img src="logo.svg" aria-hidden='true' alt="Logo" />
        </a>
        <h1>We are launching <strong>soon!</strong></h1>
        {!verify &&
          <p>Subscribe and get notified</p>
        }
        
      </header>
        
      <main> 
        {!verify && 
          <form onSubmit={handleSubmitForm}>
            <div className='inputText'>
              <input type="email" name="email" placeholder='Your email address...' onChange={handleEmail}/>
              {error &&
                <p className='error'> Please provide a valid email address</p>
              }
            </div>
            
            <button type="submit"> Notify Me </button>
          </form>
        }

        {verify &&
          <h2 className='sucessEmail'>
            ✅Thanks <strong> {email} </strong>for signing up✅
          </h2>
        }


        <img src="illustration-dashboard.png" aria-hidden='true' alt="Product" />
      </main>

      <footer>
        <nav>
          <a href="">
            <ImFacebook size='25px' color='#5581e5' title='Facebook' />
          </a>

          <a href="#">
            <BsTwitter size='25px' color='#5581e5' title='Twitter' />
          </a>
          
          <a href="#">
            <BsInstagram size='25px' color='#5581e5' title='Instagram' />
          </a>
        </nav>
        <p>© Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App