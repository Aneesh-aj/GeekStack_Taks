import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Nav from './component/Nav'
import Content from './component/Content'

function App() {

  return (
    <>
      <div className='w-full h-full lg:p-2'>
        <Nav />
        <Content />
      </div>
    </>
  )
}

export default App
