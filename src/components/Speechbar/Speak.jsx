import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const Example = (props) => {
    //const message = props.message
    const initial_message = props.message;
    const [text, setText] = useState(initial_message);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [voiceIndex, setVoiceIndex] = useState(null);
    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
        onEnd,
    });

    const voice = voices[voiceIndex] || null;
    const styleFlexRow = { display: 'flex', flexDirection: 'row' };
    const styleContainerRatePitch = {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 12,
    };

    return (
        <form>
            {!supported && (
                <p>
                    Oh no, it looks like your browser doesn&#39;t support Speech
                    Synthesis.
                </p>
            )}
            {supported && (
                <React.Fragment>
                    {speaking ? (
                        <button type="button" onClick={cancel}>
                            Stop
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                speak({ text, voice, rate, pitch });
                            }}
                        >
                            Speak
                        </button>
                    )}
                    {
                        <button
                        type="button"
                        onClick={() => {
                            setText(props.message);
                        }}
                    >
                        SetText
                    </button>
                    }
                </React.Fragment>
            )}
        </form>
    );
};

export default Example;