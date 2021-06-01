import './App.css';
import EmojiCard from './EmojiCard';



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
            <EmojiCard/> {sampleEmoji}

            </div>
        </div>
    );
}

export default App;
