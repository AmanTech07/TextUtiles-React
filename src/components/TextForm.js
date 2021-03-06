import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.alert(" Text transform to Upper Case!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alert(" Text transform to Lower Case!", "success");
    }

    const handleSentenceClick = ()=>{
        if(text.length>0){
            let str = text.toLowerCase().split(". ");
            for(let i=0; i<str.length; i++){
                str[i] = str[i][0].toUpperCase() + str[i].slice(1);
            }
            setText(str.join(". "));
        }
        props.alert(" Text transform to Sentance Case!", "success");
    }

    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert(" Text Copied!", "success");
    }

    const handleClrClick = ()=>{
        setText("");
        props.alert(" Text Section is Cleared!", "success");
    }

    const btnColor = {
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'#423d6882':'black'
    }

    const wordCal = ()=>{
        // if(text.charAt(text.length-1) === " " || text.charAt(text.length-1)===""){
        //     return text.split(" ").length-1;
        // }
        // else{
        //     return text.split(" ").length;
        // }
        return text.split(/\s+/).filter((Element) => {return Element.length!==0}).length;
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    return (
        <>
            <div className='container my-3' style={{color : props.mode==='light'?'black':'white'}} >
                <h2>{props.heading}</h2>
                <div className="mb-3 my-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#5e5e5e', color : props.mode==='light'?'black':'white'}} id="myBox" rows="10"></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn mx-1 my-1" style={btnColor} onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button type="button" disabled={text.length===0} className="btn mx-1 my-1" style={btnColor} onClick={handleLoClick}>Convert to lowercase</button>
                <button type="button" disabled={text.length===0} className="btn mx-1 my-1" style={btnColor} onClick={handleSentenceClick}>Convert to Sentence case</button>
                <button type="button" disabled={text.length===0} className="btn mx-1 my-1" style={btnColor} onClick={handleCopyClick}>Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn mx-1 my-1" style={btnColor} onClick={handleClrClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
                <h3>Your Text Summary</h3>
                <p> {wordCal()} Words and {text.length} Characters </p>
                <p> Avg. Time to Read this text : {text.length>0?0.008*text.split(" ").length:0} Minutes </p>
                <h3>Preview</h3>
                <p> {text.length>0?text:"Nothing to preview!"} </p>
            </div>
        </>
    )
}
