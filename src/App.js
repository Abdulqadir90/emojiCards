import './App.css';
import Emoji from "./Emoji"


const sampleEmoji =   {
    "title": "Grinning",
    "symbol": "😀",
    "keywords": "grinning face happy smiley emotion emotion"
};


function App() {
    return (
        <div className="App">
            <h1>Emojis</h1>
            <div className="row">
            <Emoji/>

            </div>
        </div>
    );
}

export default App;
