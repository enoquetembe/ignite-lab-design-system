import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import {Envelope, Lock} from 'phosphor-react'
import './styles/global.css'
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {
  

  return (
   <div className='w-screen h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center'>

    <header className='flex flex-col items-center'>
      <Logo/>

      <Heading size='lg' className='mt-4'>Ignite Lab </Heading>

      <Text className='text-gray-400 mt-1'>
          Login and start using now
      </Text>
    </header>
    
    <form className=' w-96 flex flex-col items-stretch mt-6 gap-4'>

      <label htmlFor="email" className='flex flex-col gap-3'>
        <Text className='font-semibold'>E-mail adress:</Text>
        <TextInput.Root>

          <TextInput.Icon>
            <Envelope/>
          </TextInput.Icon>

          <TextInput.Input id='email' type='email' placeholder='enoque@example.com'/>

        </TextInput.Root>
      </label>


      <label htmlFor="passoword" className='flex flex-col gap-3'>
        <Text className='font-semibold'>Passoword:</Text>
        <TextInput.Root>

          <TextInput.Icon>
            <Lock/>
          </TextInput.Icon>

          <TextInput.Input id='passoword' type='password' placeholder='********'/>

        </TextInput.Root>
      </label>
      
      <label htmlFor="remember" className='flex items-center gap-2'>

        <Checkbox id='remember'/>

        <Text size='sm' className='text-gray-200'> Remember me for 30 days</Text>

      </label>

      <Button type='submit' className='mt-4'>Login</Button>

    </form>

    <footer className='flex flex-col items-center gap-4  mt-5'>
      <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-100'>Forgot you password?</a>
      </Text>

      <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-100'>Don’t have an account? Create one now!</a>
      </Text>

    </footer>
   </div>
  )
}


