import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { QuizContext } from "../../utilities/Root";
import { Col, Container, Row,  } from "react-bootstrap";
const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
const Statistics = () => {
  const graphChart = useContext(QuizContext);
  return (   
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <ResponsiveContainer width={"80%"} aspect={1.5} className="mx-auto my-5">
            <BarChart            
              width={500}
              height={300}
              data={graphChart}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip/>                        
              <Bar
                dataKey="total"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {graphChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
   
  );
};

export default Statistics;
