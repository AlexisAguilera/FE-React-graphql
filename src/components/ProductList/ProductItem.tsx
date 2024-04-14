import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { ProductItemType, ProductVariant } from "../../types";
import { formatCurrency } from "../../utils/formatCurrency";
import { useProductItem } from "../../hooks/useProductItem";

const CardContainer = styled(Card)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: "320px",
}));

const ContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
}));

const Description = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "4",
  WebkitBoxOrient: "vertical",
}));

export interface ProductItemProps {
  item: ProductItemType;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const { variant, onChangeVariant, addItem } = useProductItem({ item });

  return (
    <CardContainer elevation={2}>
      <ContentContainer>
        <CardContent>
          <Typography component="div" variant="h5">
            {item.name}
          </Typography>
          <Description variant="subtitle1" color="text.secondary">
            {item.description}
          </Description>
        </CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <FormControl
            sx={{ margin: (theme) => theme.spacing(1, 2) }}
            size="small"
          >
            <InputLabel id="product-variant-label">Variants</InputLabel>
            <Select
              labelId="product-variant-id"
              label="Variants"
              value={variant?.id || ""}
              onChange={onChangeVariant}
            >
              {item.variants.map((variant: ProductVariant) => (
                <MenuItem value={variant.id} key={variant.id}>
                  {variant.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography component="div" variant="body1" ml={2} fontWeight={700}>
            {formatCurrency(variant?.price, variant?.currencyCode || "")}
          </Typography>
        </Box>
        <CardActions sx={{ ml: 1, mb: 1, flexDirection: "flex-end" }}>
          <form onSubmit={addItem}>
            <Button
              size="small"
              variant="contained"
              type="submit"
              startIcon={<AddShoppingCartIcon />}
            >
              Add to cart
            </Button>
          </form>
        </CardActions>
      </ContentContainer>
      <CardMedia
        component="img"
        sx={{
          width: 300,
          minWidth: 300,
        }}
        src={item.assets[0].preview}
        alt={item.name}
      />
    </CardContainer>
  );
};

export default ProductItem;
