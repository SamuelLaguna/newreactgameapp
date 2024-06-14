import { useEffect, useState } from "react"
import apiClient from "../service/apiClient"
import { Text } from "@chakra-ui/react"


interface Game {
    id:number
    name: string 
}
interface FetchGameResponse {
    count: number
    results: Game []
}
const GameGrid = () => {

    //We need out useStates to help us render update our UI with out games and others
    const [games, setGames] = useState<Game[]>([])

    //useState for error
    const [error, setError] = useState('')
    //create a helper function to help us fetch out code

    const fetchGames = () => {
        apiClient.get('/gamess')
        .then(response => setGames(response.data.results))
        .catch(error => {
            setError(error.message)
            
        })
        
    }
    //Need a useEffect to fetch out data

    useEffect(() => {
        fetchGames();
    
      
    }, [])
    
  return (
    <>
    {/* Disp[lay our data ul li grid table usally map it with unique key ] */}
    <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>) }
    </ul>
    {error && <Text color={'red'}>{error}</Text>}
    </>
  )
}

export default GameGrid