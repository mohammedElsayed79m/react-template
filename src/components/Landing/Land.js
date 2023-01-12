import {StyledLand,StyledLandContentBtn , LandH2 ,LandH3 , Landp} from './landstyle'

const Land = () => {
  return (
    <StyledLand className='section'>
       <div>
       <LandH2>
            Home Title
        </LandH2>
        <LandH3 style={{color:"red"}}>
            Creative Director
        </LandH3>
        <Landp>
            Mohammed Elsayed /
            <span style={{fontWeight:"bold"}}>
            Ux Designer
            </span>
            /
            Front End Developer
            <br/> 
            Creating Responsive And Reactive Wep 
            Design 
        </Landp>
         <StyledLandContentBtn>
          Let's Start
          </StyledLandContentBtn>
      
       </div>
    </StyledLand>
  )
}

export default Land
