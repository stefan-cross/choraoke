import React, {FunctionComponent, useEffect, useState} from 'react';
// @ts-ignore
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';

const Recorder : FunctionComponent = () => {

    const [recordState, setRecordState] = useState(RecordState.STOP)
    const [timeLeft, setTimeLeft] = useState(10)
    const [recData, setRecData] = useState<any>(null)

    const start = () => {
        setRecordState(RecordState.START)
    }

    const stop = () => {
        setRecordState(RecordState.STOP)
    }

    //audioData contains blob and blobUrl
    const onStop = (audioData: any) => {
        console.log('audioData', audioData)
        setRecData(audioData)
        // Upload data to
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000);
    })

    return (
        <div>
            <h1>Welcome</h1>
            <p>Hit the listen button to try and find the song and its chords</p>
            <AudioReactRecorder state={recordState} onStop={onStop} backgroundColor={'white'}/>
            <button onClick={start}>Listen</button>
            <button onClick={stop}>Stop</button>
            <h2>Listening ... {timeLeft}</h2>
            <audio
                id='audio'
                controls
                src={recData ? recData!.url : null}
            ></audio>
        </div>
    )
}

export default Recorder;