import React from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
function VoiceCapture() {
    const [iscopy,setCopy]=useClipboard("text to copy");
   const start= ()=> SpeechRecognition.startListening({continuous:true,language:'en-IN'});
   const stop = ()=> SpeechRecognition.stopListening();
    const {transcript, browserSupportSpeechRecognition}= useSpeechRecognition()
    
    // if (!browserSupportSpeechRecognition) {
    //     return null;
    // }
    return (
        <>
            <div className="container">
                <h2>Speech to text converter</h2>
                <br />
                <div className="main-content">
                     {transcript}
                </div>
                <div className="btm-style">
                    <button onClick={setCopy}>Copy{iscopy? "yes" : "no"}</button>
                    <button onClick={start}>Start Listening</button>
                    <button onClick={stop}>Stop Listening</button>
                </div>
            </div>
        </>
    )
}
export default VoiceCapture;