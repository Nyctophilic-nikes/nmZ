import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

type searchInputProps = {
    // user
};

const searchInput: React.FC<searchInputProps> = () => {

    return (
        <Flex
            flexGrow={1} mr={2} align="center" mb={1} ml={4} mt={1} marginRight={2}


        >
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'>
                    <SearchIcon 
                        color='gray.100'
                        alignContent="center"
                        marginBottom={2}
                        marginRight={-2}
                        marginTop={0.9}
                    />
                </InputLeftElement>
                <Input
                    alignContent="center"
                    placeholder='search nav...'
                    fontSize='11pt'
                    _placeholder={{ color: "gray.100" }}
                    _hover={{
                        bg: 'gray.700',
                        borderColor: 'gray.700'
                    }}
                    _focus={{
                        outline: 'none',
                        border: '1px',
                        borderColor: 'gray.500'
                    }}
                    height='32px'
                    bg='gray.900'
                    borderRadius="100px"
                />
            </InputGroup>
        </Flex>
    )
}
export default searchInput;