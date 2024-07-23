import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <>
      <Breadcrumb className="carro">

        <BreadcrumbItem >
          <Button color='green'>
          <Link to={"/Person"}>
            ¿Quien soy?
          </Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button color='green'>
          <Link to={"/catalogo"}>
            Catalogo
          </Link>
          </Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <Button color='green'>
            <Link to={"/Contact"}>
            Horarios
            </Link>
          </Button>
        </BreadcrumbItem>

      </Breadcrumb>
    </>
  );
};

export default CartWidget;
