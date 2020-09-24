import "antd/dist/antd.css";
import React, { useState } from "react";
import { Button, Col, Form, Input, Layout, Row } from "antd";
import { motion, AnimatePresence } from "framer-motion";
const { Header, Content, Footer } = Layout;
// import "./App.css";

function App() {
  const [showMoreFilters, setshowMoreFilters] = useState<boolean>(false);
  return (
    <Layout className="layout">
      <Content style={{ padding: "50px" }}>
        <Form>
          <Row gutter={20}>
            <Col>
              <Form.Item label="item 1">
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label="item 2">
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Button onClick={() => setshowMoreFilters(!showMoreFilters)}>
                More Filters
              </Button>
            </Col>
          </Row>
          <AnimatePresence>
            {showMoreFilters && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <Row>
                  <Col>
                    <Form.Item label="item 3">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </motion.div>
            )}
          </AnimatePresence>

          <Button>Save</Button>
        </Form>
      </Content>
    </Layout>
  );
}

export default App;
