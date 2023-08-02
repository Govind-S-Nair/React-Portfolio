import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/a2fa785a-589a-433b-a577-d840855c3429' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#009867] text-gray-300'>Contact</p>
                <p className=' text-xl text-gray-300 py-4'>Get in touch by filling out the form below.</p> 
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 bg-[#ccd6f6] p-2' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#009867] px-4 py-3 my-8 mx-auto-flex items-center'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact
