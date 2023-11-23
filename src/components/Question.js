import React, { useState } from "react";

const Question = ({data}) => {
    const[selected , setSelected] = useState('')
    const changeHandler = (e) => {
        setSelected(e.target.value)
    }
    return(
        <>
        
        <div style={{display:"table-row"}}>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h2 className="mb-5">{data.question}</h2>
                        <div className="control">
                            {
                                data.choices.map((choice, key)=>{
                                    return(
                                        <label className="radio has-backgorund-light" key={key}>
                                            <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                                            {choice}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Question;