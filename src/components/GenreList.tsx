import { HStack, Image, List, ListItem, Spinner,  Button} from "@chakra-ui/react"

import  useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../service/imageUrl"

interface Props{
    onSelectedGenre: (genre:Genre) => void 
    selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {

   const {data, error, isLoading} = useGenres();
   

   

  return (
   <>
   {/* jsx goes here / anything we want to render  */}
   <List paddingBottom={5}>
    {isLoading && <Spinner/>}
   {data?.results.map((genre) => <ListItem marginBottom={5} key={genre.id}> 
   <HStack>
    <Image objectFit={'cover'} boxSize={16} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
    <Button color={genre.id === selectedGenre?.id ? 'blue.500' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
   </HStack>
   </ListItem>)}
   </List>
   </>
  )
}

export default GenreList