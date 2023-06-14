import React, { useState } from 'react'
import { Container, Badge, Box, SimpleGrid, Code, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const [segmentStates, setSegmentStates] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false
  })

  const handleClick = segmentId => {
    setSegmentStates(prevState => ({
      ...prevState,
      [segmentId]: !prevState[segmentId]
    }))
    console.log(segmentId)
  }
  const getDisplayValueBinary = (valor) => {
    const segmentOrder = ['g', 'f', 'e', 'd', 'c', 'b', 'a'];
    if (valor == 0) {
      const binaryValue = segmentOrder.map((segment) => (segmentStates[segment] ? '1' : '0')).join('');
      return  binaryValue};
    if (valor == 1) {
      const binaryValue = segmentOrder.map((segment) => (segmentStates[segment] ? '0' : '1')).join('');
      return binaryValue};
  };
  const getDisplayValueHex = (valor) => {
    const binaryValue = getDisplayValueBinary(valor)
    const decimalValue = parseInt(binaryValue, 2);
    const hexValue = decimalValue.toString(16).toUpperCase().padStart(2, '0');
    return hexValue+'h';
  };

  return (
    <Layout title="SevenSegmemt">
      <Container>
        <Title>
          Display 7 segmentos <Badge>tool</Badge>
        </Title>
        <P> Esto es una herramiento util, para aquellos que estan aprendiendo sobre los 7 segmentos</P>
        <SimpleGrid columns={[1, 2, 2]} gap={1}>
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="192px"
          height="320px"
          viewBox="-1 -1 12 20"
          color="white"
          strokeWidth="0.20"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        >
          <polygon
            id="a"
            points="1,1 2,0 8,0 9,1 8,2 2,2"
            fill={segmentStates['a'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('a')}
          />
          <polygon
            id="b"
            points="9,1 10,2 10,8 9,9 8,8 8,2"
            fill={segmentStates['b'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('b')}
          />
          <polygon
            id="c"
            points="9,9 10,10 10,16 9,17 8,16 8,10"
            fill={segmentStates['c'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('c')}
          />
          <polygon
            id="d"
            points="9,17 8,18 2,18 1,17 2,16 8,16"
            fill={segmentStates['d'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('d')}
          />
          <polygon
            id="e"
            points="1,17 0,16 0,10 1,9 2,10 2,16"
            fill={segmentStates['e'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('e')}
          />
          <polygon
            id="f"
            points="1,9 0,8 0,2 1,1 2,2 2,8"
            fill={segmentStates['f'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('f')}
          />
          <polygon
            id="g"
            points="1,9 2,8 8,8 9,9 8,10 2,10"
            fill={segmentStates['g'] ? '#3b657a' : '#cfd5e1'}
            onClick={() => handleClick('g')}
          />
        </Box>
        <Container>
        <Container>
        <Text as='b'>Cátodo Común</Text>
        <br />
        <br />
        <SimpleGrid columns={[2, 2, 2]} gap={1}>
          <Container>
          <Text as='b'>Binary</Text>
          <br />
             <Code>{getDisplayValueBinary(0)}</Code>
          </Container>
          <Container>
          <Text as='b'>Hex</Text>
          <br />
             <Code>{getDisplayValueHex(0)}</Code>
             
          </Container>
        </SimpleGrid>
        </Container>
        <Container>
        <br />
        <br />
        <Text as='b'>Ánodo Común</Text>
        <br />
        <br />
        <SimpleGrid columns={[2, 2, 2]} gap={1}>
          <Container>
          <Text as='b'>Binary</Text>
          <br />
             <Code>{getDisplayValueBinary(1)}</Code>
          </Container>
          <Container>
          <Text as='b'>Hex</Text>
          <br />
             <Code>{getDisplayValueHex(1)}</Code>
          </Container>
        </SimpleGrid>
        </Container>
        </Container>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
