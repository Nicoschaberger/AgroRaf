import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Card, ButtonGroup, CardBody, CardFooter, Stack, Heading, Divider, Image, Text, Button } from '@chakra-ui/react'

const Item = ({ name, imagen, descripcion, categoria, id}) => {
  return (
  <>
  <div key={id}>
    <Card maxW='sm' className='card'>
      <CardBody>
        <Image
      src={imagen}
      alt='Imagen Ilustrativa'
      borderRadius='lg'
        />
    <Stack mt='6' spacing='3' className='text' >
      <Heading size='md'>{name}</Heading>
      <Text>
        {descripcion}
      </Text>
    </Stack>
      </CardBody>
  <Divider />
      <CardFooter>
        <ButtonGroup spacing='2' >          
            <Button className='whatsapp'  variant='solid' colorScheme='blue' >
              <Link href="https://wa.me/+543492418983?text=Hola quiero informacion sobre " target="_blank">
                Quiero Info!
              <ExternalLinkIcon mx='2px' />
              </Link> 
            </Button>          
        </ButtonGroup>
      </CardFooter>
    </Card>
  </div>
  </>
  )
}

export default Item