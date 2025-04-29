import React from 'react';
import { Container, HStack, Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import { PiLightbulbLight } from "react-icons/pi";


const Navbar = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Container maxW={"1140px"} p={4}>

            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: 'column',
                    sm: 'row'
                }}
            >

                <Text

                    bgGradient='linear(to-br, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='20'
                    fontWeight='extrabold'
                    textAlign='center'
                >
                    <Link to={'/'}>Sean's Electronic Store</Link>
                </Text>


                <HStack spacing={2} alignItems={'center'}>
                    <Link to={'/create'}>
                        <Button fontSize={10}>
                            Add item
                            <CiSquarePlus fontSize='40' />
                        </Button>
                    </Link>

                    <Button onClick={toggleColorMode} fontSize={10}>
                    {colorMode === 'light' ? 'Turn off the light' : 'Turn on the light'}
                    <PiLightbulbLight fontSize='40' />
                    
                    </Button>

                </HStack>

            </Flex>


        </Container>
    );
};

export default Navbar;