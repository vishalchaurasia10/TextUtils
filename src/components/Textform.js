import React,{useState} from 'react'

export default function TextForm(props) {
    
    const clickUpHandler = ()=>{
        let modifiedText = text.toUpperCase()
        setText(modifiedText)
        text.length!==0 && props.showAlert("success","Text converted to uppercase.");
    }
    const clickLowHandler = ()=>{
        let modifiedText = text.toLowerCase()
        setText(modifiedText)
        text.length!==0 && props.showAlert("success","Text converted to Lowercase.");
    }
    const clickClearHandler = ()=>{
        let modifiedText = ''
        setText(modifiedText)
        text.length!==0 && props.showAlert("success","Text cleared.");
    }
    const clickCopyHandler = ()=>{
        navigator.clipboard.writeText(text)
        text.length!==0 && props.showAlert("success","Text copied to clipboard.");
    }
    
    const handleOnChange = (event)=>{

        setText(event.target.value)
    }
    const [text, setText] = useState('');

    const count = (textTyped)=>{
        let len=0
        let word=""
        for(let i=0;i< textTyped.length ;i++)
        {
            let ch = textTyped.charAt(i)
            if(ch!==' '&&ch!=='\n')
            {
                word+=ch
            }else{
                if(word.length>0)
                {
                    len+=1
                    word=""
                }
            }
        }
        return len

    }
    
    return (
        <>
        <div className={`flex flex-col items-center`}>
            <h1 className='text-4xl mt-24 font-medium py-10'>{props.heading}</h1>
            <textarea placeholder='Enter text here' className={`border-2 ${props.mode?'bg-[#202020] text-white':'bg-cyan-50 text-black'} border-black md:w-[65%] p-4 mt-4 text-lg rounded-2xl`} value={text} cols="30" rows="10" onChange={handleOnChange}></textarea>
            <div className="btns flex md:flex-row md:space-x-4 flex-col">
            <button className={`bg-cyan-200 p-2 rounded-xl mt-6 border-2 border-cyan-700 duration-300 hover:bg-cyan-400 hover:text-white ${props.mode?'bg-[#1f1f1f]':''}`} onClick={clickUpHandler}>Convert to Uppercase</button>
            <button className={`bg-cyan-200 p-2 rounded-xl mt-6 border-2 border-cyan-700 duration-300 hover:bg-cyan-400 hover:text-white ${props.mode?'bg-[#1f1f1f]':''}`} onClick={clickLowHandler}>Convert to Lowercase</button>
            <button className={`bg-cyan-200 p-2 rounded-xl mt-6 border-2 border-cyan-700 duration-300 hover:bg-cyan-400 hover:text-white ${props.mode?'bg-[#1f1f1f]':''}`} onClick={clickClearHandler}>Clear Text</button>
            <button className={`bg-cyan-200 p-2 rounded-xl mt-6 border-2 border-cyan-700 duration-300 hover:bg-cyan-400 hover:text-white ${props.mode?'bg-[#1f1f1f]':''}`} onClick={clickCopyHandler}>Copy to clipboard</button>
            </div>
        </div>
        <div className='flex flex-col py-6 pb-12 pl-6 md:pl-52 md:pr-60'>
            <h1 className='text-4xl  font-medium py-10'>Your text summary</h1>
            <p> <span className='text-4xl font-bold'>{count(text+" ")}</span> words and <span className='text-4xl font-bold'>{text.length}</span> characters</p>
            <p className='py-6'><span className='text-2xl font-bold'>{0.008*count(text+" ")}</span> minutes read</p>
            <h1 className='text-2xl font-medium py-5 pt-0 underline'>Preview:</h1>
            <p>{text.length===0?'Nothing to preview here.':text}</p>
        </div>
        </>
    )
}