import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaTree } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Tree Lovers
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Discover the beauty and importance of trees in our ecosystem.
          </Text>
        </Box>
        <Box>
          <Image src="/images/trees.jpg" alt="Beautiful Trees" borderRadius="md" boxShadow="md" />
        </Box>
        <Box textAlign="center">
          <Button colorScheme="green" size="lg" leftIcon={<FaTree />}>
            Learn More
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;