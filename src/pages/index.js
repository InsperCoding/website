import { Container, ModelsWrapper } from '../styles/scrollStyles';
import { Flex, Text, Image, Button } from '@chakra-ui/react';
import Header from '../components/Header';
export default function Index() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <section>
            <Flex align="center" justifyContent="center" direction="column">
              <Text fontSize="6xl" mt="10">
                Bem vindo ao Insper Coding
              </Text>
              <Image src="/images/logo.GIF"/>
              <Flex w="300px" alignItems="center" justifyContent="space-around">
                <Button bgColor="gray.600" size="lg" borderRadius="50" colorScheme="gray">Get Started</Button>
                <Button bgColor="gray.600" size="lg" borderRadius="50" colorScheme="gray">See more</Button>
              </Flex>
            </Flex>
          </section>
          <section>
            <Flex align="center" justifyContent="center" bg="gray.700" h="100vh">
              Welcome
            </Flex>
          </section>
        </div>
      </ModelsWrapper>
    </Container>
  )
}