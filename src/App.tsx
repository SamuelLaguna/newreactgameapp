import { Box,  Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'

import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import { Platform } from './hooks/usePlatforms'


  //undifined is absence of value;
  // null: is an intetional absence of value;
  export interface GameQuery {
    genreId?: number,
    platformId: number, 
    sortOrder: String
    searchText: string 
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
      
      <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}/>

      </GridItem >
      <Show above='lg'>
      <GridItem area="aside"  >
        {' '}
        <GenreList selectedGenreId={gameQuery.genreId} onSelectedGenre={(genreId) => setGameQuery({...gameQuery, genreId: genreId.id})}/>
      </GridItem>

      </Show>
      <GridItem area="main" bg=''>

        <Box>

        <HStack spacing={5} marginY={5}>
      <GameHeading gameQuery={gameQuery}/>

      <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platformId:platform.id})}/>
      <SortSelector  onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
        </HStack>
        </Box>
      <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
    </>
  )
}

export default App