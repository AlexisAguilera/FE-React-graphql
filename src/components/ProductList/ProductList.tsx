import { useQuery } from "@apollo/client";
import Grid from "@mui/material/Grid";
import { styled, Theme } from "@mui/material/styles";

import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import ProductItem from "./ProductItem";
import { GET_PRODUCTS } from "../../graphql/queries";
import { ProductItemType } from "../../types";

const Container = styled(Grid)(({ theme }: { theme: Theme }) => ({
  margin: theme.spacing(0, 2, 2, -1.5),
  paddingTop: theme.spacing(9),
  width: "100%",
}));

export function ProductList() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      options: {
        take: 45,
      },
    },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Container container spacing={3} role="grid">
      {data.products?.items.map((item: ProductItemType) => (
        <Grid item xs={4} key={item.id}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Container>
  );
}
