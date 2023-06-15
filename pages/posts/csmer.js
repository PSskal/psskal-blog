import {
  Container,
  Badge,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Code
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title } from '../../components/post'
import P from '../../components/paragraph'
import CenteredContainer from '../../components/centeredContainer'

const code = `function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
console.log(result);`

const Work = () => (
  <Layout title="Cmsr">
    <Container>
      <Title>
        My first post <Badge>blog personal</Badge>
      </Title>
      <P>** Ohh noo, por un momento pense que me habia desaparido **</P>
      <P>
        Hice esta pagina hace un buen tiempo, sin embargo no tuve la suficiente
        motivacion como para subir un post.
      </P>
      <P></P>
      <P>
        Mientras estaba en mi clases de la u, mas que por el aburrimiento por
        una una cuestion de necesidad tuve que subir un post jajaja :V
      </P>
      <CenteredContainer>
        <pre>
          <Code>{code}</Code>
        </pre>
      </CenteredContainer>
      <br />
      <P>
        Creo que ahora siento una satisfacción, ya tengo mi propio blogsito.
        Aunque hace unos años ya tuve mi blog, pero no le preste el
        suficiente tiempo, espero que q a este si. solo
        espero ajajaja
      </P>

      <UnorderedList my={4}>
        <ListItem>haciendo pruebitas</ListItem>
        <ListItem>errores y mas errores</ListItem>
        <ListItem>al final se aprende, que mas puedo esperar</ListItem>
      </UnorderedList>

      {/* <List ml={4} my={4}>
        <ListItem>
          <Meta>Platforma</Meta>
          <span>web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>js, react, nextjs</span>
        </ListItem>
        <ListItem>
          <Meta>Presentacion</Meta>
          <Link color='teal.500' href="https://speakerdeck.com/craftzdog/the-fun-deep-learning">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link color='teal.500' href="https://speakerdeck.com/craftzdog/caffedeoshou-qing-ben-ge-deipuraninguiosapuri">
            Caffeでお手軽本格ディープラーニングアプリ @potatotips{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link color='teal.500' href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List> */}

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      {/* <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" /> */}
      <SimpleGrid columns={2} gap={2}>
        {/* <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" /> */}
        {/* <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" /> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
