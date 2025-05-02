import React from 'react'
import { Container, VStack, Text, Link } from "@chakra-ui/react";
//import {Link} from 'react-router-dom';

const HomePage = () => {
    return (

        <Container maxW="container.xl" py={12}>
            <VStack spacing={8}>
                <Text
                    fontSize='30px'
                    fontWeight={'bold'}
                    bgGradient={"linear(to-br , orange.800, red.300)"}
                    bgClip={'text'}
                    textAlign={'center'}
                >
                    Current Prodcuts
                </Text>

                <Text fontSize='xl' textAlign={'center'} fontWeight={'bold'} color='red.600'>
                    No products found :(     {"  "}


                    <Link href="/create">
                        <Text as='span' color='blue.600' _hover={{ textDecoration: "underline" }}>
                            Create a product
                        </Text>
                    </Link>
                </Text>
            </VStack>

        </Container>


    );
}

export default HomePage