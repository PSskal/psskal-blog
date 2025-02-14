import {
    Container,
    Badge 
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title } from '../../components/post'
  import P from '../../components/paragraph'
  import Image from 'next/image'

  import foto from '/public/images/posts/RichardEliana.jpg'
  
  const Work = () => (
    <Layout title="miAmor">
      <Container>
       
      <Title>
        Carta de San Valentín <Badge>14 de febrero</Badge>
      </Title>
      
      <P>Para mi amada Liz Eliana,</P>
      <P>
        Desde el primer momento en que nuestras miradas se cruzaron, supe que había encontrado algo único, algo que haría latir mi corazón de una manera diferente. Cada día a tu lado es un regalo, una nueva oportunidad para descubrir lo maravillosa que eres y lo afortunado que soy de tenerte en mi vida.
      </P>
      <P>
        Eres mi alegría, mi paz y mi más hermosa inspiración. En cada sonrisa tuya encuentro un motivo para seguir soñando, en cada abrazo siento el calor de un amor sincero, y en cada palabra descubro la dulzura que solo tú puedes darme.
      </P>
      <P>
        No importa el tiempo ni la distancia, mi amor por ti crece con cada latido, con cada instante que compartimos. Prometo seguir amándote, cuidándote y valorándote, porque eres lo mejor que me ha pasado.
      </P>
      <P>
        Te amo con todo mi corazón, Liz Eliana.
      </P>
      <P>Con todo mi amor,</P>
      <P>Richard 💖</P>
      <Image
        src= {foto} // Asegúrate de que la imagen esté en la carpeta public/images
        alt="Los dos juntos"
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        width={500}
        height={500}
      />
      
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
