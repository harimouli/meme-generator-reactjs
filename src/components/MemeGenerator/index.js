import {Component} from 'react'
import {
  AppContainer,
  MemeHeading,
  InputField,
  MemeDetailsContainer,
  InputLabel,
  InputCard,
  DropDown,
  ImageContainer,
  SubmitButton,
  Text,
} from './styledComponents'
const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSize: '8',
    imageUrl: '',
    topText: '',
    bottomText: '',
    viewImageUrl: '',
    viewTopText: '',
    viewbottomText: '',
  }
  renderInputFieldFormView = () => {
    const {fontSize, imageUrl, topText, bottomText} = this.state

    const onChangeDropDown = event => {
      this.setState({fontSize: event.target.value})
    }

    const handleInputChange = event => {
      const {id, value} = event.target
      this.setState({[id]: value})
    }
    const onClickHandleSubmit = event => {
      event.preventDefault()
      this.setState({
        viewImageUrl: imageUrl,
        viewTopText: topText,
        viewBottomText: bottomText,
      })
    }
    return (
      <form onSubmit={onClickHandleSubmit}>
        <InputCard>
          <InputLabel htmlFor="imageUrl">Image Url</InputLabel>
          <InputField
            id="imageUrl"
            value={imageUrl}
            onChange={handleInputChange}
            placeholder="Enter the image URL"
          />
        </InputCard>

        <InputCard>
          <InputLabel htmlFor="topText">Top Text</InputLabel>
          <InputField
            id="topText"
            value={topText}
            onChange={handleInputChange}
            placeholder="Enter the top Text"
          />
        </InputCard>

        <InputCard>
          <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
          <InputField
            id="bottomText"
            value={bottomText}
            onChange={handleInputChange}
            placeholder="Enter the bottom Text"
          />
        </InputCard>

        <InputCard>
          <InputLabel htmlFor="fontSize">Font Size</InputLabel>
          <DropDown onChange={onChangeDropDown} value={fontSize} id="fontSize">
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </DropDown>
        </InputCard>
        <InputCard>
          <SubmitButton type="submit">Generate</SubmitButton>
        </InputCard>
      </form>
    )
  }

  renderMemeDetailsView = () => (
    <MemeDetailsContainer>
      <MemeHeading>Meme Generator</MemeHeading>
      {this.renderInputFieldFormView()}
    </MemeDetailsContainer>
  )
  renderMemeView = () => {
    const {fontSize, viewTopText, viewImageUrl, viewBottomText} = this.state
    return (
      <ImageContainer
        data-testid="meme"
        fontSize={fontSize}
        imageUrl={viewImageUrl}
      >
        <Text>{viewTopText}</Text>

        <Text fontSize = {fontSize}>{viewBottomText}</Text>
      </ImageContainer>
    )
  }
  render() {
    return (
      <AppContainer>
        {this.renderMemeDetailsView()}
        {this.renderMemeView()}
      </AppContainer>
    )
  }
}

export default MemeGenerator
