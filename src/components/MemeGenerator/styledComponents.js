import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items vertically */
    height: auto; /* Adjust height for stacked layout */
    padding: 20px; /* Add some padding */
  }

 
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 10px;
  }
`

export const MemeHeading = styled.h1`
    color: #35469c;
    font-weight:600;
    font-size:35px;
`

export const InputField = styled.input`
        width:100%;
        padding:10px;
        margin-top:5px;
        outline:none;

`
export const InputLabel = styled.label`
        font-weight:normal;
        margin-bottom:5px;
        color: #7e858e;
`

export const MemeDetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    width:30%;
`
export const InputCard = styled.div`
    margin-top:10px;
    margin-bottom:10px;
`

export const DropDown = styled.select`
        width:100%;
        padding:10px;
        margin-top:10px;
`

export const ImageContainer = styled.div`
    background:url(${props => props.imageUrl});
    
    font-size:${props => props.fontSize}px;
    width:500px;
    height:400px;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
export const SubmitButton = styled.button`
    background-color: #0b69ff;
    width:100px;
    height:30px;
    border:none;
    outline:none;
    color:#ffffff;
    cursor:pointer;
`
export const Text = styled.p`
    color:#ffffff;
    font-size:${props => props.fontSize}px;
`
