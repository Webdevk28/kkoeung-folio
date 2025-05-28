import React, { useEffect, useState } from "react";

const Progress = () => {

    const [progresses, setProgresses] = useState([
        { done: 70, name: "Microsoft Office, Printer, Camera" },
        { done: 70, name: "Software, Internet" },
        { done: 70, name: "Word, Excel, Powerpoint" },
        { done: 80, name: "HTML, CSS" },
        { done: 80, name: "Tailwind css"},
        { done: 50, name: "Javascript, React Js"},
        { done: 50, name: "Git"},
        { done: 50, name: "Adobe AI & PS"},
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
                {progresses.map((progress) => (
                  <div className="mt-2" key={progress.name}>
                    <span className="text-sm p-1 tracking-wide">{progress.name}</span>
                    <div className="progress">
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