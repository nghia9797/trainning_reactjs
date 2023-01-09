import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import colum from "./column.json";
import { getListProductAsync } from "./slices";

const ListProduct = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.listProduct);
  const headers = colum.header;

  useEffect(() => {
    dispatch(getListProductAsync());
  }, []);

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <Box
        bgcolor={theme.palette.offWhite.main}
        color={[theme.palette.text?.primary]}
        pt={3}
        textAlign="center"
        flex={1}
      >
        <Box
          py={5}
          my={0}
          mx="auto"
          mb={3.75}
          w={1}
        >
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                {Object.keys(headers).map((data, i) => {
                  const header = headers[data];
                  return (
                    <TableCell key={i} align="center">
                      {header.title}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {listProduct.map((row, i) => (
                <TableRow key={row.id}>
                  <TableCell component="th" align="center">
                    {i + 1}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.madein}</TableCell>
                  <TableCell>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default ListProduct;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100%",
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: "bold",
    },
  };
});
