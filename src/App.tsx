import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'

const App = () => {

    const [setselectedGenre, setSetselectedGenre] = useState<Genre | null>(null)


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
      <GridItem area="aside"  padding={5}>
        {' '}
        <GenreList onSelectedGenre={(genre) => setSetselectedGenre(genre)}/>
      </GridItem>

      </Show>
      <GridItem area="main" bg=''>Main
      <GameGrid selectedGenre={setselectedGenre}/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App