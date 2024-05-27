import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">Clothing Brand</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Shop</Link>
          <Link href="#" p={2}>About</Link>
          <Link href="#" p={2}>Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={4}>Discover our latest collection</Text>
        <Image src="https://via.placeholder.com/600x400" alt="Featured Product" mx="auto" />
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300x300" alt="Product 1" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 1</Heading>
              <Text mt={2}>$29.99</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300x300" alt="Product 2" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 2</Heading>
              <Text mt={2}>$39.99</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="https://via.placeholder.com/300x300" alt="Product 3" />
            <Box p={4}>
              <Heading as="h4" size="md">Product 3</Heading>
              <Text mt={2}>$49.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Flex>
            <Link href="#" p={2}><FaFacebook size="24" /></Link>
            <Link href="#" p={2}><FaTwitter size="24" /></Link>
            <Link href="#" p={2}><FaInstagram size="24" /></Link>
          </Flex>
          <Text>&copy; 2023 Clothing Brand. All rights reserved.</Text>
          <Text>Contact us: info@clothingbrand.com</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;