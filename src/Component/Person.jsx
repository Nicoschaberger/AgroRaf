import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';

const Person = () => {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "500px" }}
          src="../Img/Agroraf.png"
          alt="imagen ilustrativa"
        />

        <Stack>
          <CardBody className='person'>
            <Heading size="md">AgroRaf Insumos y Repuestos</Heading>

            <Text py="2">
              Empresa creada en 2021, nos dedicamos a venta exclusiva de insums y repuestos para la maquinaria agricola.
              Con excelentes productos y calidad, somos la empresa numero 1 en Rafaela y la zona.
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
};

export default Person;
