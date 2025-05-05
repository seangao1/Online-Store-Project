import { Box, Heading, HStack,  Image,IconButton, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react';
import {EditIcon, DeleteIcon} from '@chakra-ui/icons';
import { useProductStore } from '../store/product';


const ProductCart = ({ product }) => {

    const textColor = useColorModeValue('grey.800', 'white');
    const bg = useColorModeValue('white', 'grey.800');

    const {deleteProduct} = useProductStore(); // import the deletePro
    const toast = useToast(); // pop up a toast window as notification
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid) ;

        if(!success) {
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true
            });
        }
        else {
            toast({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true
            });

        }
        

    };
    
    return (
        <Box
            shadow='md'
            rounded='md'
            overflow='hidden'
            transition='all 0.3s'
            _hover={{ transform: 'TranslateY(-5px)', shadow: 'xl' }}
            bg={bg}
        >

            <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

            <Box p={4}>

                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight={'bold'} fontSize={16} color={textColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} colorScheme='blue' />
                   
                    <IconButton icon={<DeleteIcon />}  onClick={() => handleDeleteProduct(product._id)} colorScheme='orange' />
                </HStack>
            </Box>

        </Box>
    );
}

export default ProductCart;