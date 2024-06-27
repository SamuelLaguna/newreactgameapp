import { HStack, Image, List, ListItem, Spinner, Text , Button} from "@chakra-ui/react"
import useData from "../hooks/useData"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../service/imageUrl"

interface Props{
    onSelectedGenre: (genre:Genre) => void 
}

const GenreList = ({onSelectedGenre}:Props) => {

//    const {genres} = useGenres()

   const {data, isLoading} = useData<Genre>('/genres')

  return (
   <>
   {/* jsx goes here / anything we want to render  */}
   <List paddingBottom={5}>
    {isLoading && <Spinner/>}
   {data.map((genre) => <ListItem marginBottom={5} key={genre.id}> 
   <HStack>
    <Image boxSize={16} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
    <Button fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
   </HStack>
   </ListItem>)}
   </List>
   </>
  )
}

export default GenreList