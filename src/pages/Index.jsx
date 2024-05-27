import { Box, Container, Flex, Grid, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Clothing Brand</Heading>
        <Flex gap={4}>
          <Link href="#home">Home</Link>
          <Link href="#shop">Shop</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" id="home" bg="gray.100" p={10} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to Our Clothing Store</Heading>
        <Text fontSize="lg" mb={6}>Discover the latest trends in fashion</Text>
        <Image src="/images/hero.jpg" alt="Featured Product" borderRadius="md" />
      </Box>

      {/* Product Grid */}
      <Box as="section" id="shop" p={10}>
        <Heading size="xl" mb={6} textAlign="center">Shop Our Collection</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={4}>
              <Heading size="md">Product 1</Heading>
              <Text mt={2}>$29.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={4}>
              <Heading size="md">Product 2</Heading>
              <Text mt={2}>$39.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="md" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={4}>
              <Heading size="md">Product 3</Heading>
              <Text mt={2}>$49.99</Text>
            </Box>
          </Box>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={10} textAlign="center">
        <VStack spacing={4}>
          <Heading size="md">Follow Us</Heading>
          <Flex gap={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </Flex>
          <Text>Contact us at: info@clothingbrand.com</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;