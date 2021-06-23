import { Container, ModelsWrapper } from '../styles/scrollStyles';
import { Flex, Text, Image } from '@chakra-ui/react';
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
            </Flex>
          </section>
          <section>
            <Flex align="center" justifyContent="center">
              Welcome
            </Flex>
          </section>
        </div>
      </ModelsWrapper>
    </Container>
  )
}