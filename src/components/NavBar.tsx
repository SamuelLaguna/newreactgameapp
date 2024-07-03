import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchImport from "./SearchImport"

interface Props {
    onSearch: (searchText: string ) => void
}
const NavBar = ({onSearch}:Props) => {
  return (
    <>
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <SearchImport onSearch={onSearch}/>
        <ColorModeSwitch/>
        
    </HStack>
    </>
  )
}

export default NavBar