import { useQuery } from '@apollo/client';
import Grid from '@mui/material/Grid';

import Loading from './Loading';
import Error from './Error';
import { GET_PRODUCTS } from '../graphql/queries';
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';

export function ProductList() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      options: {
        take: 45,
      },
    },
  });

  console.log('GET_PRODUCTS', data, loading, error);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Grid container spacing={2}>
      {data.products?.items.map(
        (item: {
          name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        }) => (
          <Grid item xs={6}>
            {item.name}
          </Grid>
        )
      )}
    </Grid>
  );
}
