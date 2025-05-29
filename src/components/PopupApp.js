import React, { useState, useImperativeHandle, forwardRef } from 'react';
import '../App.css';
import { IoClose } from "react-icons/io5";
import daddy from '../assets/daddy.png'

const PopupComponent = forwardRef((props, ref) => {
  const [popupState, setPopupState] = useState({
    isVisible: false,
    isClosing: false,
    type: 'mail'
  });

  useImperativeHandle(ref, () => ({
    show: (type) => {
      setPopupState({
        isVisible: true,
        isClosing: false,
        type
      });
    }
  }));

  const closePopup = () => {
    setPopupState(prev => ({
      ...prev,
      isClosing: true
    }));

    setTimeout(() => {
      setPopupState(prev => ({
        ...prev,
        isVisible: false,
        isClosing: false
      }));
    }, 200);
  };

  const valuePopup = {
    frisbee: {
      heading: 'Make it rain 2025',
      Paragraph: 'On May 17–18, 2025, an exciting Frisbee tournament event took place, bringing together 12 competitive teams for an action-packed weekend of high-energy matches and spirited sportsmanship. The event showcased impressive athleticism and teamwork as players from all around came to compete for the championship title. Among the many standout performances, I had the honor of earning the top assist of the tournament, contributing significantly to my team’s success and helping drive our momentum throughout the games. The tournament was a memorable celebration of skill, strategy, and community within the Frisbee sport.',
      img: <div className="mail">...</div>
    },

    codetrick: {
      heading: 'A Passion for Exploring Code and Self-Improvement',
      Paragraph: 'In my free time, I enjoy watching trick coding videos and exploring clever programming techniques that challenge the way I think. I find it fascinating how a few lines of smart code can solve complex problems efficiently. I also spend time searching for the best coding practices and optimized solutions to improve my skills. This habit not only sharpens my logical thinking but also inspires me to become a better developer by constantly learning and applying new concepts.',
      img: <div className="mail">...</div>
    },

    myblog: {
      heading: 'your new car is back now, but when will you return my hands to me?',
      Paragraph: 'A five-year-old boy once accidentally scratched his father is brand-new car with his fingers. The father, extremely angry, tied both of the boy’s hands together with a rope to make him sit still and behave, preventing him from being too fidgety. Because he got busy with something else, the father forgot about his son, leaving him tied up for many hours. This caused the boy’s hands to be severely injured. After taking the boy to the hospital for treatment, the doctor informed the father that the injuries were too serious to be treated and that both of the boy’s hands would need to be amputated. On the day the boy was discharged from the hospital, the father came to pick him up in the new car. The boy looked at the car and asked his father, “Daddy, your new car is back now, but when will you return my hands to me?” Indeed, everyone loves new things, and the sweetness of first love is always cherished… But never love material things so much that you forget the most important people in your life. Broken things can always be bought again, but once you lose a person, you can never buy them back… So cherish the people you love — with all your heart.',
      img: 
      <div className="mail">
        <img src={daddy} alt="person" className="opacity-100"/>
      </div>
    }
  };

  const showPopup = valuePopup[popupState.type];

  return (
    popupState.isVisible && (
      <div className="popup z-10 " onClick={closePopup}>
        <div className="popup-content relative scroll-auto overflow-auto" onClick={e => e.stopPropagation()}>
          <h1 className='font-semibold text-xl py-2 uppercase'>{showPopup.heading}</h1>
          <p className='text-justify sm:text-lg md:text-xl '>{showPopup.Paragraph}</p>
          {/* <div className='object-cover'>{showPopup.img}</div> */}
        </div>
        <div className='absolute right-4 bottom-4 bg-slate-100 size-6 flex justify-center items-center'>
          <div className='text-xl md:text-2xl text-red-600 cursor-pointer  border border-gray-400 shadow-md rounded ' onClick={closePopup}>< IoClose /></div>
        </div>
      </div>
    )
  );
});

export default PopupComponent;
