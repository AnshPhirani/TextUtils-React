
import React ,{useState} from 'react'


export default function TextForm(props) {
    const toUppercase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase", "success");
    };
    const toLowercase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success");
    };
    const readAloud = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const clearText = () => {
        setText("");
        props.showAlert("Text is cleared", "success");
    };
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    return (
    <div className='container' style={{color : props.mode === 'light' ? 'black' : "white"}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control mb-3" style={{backgroundColor : props.mode === 'light' ? 'white' : "#212529", color : props.mode === 'light' ? 'black' : "white"}} rows="8" value = {text} onChange = {handleOnChange}></textarea>
            <button className="btn btn-primary m-1" onClick={toUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary m-1" onClick={toLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary m-1" onClick={readAloud}>Read aloud</button>
            <button className="btn btn-primary m-1" onClick={clearText}>Clear text</button>
            <button className="btn btn-primary m-1" onClick={copyText}>Copy to Clipboard</button>
        </div>

        <div className="container">
            <h2>Your text summary</h2>
            <li>{text.split(" ").length} words and {text.length} characters</li>
            <li>{0.015*text.split(" ").length} Minutes read</li>
            <h2>Preview</h2>
            <div style={{ textAlign: "left", border:"2px solid blue", backgroundColor: "lightgrey", color : "black"}} className="container p-2">
                <p>{text}</p>
            </div>
        </div>
        
    </div>
    )
}
