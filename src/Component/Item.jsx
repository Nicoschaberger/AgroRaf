import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Item = ({ name, imagen, descripcion, category, id}) => {
  return (
    <div key={id}>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={imagen}
      alt={category}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Descripcion
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>  
    </div>
  )
}

export default Item