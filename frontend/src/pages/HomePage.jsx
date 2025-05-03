import React, { useEffect } from 'react'
import { Container, VStack, Text, Link, SimpleGrid } from "@chakra-ui/react";
//import {Link} from 'react-router-dom';

import { useProductStore } from '../store/product';

const HomePage = () => {

    const { fetchProducts , products} = useProductStore();

    useEffect(() => { 
        fetchProducts();
    },
        [fetchProducts]
    );
    console.log('products:', products);

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

                <SimpleGrid
                    columns={{
                        base: 1, // 1 element per column on small screens(base) 
                        md: 2, // 2 elements per column on medium screens
                        lg: 3 // 3 elements per column on large screens
                    }}
                    spacing={10}
                    w='full'
                >



                </SimpleGrid>


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