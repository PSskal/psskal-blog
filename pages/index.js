import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbPlatformLearn from '../public/images/works/learning.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer based in Perú!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Richard Pascual
          </Heading>
          <p> ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.PNG"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          PSskal is a freelance and a full-stack developer based in Lima with a
          passion for building digital services/stuff he wants
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Cusco, Perú.
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Studied Mechatronic Engineer at UPC Monterrico! Perú
        </BioSection>
        <BioSection>
          <BioYear> 2021 to present</BioYear>
          Working as a freelancer and in my Csmer Learning Plataform! Perú
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Robotics, Playing Videogames and Learn everyday
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>

        <List>
          <Flex>
            <ListItem>
              <Link href="https://github.com/psskal" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @PSskal
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/psskal" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                >
                  @PSskal
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/_psskal" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @_psskal
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://facebook.com/PSskal" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  @PSskal
                </Button>
              </Link>
            </ListItem>
          </Flex>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6} pt={5}>
          <GridItem
            href="https://www.youtube.com/@psskal1809"
            title="Psskal's life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel :)
          </GridItem>
          <GridItem
            href="https://github.com/psskal/"
            title="Csmer"
            thumbnail={thumbPlatformLearn}
          >
            A Learning Plataform PreUniversity Courses app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://mail.google.com/mail/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
