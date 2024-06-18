import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"



const GameGrid = () => {

    const {games, error} = useGames()
    //We need out useStates to help us render update our UI with out games and others
    
    
  return (
    <>
    {/* Disp[lay our data ul li grid table usally map it with unique key ] */}
    <SimpleGrid>
        {games.map(game =>
             <GameCard game={game} key={game.id}></GameCard>) }
    </SimpleGrid>
    {error && <Text color={'red'}>{error}</Text>}
    </>
  )
}

export default GameGrid