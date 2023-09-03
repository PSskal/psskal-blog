import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cmsr">
    <Container>
      <Title>
      Plataforma de Aprendizaje en Línea <Badge>Csmr</Badge>
      </Title>
      <P>
      Nuestra Plataforma de Aprendizaje en Línea es un espacio educativo virtual diseñado para brindar a estudiantes de todas las edades y niveles de habilidad acceso a una amplia gama de cursos y recursos de aprendizaje. Con un enfoque en la educación de alta calidad y la accesibilidad, nuestra plataforma ofrece oportunidades de desarrollo personal y profesional en línea.
      </P>
      <P>
        Caracteristicas descatacadas:
      </P>
      <UnorderedList my={4}>
        <ListItem>Catálogo de curso diversificados</ListItem>
        <ListItem>Lecciones interactivas</ListItem>
        <ListItem>Aprendizaje a tu propio ritmo</ListItem>
        <ListItem>Comunidad de Aprendizaje</ListItem>
        <ListItem>Seguimiento del Progreso</ListItem>
        <ListItem>Recurso de apoyo</ListItem>
        <ListItem>Soporte técnico</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platforma</Meta>
          <span>web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>reactjs, django, tailwind, ethereum, sonala, </span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/psskal">
            github.com/Cmsr <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

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
