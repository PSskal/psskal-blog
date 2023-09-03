import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetflix from '../public/images/works/netflix.png'
import thumbTodoApp from '../public/images/works/todoapp.png'
import thumbPlatformLearn from '../public/images/works/learning.png'
import thumbdisplay7Segment from '../public/images/works/display7Segment.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="csmer" title="Csmer" thumbnail={thumbPlatformLearn}>
            A courses plataform for studentes who finished the high school
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="sevenSegment" thumbnail={thumbdisplay7Segment} title="SevenSegment">
            7 segmentos display
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="netflix" title="Netflix" thumbnail={thumbNetflix}>
            Netflix Clone app use React, Tailwind
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="todoapp"
            title="The TodoAPP"
            thumbnail={thumbTodoApp}
          >
            an application for the tasks that will be executed in the machine
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbNetflix}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbNetflix} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      {/* </SimpleGrid> */}

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
