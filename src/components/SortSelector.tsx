import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react"
import { BiSolidChevronDown } from "react-icons/bi"

interface Props {
    onSelectSortOrder: (sortOrder: string) => void 
    // sortOrders: string 
}


const SortSelector = ({onSelectSortOrder}: Props) => {


    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ];

  

    const [selectedSort, SetSelectedSort] = useState('')
    
    const handleSelectedSort = (value:string ,label:string) => {
        onSelectSortOrder(value)
        SetSelectedSort(label)
    }
    return (
   <>
   <Menu>
    <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Order By {selectedSort || 'Relavance'}</MenuButton>
    <MenuList>
        {sortOrders.map(order => <MenuItem value={order.value} key={order.value}  onClick={() => handleSelectedSort(order.value,order.label)} >{order.label}</MenuItem>)}
    </MenuList>
   </Menu>
   </>
  )
}

export default SortSelector