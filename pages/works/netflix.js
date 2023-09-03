import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Margelo">
    <Container>
      <Title>
      Clon de la Interfaz de Usuario de Netflix <Badge>2022</Badge>
      </Title>
      <P>

Este proyecto es una recreación fiel y funcional de la popular interfaz de usuario de Netflix. Diseñado meticulosamente para capturar la estética y la experiencia de usuario característica de Netflix, nuestro clon ofrece a los usuarios la oportunidad de explorar y navegar a través de una amplia variedad de películas y series de televisión de una manera intuitiva y atractiva.
      </P>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://stirring-paprenjak-cd3411.netlify.app/" target="_blank">
              https://Netflix.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <span>
            <Link href="https://github.com/PSskal/CLON_NETFLIX" target="_blank">
              https://Github/netflix <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Vanilla.Js / HTML / CSS /
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/margelo_eyecatch.png" alt="Website" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/margelo_01.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_02.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_03.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'