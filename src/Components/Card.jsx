import React from 'react'

export const Card = () => {

    const details = [
        { name: 'Twitter', href: '#'}, 
        { name: 'Kodecamp Team', href: '#'}, 
        { name: 'Kodecamp Books', href: '#'}, 
        { name: 'Python Books', href: '#'}, 
        { name: 'Background Check for Coders', href: '#'}, 
        { name: 'Design books', href: '#'}
    ]
  return (

        details.map( (detail, index ) => { 
            return (
                <div className='w-full h-[45px] text-center bg-gray-300 rounded mt-[20px] flex items-center justify-center' key={index}>
                    <a href={detail.href} className='font-semibold lg:text-base text-[13px]'>{detail.name}</a>
                </div>
            )
        })
  )

}

export default Card
