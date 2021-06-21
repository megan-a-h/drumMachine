'use strict'

/*Code for my drum machine web page. This webpage contains 9 buttons.  On button click or key press each button will play a sound and display a description of the sound  */

/*array of objects called buttonSounds holds the letter id for each button, the keycode for the letter on the keyboard, a string description of the sound and the link to the sound file */
const buttonSounds = [
    {
      id: 'Q',
      keyCode: 81,
      innertext: 'Hi-Hat Closed',
      link: 'Hat1.wav'  
    },
      {
      id: 'W',
      keyCode: 87,
      innertext: 'Hi-Hat Half Open',
      link: 'Hat2.wav'  
    },
       {
      id: 'E',
      keyCode: 69,
      innertext: 'Hi Hat Open',
      link: 'Hat3.wav'  
    },
         {
      id: 'A',
      keyCode: 65,
      innertext: 'Flam Snare',
      link: 'Snare1.wav' 
    },
         {
      id: 'S',
      keyCode: 83,
      innertext: 'Single Hit Snare',
      link: 'Snare2.wav'  
    },
         {
      keyCode: 68,
      id: 'D',
      innertext: 'Close Snare Hit',
      link: 'Snare3.wav'  
    },
         {
      id: 'Z',
      keyCode: 90,
      innertext: 'High Kick Drum',
      link: 'Kick1.wav'  
    },
         {
      id: 'X',
      keyCode: 88,
      innertext: 'Low Kick Drum',
      link: 'Kick2.wav'  
    },
         {
      id: 'C',
      keyCode: 67,
      innertext: 'Medium Kick Drum',
      link: 'Kick3.wav'    
    }
    
    
  ];
  
  /*DrumMachine React Component */
  class DrumMachine extends React.Component{
        constructor(props){
            super(props);
          this.state={
            buttonNum : '',
            id: '',
            
            innerText: ''
          };
        /*binds the "this" keyword to the DrumMachine React Component for the onButtonPress and onKeyPress methods */
        this.onButtonPress = this.onButtonPress.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        
        }
   
/*componentDidMount method adds an event listener for a keydown event and will call the onKeyPress method when the user presses key*/
    componentDidMount(){
        document.addEventListener("keydown", this.onKeyPress);
    }
    
/*componentWillUnmount removes the event listener */
    componentWillUnmount(){
      document.removeEventListener("keydown", this.onKeyPress);
    }

   /*onKeyPress method is activated when the user presses a key.    */ 
    onKeyPress(event){
    
    /*number variable holds the Unicode character code for the key that was pressed  */
        var number = event.keyCode;
    /*index variable will hold the index of the object that corresponds to the letter key that was pressed */
        var index = '';
      
    /*switch statement takes in the number variable and uses that value to set the index variable.  If the user has hit a key that is not on the drum pad then the value of index is set to -1*/
      switch(number){
        case 81:
          index = 0;
          break;
        case 87:
          index = 1;
          break;
        case 69:
          index = 2;
          break;
        case 65:
          index = 3;
          break;
        case 83:
          index = 4;
          break;
        case 68:
          index = 5;
          break;
        case 90:
          index = 6;
          break;
        case 88:
          index = 7;
          break;
        case 67:
          index = 8;
          break;
        default:
            index = -1;
        
      }
    
    /*statements within if statment will execute only if the user has hit a key on the keyboard corresponding to one of the drum pad letters */
    if (index >= 0){
 /*letter variable stores the letter from the object that corresponds to the number of the index variable */
    var letter = buttonSounds[index].id;
  
/*onButtonPress method is called and is sent the values for the letter and index variables */
     this.onButtonPress(index, letter);
    
      }
    }
    
    /*onButtonPress method receives the values for the index of the object in the buttonSounds array and the letter corresponding to that object*/
    onButtonPress(number, letter){
    /*the state variables buttonNum, id and innerText are set based on the values passed to the onButtonPress method */
        this.setState({
        buttonNum: number,
        id: buttonSounds[number].id,
        innerText: buttonSounds[number].innertext
        });
    
    /*plays the sound from the audio element corresponding to the letter ID */
      document.getElementById(letter).play();
     
    }
    
    
        render(){
  
          
          
          return(
            
         /*Below are nine button elements which each contain an audio element.  The button elements call the onButtonPress method on click and send the array index and letter id to the the method.  The audio element contains an id corresponding to the letter on the button and a link to the audio clip that will play on button click or key press */  
            <div id="drum-machine">
              <div className="row">
                  <div className="col-sm-3"></div>
               <button className="btn drum-pad col-sm-2"
                  id="sound1" onClick={() =>
                  this.onButtonPress(0, 'Q')}>Q
                  <audio className="clip" id= "Q" src = {buttonSounds[0].link}/>
                  </button>
  
               <button className="btn drum-pad col-sm-2"
                  id="sound2" onClick={() => this.onButtonPress(1, 'W')}>W
                 <audio className="clip" id= "W" src = {buttonSounds[1].link}/>
                </button>
  
                 <button className="btn drum-pad col-sm-2"
                  id="sound3" onClick={() => this.onButtonPress(2, 'E')}>E
                <audio className="clip" id= "E" src = {buttonSounds[2].link}/></button>
                <div className="col-sm-3"></div>
                </div>
  
                <div className="row">
                  <div className="col-sm-3"></div>
                 <button className="btn drum-pad col-sm-2"
                  id="sound4"
                   onClick={() => this.onButtonPress(3, 'A')}>A
                <audio className="clip" id= "A" src = {buttonSounds[3].link}/></button>
  
                 <button className="btn drum-pad col-sm-2"
                  id="sound5" onClick={() => this.onButtonPress(4, 'S')}>S
                <audio className="clip" id= "S" src = {buttonSounds[4].link}/></button>
  
                 <button className="btn drum-pad col-sm-2"
                  id="sound6" onClick={() => this.onButtonPress(5, 'D')}>D
                <audio className="clip" id= "D" src = {buttonSounds[5].link}/></button>
                <div className="col-sm-3"></div>
                  </div>
                 
               <div className="row">
                  <div className="col-sm-3"></div>
                 <button className="btn drum-pad col-sm-2"
                  id="sound7"
                   onClick={() => this.onButtonPress(6, 'Z')}>Z
                <audio className="clip" id= "Z" src = {buttonSounds[6].link}/></button>
  
                 <button className="btn drum-pad col-sm-2"
                  id="sound8" onClick={() => this.onButtonPress(7, 'X')}>X
                <audio className="clip" id= "X" src = {buttonSounds[7].link}/></button>
  
                 <button className="btn drum-pad col-sm-2"
                  id="sound9" onClick={() => this.onButtonPress(8, 'C')}>C
                <audio className="clip" id= "C" src = {buttonSounds[8].link}/></button>
                <div className="col-sm-3"></div>
                </div>
               
                 <p>Last Sound Played:</p>
           { /*This p element displays a description of the sound that was played.  It displays the string stored in the innerText state variable after the button is clicked or key is pressed */ }
              <p id="display">{this.state.innerText}</p>
              
            </div>
          
          );
        
        
        }
  
  
  }
  
  /*Renders the react component to the 'app' div element on the html page for this website */
  ReactDOM.render(<DrumMachine />, document.getElementById('app'));
      
