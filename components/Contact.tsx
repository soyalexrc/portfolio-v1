import React from 'react';
import {PhoneIcon, MapIcon, EnvelopeIcon} from '@heroicons/react/24/solid';
import {SubmitHandler, useForm} from "react-hook-form";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
}

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:alexcarvajal2404@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message} (${formData.email})`
  }
  return (
    <section className='min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-10'>
      <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Let's talk.</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+51 917 902 604</p>
          </div>

          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>alexcarvajal2404@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5'>
            <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Lima, Peru.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='name' className='contactInput' type="text"/>
            <input {...register('email')}  placeholder='email' className='contactInput' type="text"/>
          </div>
          <input {...register('subject')}  placeholder='Subject' className='contactInput' type="text"/>
          <textarea {...register('message')}  placeholder='Message' className='contactInput' name="" id="" cols={30} rows={10} />
          <button type='submit' className='bg-[#F7AB0A] hover:bg-[#F7AB0A]/40 transition duration-200 ease-in-out py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </section>
  )
}
