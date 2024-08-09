"use client"
import React, { useState } from 'react';
import { TbCircleArrowRightFilled, TbCircleArrowLeftFilled } from "react-icons/tb";
import { AiOutlineFileText, AiOutlineRobot, AiOutlineForm, AiOutlineSafety, AiOutlineUsergroupAdd } from "react-icons/ai";

const Content2 = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    { icon: <AiOutlineRobot className='text-blue-500 w-16 h-16' />, title: 'AI Legal Chatbot', text: 'Access instant legal guidance and support through an interactive AI legal chatbot available 24*7.' },
    { icon: <AiOutlineFileText className='text-blue-500 w-16 h-16' />, title: 'Contracts Lifecycle', text: 'End to end lifecycle covering auto generation, collaboration, execution and management of contracts & agreements.' },
    { icon: <AiOutlineForm className='text-blue-500 w-16 h-16' />, title: 'Business & Licenses', text: 'Get your business registered as per government guidelines and obtain necessary licenses with ease.' },
    { icon: <AiOutlineSafety className='text-blue-500 w-16 h-16' />, title: 'Risk Management', text: 'Identify, evaluate, and mitigate legal risks to safeguard your business interests effectively.' },
    { icon: <AiOutlineUsergroupAdd className='text-blue-500 w-16 h-16' />, title: 'Employee Management', text: 'Streamline HR processes including hiring, onboarding, and compliance with labor laws.' }
  ];

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCard((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getCardIndex = (index: number) => {
    return (index + cards.length) % cards.length;
  };

  return (
    <div className='h-[550px] bg-blue-50 flex flex-col  p-8'>
      <div className='text-md text-custom-gray text-start text-[18px] h-[13px] mb-8'>That's where we come</div>
      <div className='text-cust-gray text-2xl font-semibold flex items-center mb-8 font-poppins'>
        Judix: The smarter way to manage your legal and financial matters.
        <span className='flex items-center ml-[500px]'>
          <TbCircleArrowLeftFilled className='text-gray-400 w-7 h-7 cursor-pointer' onClick={handlePrevious} />
          <TbCircleArrowRightFilled className='text-gray-400 w-7 h-7 cursor-pointer' onClick={handleNext} />
        </span>
      </div>
      <div className='relative w-full max-w-5xl flex justify-center space-x-4 ml-44'>
        <div className='bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center w-64 h-64 opacity-50'>
          {cards[getCardIndex(currentCard - 1)].icon}
          <h3 className='text-blue-500 text-xl font-semibold mt-4'>{cards[getCardIndex(currentCard - 1)].title}</h3>
          <p className='text-center text-gray-700 mt-2'>{cards[getCardIndex(currentCard - 1)].text}</p>
          <div className='border-t border-dotted border-gray-300 w-full mt-4'></div>
        </div>
        <div className='bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center w-80 h-80'>
          {cards[currentCard].icon}
          <h3 className='text-blue-500 text-xl font-semibold mt-4'>{cards[currentCard].title}</h3>
          <p className='text-center text-gray-700 mt-2'>{cards[currentCard].text}</p>
          <div className='border-t border-dotted border-gray-300 w-full mt-4'></div>
        </div>
        <div className='bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center w-64 h-64 opacity-50'>
          {cards[getCardIndex(currentCard + 1)].icon}
          <h3 className='text-blue-500 text-xl font-semibold mt-4'>{cards[getCardIndex(currentCard + 1)].title}</h3>
          <p className='text-center text-gray-700 mt-2'>{cards[getCardIndex(currentCard + 1)].text}</p>
          <div className='border-t border-dotted border-gray-300 w-full mt-4'></div>
        </div>
      </div>
      <div className='flex space-x-2 mt-8 ml-[640px]'>
        {cards.map((_, index) => (
          <div key={index} className={`h-2 w-2 rounded-full ${currentCard === index ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        ))}
      </div>
    </div>
  );
}

export default Content2;
