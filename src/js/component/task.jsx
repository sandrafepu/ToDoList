import React from "react";

const Task = (props) => {


    const handleClick = (event) => {
        props.removeTask(event.target.id)    
    }

    const handleMouseEnter = (e) =>{
        e.target.children[0].classList.replace("hide", "show")
        e.target.children[0].classList.add("rotate-vert-center")
       }
       const handleMouseLeave = (e) =>{
        e.target.children[0].classList.replace("show", "hide")
        e.target.children[0].classList.remove("rotate-vert-center")
       }
    
    return(
        <li className="task-line"
        onMouseEnter={(e)=>handleMouseEnter(e)}
        onMouseLeave={(e)=>handleMouseLeave(e)}
        >
            
            {props.taskName} < button className="button-close " type="button"  onClick={handleClick}
             id={props.taskIndex} class={"hide btn-close"}></button> 
        </li>
    )

}

export default Task;