import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumbPost from '../public/images/posts/post_01.png'
import thumbPost2 from '../public/images/posts/post_02.png'
const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Blogs
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section>
            <PostGridItem id="desarrolloSoftware" title="Desarrollo Software" thumbnail={thumbPost}>
              La importancia del desarrolo de Software en la actualidad
            </PostGridItem>
          </Section>
          <Section>
            <PostGridItem id="miAmor" title="Para ti" thumbnail={thumbPost2}>
              Una carta para mi amor
            </PostGridItem>
          </Section>
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.youtube.com/"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
