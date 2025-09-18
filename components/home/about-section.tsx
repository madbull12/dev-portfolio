import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section className='p-4 rounded-sm bg-background/10 backdrop-blur-md border border-border rounded-tl-3xl rounded-br-3xl'>
        <Image src="/assets/gaming-lofi.jpg" alt="profile art" width={300} height={500} className='rounded-3xl object-contain' />
    </section>
  )
}

export default AboutSection