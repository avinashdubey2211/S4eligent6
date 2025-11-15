import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useState } from "react";
import { API_URLS } from "../../Config/API_URLS";
import axiosInstance from "../../Config/axios";

const PDF = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);

  const handleOpen = () => {
    myOrderData();
    setState(true);
  };

  const myOrderData = () => {
    setIsLoading(true);
    axiosInstance
      .post(API_URLS.invoiceDetail, { order_id: "7D4459CE" })
      .then((response) => {
        setData(response.data.data);

        setIsLoading(false);
      })
      .catch((error) => {});
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "white",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{data?.order_id}</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};
export default PDF;
