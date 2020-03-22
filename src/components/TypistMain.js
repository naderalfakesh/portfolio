import React  from 'react'
import Typist from "react-typist";
const list=[
    "React JS",
    "Material UI",
    "Vue JS",
    "Styled components",
    "TypeScript",
    "Webpack",
    "and More"
];

export default function TypistMain() {
    return (
        <p>
          <Typist
            cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
            startDelay={1000}
          >
            <span> HTML, CSS, JavaScript, Bootstrap...</span>
            
            {list.map((feature,i)=>
                {
                    return i!==0 ? 
                    [<Typist.Backspace count={list[i-1].length+4} delay={300} />,<span> {feature+"..."} </span>] : 
                    [<Typist.Backspace count={"Bootstrap".length+3} delay={300} />,<span> {feature+"..."} </span>]
            }
                
                )}
            
          </Typist>
        </p>
    )
}
