import Box from "@mui/material/Box";
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { formatCurrency } from "../../utils/formatCurrency";
import { useActiveOrder } from "../../hooks/useActiveOrder";

const InnerHeader = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "fixed",
  width: "calc(100% - 32px)",
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  zIndex: theme.zIndex.drawer,
}));

export function Header() {
  const { activeOrder } = useActiveOrder();
  return (
    <InnerHeader component="header">
      <img
        width="250"
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <ShoppingCartOutlinedIcon sx={{ color: "common.white" }} />
        <Box>
          <Typography color="common.white" fontWeight={700}>{`Items: ${
            activeOrder?.totalQuantity || 0
          }`}</Typography>
          <Typography
            color="common.white"
            fontWeight={700}
          >{`Subtotal: ${formatCurrency(
            activeOrder?.totalWithTax || 0,
            activeOrder?.currencyCode || "USD"
          )}`}</Typography>
        </Box>
      </Box>
    </InnerHeader>
  );
}
