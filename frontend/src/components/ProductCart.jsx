import {
    Box, Heading, HStack, VStack, Image, IconButton, Text, Input, useColorModeValue, useToast, useDisclosure,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
    ModalBody, ModalFooter, Button
} from '@chakra-ui/react'
import React, { useState } from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useProductStore } from '../store/product';


const ProductCart = ({ product }) => {

    const [updatedProduct, setUpdatedProduct] = useState(product);

    const textColor = useColorModeValue('grey.800', 'white');
    const bg = useColorModeValue('white', 'grey.800');

    const { deleteProduct , updateProduct} = useProductStore(); // import the deletePro
    const toast = useToast(); // pop up a toast window as notification
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (!success) {
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

    const handleUpdateProduct = async (pid, updatedProduct) =>{
        const {success, message} = await updateProduct(pid, updatedProduct);
        onClose();
        if (!success) {
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
                description: 'Successfully updated this product.',
                status: 'success',
                duration: 3000,
                isClosable: true
            });
        }
    } ;


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
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue' />

                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='orange' />
                </HStack>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> Update Product </ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>

                        <VStack>

                            <Input
                                placeholder='Product Name'
                                name='name'
                                value = {updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />

                            <Input
                                placeholder='Price'
                                name='price'
                                type='number'
                                value = {updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />

                            <Input
                                placeholder='Image URL'
                                name='image'
                                value = {updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />


                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Update
                        </Button>

                        <Button variant='ghost' onClick = {onClose}>Cancel</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>

        </Box>
    );
}

export default ProductCart;