import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless delivery"
                backgroungImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                 title="Model Y"
                 description="Order Online for Touchless delivery"
                 backgroungImg="model-y.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"

            />
            <Section 
                 title="Model 3"
                 description="Order Online for Touchless delivery"
                 backgroungImg="model-3.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"
            />
            <Section
                    title="Model x"
                    description="Order Online for Touchless delivery"
                    backgroungImg="model-x.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory"
              />
              <Section
                    title="Lowest Cost Solar Panels in America"
                    description="Money-back guarantee"
                    backgroungImg="solar-panel.jpg"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
               />
               <Section 
                    title="Solar for New Roofs"
                    description="Solar Roofs Costs Less than a New Roof Plus Solar Panals"
                    backgroungImg="solar-roof.jpg"
                    leftBtnText="Order now"
                    rightBtnText="Learn more"
               />
               <Section 
                    title="Accessories"
                    description=""
                    backgroungImg="accessories.jpg"
                    leftBtnText="Shop now"
                    rightBtnText=""
               />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh


`