import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchImport from "./SearchImport"


const NavBar = () => {
  return (
    <>
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <SearchImport />
        <ColorModeSwitch/>
        
    </HStack>
    </>
  )
}

export default NavBar