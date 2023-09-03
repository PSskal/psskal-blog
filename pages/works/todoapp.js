import {
    Container,
    Badge,
    Link,
    List,
    ListItem
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
  
  
        <List ml={5} my={8}>
          <ListItem>
            <Meta>Website</Meta>
            <span>
              <Link href="https://eclectic-faun-a6de10.netlify.app/" target="_blank">
                https://Todoapp.io/ <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <span>
              <Link href="https://github.com/PSskal/todoapp_lr" target="_blank">
                https://Github/todoapp <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Reacts.js / Chart.js / Tailwind /
            </span>
          </ListItem>
        </List>
  
  
        <WorkImage src="/images/works/todoapp_03.png" alt="Todoapp" />
        <WorkImage src="/images/works/todoapp_01.png" alt="Todoapp" />
        <WorkImage src="/images/works/todoapp_02.png" alt="Todoapp" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'