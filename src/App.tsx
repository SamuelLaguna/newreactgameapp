import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

const App = () => {
  return (
    <>
    {/* Create a responsive layout */}
    {/* Nav, asidem main______responsive for desktop and mobile */}

    <Grid templateAreas={{
      base: `'nav' 'main'`,
      lg: `'nav nav' 'aside main'`

    }}>
      <GridItem area="nav" >Nav
      
      <NavBar/>

      </GridItem >
      <Show above='lg'>
      <GridItem area="aside" bg=''>Aside</GridItem>

      </Show>
      <GridItem area="main" bg=''>Main
      <GameGrid/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App