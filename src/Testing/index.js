import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useMutation } from "react-query";
import { allFiltersFn } from "../Services/AllFilters/index,";

export default function Testing() {
  const [spices, setSpices] = React.useState([]);
  const [value, setValue] = React.useState("");
  const { mutate: allFilters } = useMutation(allFiltersFn, {
    onSuccess: (response) => {
      setSpices(response.data.data.product_list);
    },
  });

  React.useEffect(
    () => {
      allFilters({
        category_id: 5,
        sub_category_id: "",
        brand_id: "",
        color_id: "",
        max_price: "",
        min_price: "",
        rating: "",
      });
    },
    // eslint-disable-next-line
    [""]
  );

  const products = spices.map((product) => {
    return {
      image: product.image,
      variant: product.variant_name,
      id: product.variant_id,
    };
  });

  console.log(typeof Number(value.innerHTML));
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300, margin: 10 }}
      options={products}
      autoHighlight
      freeSolo
      onChange={(event) => setValue(event.currentTarget.lastChild)}
      disableClearable
      getOptionLabel={(option) => option.variant}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="30"
            src={option.image}
            srcSet={option.image}
            alt=""
          />
          <span>{option.variant}</span>
          <span id="variant_id" hidden>
            {option.id}
          </span>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
