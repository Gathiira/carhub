"use client";

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {

    const scrolltoHash = (element_id: string) => {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }

    const handleScroll = () => {
        scrolltoHash('discover')
    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h2 className='hero__title'>
                    Find, Book, or rent a car &mdash; quickly and easily
                </h2>
                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless booking process
                </p>
                <CustomButton
                    title='Explore Cars'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.avif" alt='' fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero