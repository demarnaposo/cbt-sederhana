import React, { useEffect, useRef, useState } from "react";

const Question = ({ data , onAnswerUpdate , activeQuestion , numberOfQuestion , onSetActiveQuestion }) => {

    const[selected , setSelected] = useState('')
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data])


    const changeHandler = (e) => {
        setSelected(e.target.value)
    }

const nextClickHandler = () => {
    onAnswerUpdate(prevState => [...prevState,{q: data.question, a: selected}])
    if(activeQuestion < numberOfQuestion-1){
        onSetActiveQuestion(activeQuestion+1)
    }

}

    
    return(
        <>
        
        <div style={{display:"table-row"}}>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <h2 className="mb-5">{data.question}</h2>
                        <div className="control" ref={radiosWrapper}>
                            {
                                data.choices.map((choice, key)=>{
                                    return(
                                        <label className="radio has-background-light" key={key}>
                                            <input type="radio" name="answer" value={choice} onChange={changeHandler}/>
                                            {choice}
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <button className="button is-success is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Selanjutnya</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Question;