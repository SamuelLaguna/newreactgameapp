import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'

  export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
  }


const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    // const [setselectedGenre, setSetselectedGenre] = useState<Genre | null>(null)
    // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)


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
        <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
      </GridItem>

      </Show>
      <GridItem area="main" bg=''>
      <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
      <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
    </>
  )
}

export default App