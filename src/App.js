        import React,{ useState } from "react";
        import "./styles.css";

        const emojiDictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎾": "Tennis",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🏏": "Cricket Game",
  "🏑": "Field Hockey",
  "🏒": "Ice Hockey",
  "🥍": "Lacrosse",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🥊": "Boxing Glove",
  "🥋": "Martial Arts Uniform",
  "🥅": "Goal Net",
  "⛳": "Flag in Hole",

  "🎣": "Fishing Pole",
  "🎽": "Running Shirt",
  "🎿": "Skis",
  "🛷": "Sled",
  "🥌": "Curling Stone",
  "🎯": "Direct Hit",
  "🎱": "Pool 8 Ball"
        };
       var emojisWeKnow = Object.keys(emojiDictionary);

      export default function App() {
      const  [meaning,setMeaning]=useState("")
        function emojiInputHandler(event){
         var userInput = event.target.value;

          var meaning = emojiDictionary[userInput];

          if (meaning === undefined) {
            meaning = "we don't have this in our database";
          }

          
          setMeaning(meaning);   /*react call to show output*/

        }

        function emojiClickHandler(emoji) { 
          // processing
          var meaning = emojiDictionary[emoji];
          setMeaning(meaning);    /*react call to show output*/

        }
    
        
    
          return (
            <div className="App">
              <h1>Sports Emoji Interpretor </h1>
            
            <input onChange={emojiInputHandler}/>

            <h2>{meaning}</h2> 
            {/* Actual output set by React using useState */}


            <h3>Sports emoji we know</h3>
            {emojisWeKnow.map(function(emoji) {
              return <span 
              onClick={() => emojiClickHandler(emoji)} 
              style={{fontSize:"2rem",padding:"2rem",cursor:"pointer"}} key={emoji} > {emoji} </span>
            })}
            
           </div>
          );
        }
