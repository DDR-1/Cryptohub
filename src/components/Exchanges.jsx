import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Card } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const pairs = useGetCryptoExchangesQuery();
  // const exchangesList = data?.data?.exchanges;
  const edata = pairs?.data;
  try {
    var result = Object.entries(edata);
    result = result.slice(11, 50);
    for (var i = 0; i < result.length; i++) {
      if (result[i][1].volume_usd == 0) {
        result.splice(i, 1);
      }
    }
    console.log(edata);
  } catch (err) {
    console.log("Fetching Data");
  }

  if (isFetching) return <Loader />;

  return (
    <>
      <Card>
        <Row>
          <Col span={6}>
            <strong>Exchange Name </strong>
          </Col>
          <Col span={6}>
            <strong>Country</strong>
          </Col>
          <Col span={6}>
            <strong>Volume</strong>
          </Col>
          <Col span={6}>
            <strong>URL</strong>
          </Col>
        </Row>
      </Card>
      <Row>
        {result?.map((e) => (
          <Col span={24}>
            <Card>
              <Row key={e[1].id}>
                <Col span={6}>
                  <Text>{e[1].name}</Text>
                </Col>
                <Col span={6}>{e[1].country}</Col>
                <Col span={6}>${millify(e[1].volume_usd)}</Col>
                <Col span={6}>{e[1].url}</Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
