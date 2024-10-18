import { HStack, Image, List, ListItem, Spinner,  Button} from "@chakra-ui/react"
import useData from "../hooks/useData"
import  { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../service/imageUrl"

interface Props{
    onSelectedGenre: (genre:Genre) => void 
    selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {

//    const {genres} = useGenres()

   const {data, isLoading} = useData<Genre>('/genres')

  return (
   <>
   {/* jsx goes here / anything we want to render  */}
   <List paddingBottom={5}>
    {isLoading && <Spinner/>}
   {data?.map((genre) => <ListItem marginBottom={5} key={genre.id}> 
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