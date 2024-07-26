import React from 'react'
import {allInfo} from "../../../data/allInfo"

const association = () => {
  return (
    <article className="flex flex-col justify-center px-40 py-20 bg-[url('/abstract-textured-backgound.jpg')]">
      <section>
        <h1 className='text-white text-4xl text-center pb-12'>{allInfo.principalTitle}</h1>
        <div>
          <h2 className='text-white text-center mb-10 text-2xl'>{allInfo.title}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description}</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.title1}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description1}</span>
          </div>
        </div>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle1}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescription1}</span>
          </div>
        </div>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle2}</h2>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.pointA}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.descriptionA}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.pointB}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.descriptionB}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.pointC}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.descriptionC}</span>
            <h3>{allInfo.subpoint1}</h3>
            <span>{allInfo.subdescriptionC1}</span>
            <h3>{allInfo.subpoint2}</h3>
            <span>{allInfo.subdescriptionC2}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.pointD}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.descriptionD}</span>
          </div>
        </div>
      </section>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.title2}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description2}</span>
          </div>
        </div>
      <section>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.title3}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description3}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle3A}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescription3A}</span>
          </div>
          <h2  className='text-white text-center my-10 text-2xl'>{allInfo.subtitle3B}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <h3>{allInfo.point3i}</h3>
            <span>{allInfo.subdescription3i}</span>
            <h3>{allInfo.point3ii}</h3>
            <span>{allInfo.subdescription3ii}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle3C}</h2>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.point3A}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescriptionP3A}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.point3B}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescriptionP3B}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.point3C}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescriptionP3C}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.point3D}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescriptionP3D}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.point3E}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.subdescriptionP3E}</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.title4}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description4}</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.title5}</h2>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5A}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5A}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5B}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5B}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5C}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5C}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5D}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5D}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5E}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5E}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5F}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5F}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5G}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5G}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5H}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5H}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5I}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5I}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5J}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5J}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5K}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5K}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5L}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5L}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5M}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5M}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5N}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5N}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5O}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5O}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5P}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5P}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5Q}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5Q}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5R}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5R}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5S}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5S}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle5T}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description5T}</span>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.title2}</h2>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle51}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <h2>{allInfo.point5A}</h2>
            <span>{allInfo.descriptionP5A}</span>
            <h2>{allInfo.point5B}</h2>
            <span>{allInfo.descriptionP5B}</span>
            <h2>{allInfo.point5C}</h2>
            <span>{allInfo.descriptionP5C}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle52}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description52}</span>
          </div>
          <h2 className='text-white text-center my-10 text-2xl'>{allInfo.subtitle53}</h2>
          <div className='justify-around shadow-xl border-t bg-white p-10 rounded-2xl font-bold after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:left-0 after:bottom-0 after:bg-black'>
            <span>{allInfo.description53}</span>
          </div>
        </div>
      </section>
    </article>
  )
}

export default association
