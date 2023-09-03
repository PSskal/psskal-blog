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
        Aplicación de Lista de Tareas (To-Do App) <Badge>2022</Badge>
        </Title>
        <P>
        Nuestra Aplicación de Lista de Tareas es una herramienta altamente funcional y fácil de usar diseñada para ayudarte a mantener un seguimiento efectivo de tus tareas diarias y compromisos pendientes. Con una interfaz intuitiva y características versátiles, esta aplicación simplifica la gestión de tus responsabilidades cotidianas.
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