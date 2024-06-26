import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useData from "../hooks/useData"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../service/imageUrl"


const GenreList = () => {

//    const {genres} = useGenres()

   const {data} = useData<Genre>('/genres')

  return (
   <>
   {/* jsx goes here / anything we want to render  */}
   <List>

   {data.map((genre) => <ListItem key={genre.id}> 
   <HStack>
    <Image boxSize={16} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
    <Text>{genre.name}</Text>
   </HStack>
   </ListItem>)}
   </List>
   </>
  )
}

export default GenreList