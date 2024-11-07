import { Flex, Image} from '@chakra-ui/react';
import React from 'react';
import SearchInput from './searchInput';

const Navbar:React.FC = () => {
    
    return (

        <Flex
            color="whiteAlpha.900"
            height="55px"
            padding="6px 12px"
            bg="gray.800"
            border="2px solid"
            borderColor="gray.700"
        >
            <Flex align= "center">
                <Image
                    src="https://i.ibb.co/KDrwDmM/Group-1.png" height="40px" alt='logo'/>  
            </Flex>
            <Flex
                align="center"
                fontSize="30px"       // Set the font size
                fontWeight="bold"      // Make the text bold
                fontFamily="Arial, sans-serif" // Set a custom font family
                display={{ base: 'none', md: 'unset' }} 
            >
                navX
            </Flex>
            <SearchInput />
            {/* <Directory/>
            <searchInput/>
            <RightContent/> */}
        </Flex>
    );
}
export default Navbar;
