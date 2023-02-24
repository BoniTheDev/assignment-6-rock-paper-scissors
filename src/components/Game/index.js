import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

import {
  AppBackground,
  ScoreCard,
  HeadingCounter,
  HeadingStyle,
  ScoreCountCard,
  ScoreHeadingStyle,
  ButtonsContainer,
  ButtonStyle,
  ImageStyle,
  ResultsViewContainer,
  ResultsOptionContainer,
  ResultContainer,
  RulesButton,
  PopupContainer,
  GameResult,
  PlayAgainButton,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const OptionButton = props => {
  const {eachOption, onClickingButton} = props
  const {id, imageUrl} = eachOption

  const clickingButton = () => {
    onClickingButton(id, imageUrl)
  }

  return (
    <ButtonStyle
      type="button"
      onClick={clickingButton}
      data-testId={`${id.toLowerCase()}Button`}
    >
      <ImageStyle src={imageUrl} alt={id} />
    </ButtonStyle>
  )
}

class Game extends Component {
  state = {
    resultDisplay: false,
    score: 0,
    userOptionUrl: '',
    opponentUrl: '',
    gameResult: '',
  }

  onClickingButton = (id, imageUrl) => {
    const randomIndex = Math.floor(Math.random() * 3)
    const opponentOption = choicesList[randomIndex]

    if (id === 'SCISSORS') {
      if (opponentOption.id === 'PAPER') {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score + 1,
          gameResult: 'WON',
        }))
      } else if (opponentOption.id === 'ROCK') {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score - 1,
          gameResult: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score,
          gameResult: 'IT IS DRAW',
        }))
      }
    } else if (id === 'ROCK') {
      if (opponentOption.id === 'PAPER') {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score + 1,
          gameResult: 'WON',
        }))
      } else if (opponentOption.id === 'SCISSORS') {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score - 1,
          gameResult: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score,
          gameResult: 'IT IS DRAW',
        }))
      }
    } else if (id === 'PAPER') {
      if (opponentOption.id === 'ROCK') {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score + 1,
          gameResult: 'WON',
        }))
      } else if (opponentOption.id === 'SCISSORS') {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score - 1,
          gameResult: 'LOSE',
        }))
      } else {
        this.setState(prevState => ({
          resultDisplay: true,
          userOptionUrl: imageUrl,
          opponentUrl: opponentOption.imageUrl,
          score: prevState.score,
          gameResult: 'IT IS DRAW',
        }))
      }
    }
  }

  onClickToPlayAgain = () => {
    this.setState({
      resultDisplay: false,
    })
  }

  resultView = () => {
    const {userOptionUrl, opponentUrl, gameResult} = this.state
    return (
      <ResultsViewContainer>
        <ResultsOptionContainer>
          <HeadingStyle>YOU</HeadingStyle>
          <ImageStyle alt="your choice" src={userOptionUrl} />
        </ResultsOptionContainer>
        <ResultsOptionContainer>
          <HeadingStyle>OPPONENT</HeadingStyle>
          <ImageStyle alt="opponent choice" src={opponentUrl} />
        </ResultsOptionContainer>

        <ResultContainer>
          {gameResult === 'IT IS DRAW' ? (
            <GameResult> {gameResult}</GameResult>
          ) : (
            <GameResult>YOU {gameResult}</GameResult>
          )}

          <PlayAgainButton onClick={this.onClickToPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultContainer>
      </ResultsViewContainer>
    )
  }

  getPlayStation = () => (
    <ButtonsContainer>
      {choicesList.map(eachOption => (
        <OptionButton
          onClickingButton={this.onClickingButton}
          key={eachOption.id}
          eachOption={eachOption}
        />
      ))}
    </ButtonsContainer>
  )

  render() {
    const {resultDisplay, score} = this.state
    return (
      <AppBackground>
        <ScoreCard>
          <HeadingCounter>
            <HeadingStyle>Rock Paper Scissors</HeadingStyle>
          </HeadingCounter>
          <ScoreCountCard>
            <ScoreHeadingStyle>Score</ScoreHeadingStyle>
            <ScoreHeadingStyle>{score}</ScoreHeadingStyle>
          </ScoreCountCard>
        </ScoreCard>
        {resultDisplay ? this.resultView() : this.getPlayStation()}
        <div className="popup-container">
          <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
            {close => (
              <PopupContainer>
                <button
                  className="trigger-button"
                  type="button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>

                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            )}
          </Popup>
        </div>
      </AppBackground>
    )
  }
}

export default Game
