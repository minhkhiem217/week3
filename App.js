import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameStatus from './components/GameStatus';
import ButtonGroup from './components/ButtonGroup';
import PlayerCard from './components/PlayerCard';

const CHOICES = [
  { name: 'rock', 
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' 
  }, 
  { name: 'paper', 
    uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' 
  }, 
  { name: 'scissors', 
    uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' 
  } 
];

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
  let resultText;

  if (userChoice === 'rock') {
    if(computerChoice === 'scissors'){
      resultText='Victory!';
    }
    else{
      resultText='Defeat!';
    }
  }
  if (userChoice === 'paper') {
    resultText = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    resultText = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) resultText = 'Tie game!';
  return resultText;
};

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerChoice:{},
      computerChoice:{},
      result:''
    };
  }

  onPressButton = playerChoice => {
    // alert(data);
    const foundChoice = CHOICES.find(choice =>choice.name === playerChoice);
    const computerChoice = randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name, computerChoice.name);
    this.setState({
      playerChoice : foundChoice,
      computerChoice : computerChoice,
      result
    })
    }
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.gameStatusWrapper}>
            <GameStatus result={this.state.result}/> 
          </View>
          <View style={styles.gamePlayerWrapper}>
            <PlayerCard playerName="Player" choice={this.state.playerChoice} />
            <PlayerCard playerName="Computer" choice={this.state.computerChoice}/>            
          </View>
          <View style={styles.buttonGroupWrapper}>
           <ButtonGroup onPressButton={this.onPressButton} />
          </View>
        </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameStatusWrapper:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center'
  },
  gamePlayerWrapper:{
    flex:0.4,
    flexDirection:'row',
  },
  buttonGroupWrapper:{
    flex:0.4,
    alignItems:'center',
    justifyContent:'center'
  }
});
