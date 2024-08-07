import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronCompactDown } from "react-icons/bs"
import usePlatform, { Platform } from "../hooks/usePlatforms";


interface Props {
    onSelectPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

   const {data } = usePlatform();

  return (
    <>
    <Menu>

        <MenuButton as={Button} rightIcon={<BsChevronCompactDown/>}>{selectedPlatform?.name || 'Platform'}</MenuButton>
        <MenuList>
            {/* <MenuItem>Item: 1</MenuItem>
            <MenuItem>Item: 2</MenuItem>
            <MenuItem>Item: 3</MenuItem> */}
            {data.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem> )}
        </MenuList>
    </Menu>
    </>
  )
}

export default PlatformSelector