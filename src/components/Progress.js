import React, { useEffect, useState } from "react";

const Progress = () => {

    const [progresses, setProgresses] = useState([
        { done: 90, name: "HTML" },
        { done: 90, name: "CSS" },
        { done: 90, name: "Tailwind css"},
        { done: 50, name: "Javascript"},
        { done: 50, name: "React Js"},
        { done: 70, name: "Git"},
        { done: 50, name: "Illustrator"},
        { done: 50, name: "Photoshop"},
      ]);
    
      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setProgresses(prevProgresses =>
            prevProgresses.map(progress => ({
              ...progress,
              style: { opacity: 1, width: `${progress.done}%` },
            }))
          );
        }, 200);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return (
        <>
            <div className="p-4">
                <span className="text-xl font-semibold">MY SKILLS</span>
                {progresses.map((progress, index) => (
                  <div>
                      <span className="text-xs p-1 tracking-wide">{progress.name}</span>
                      <div className="progress" key={index}>
                          <div className="progress-done text-xs" style={progress.style}>
                              <div>{progress.done}%</div>
                          </div>
                      </div>
                  </div>
                ))}
            </div>
        </>
    )
}

export default Progress