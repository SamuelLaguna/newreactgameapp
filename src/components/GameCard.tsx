import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../service/imageUrl"

interface GameProps {
game: Game
}

const GameCard = ({game}: GameProps) => {

    
  return (
   <>
   <Card >
    <Image src={getCroppedImageUrl(game.background_image)}/>
    <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>

        <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
     
    </CardBody>
   </Card>
   </>
  )
}

export default GameCard