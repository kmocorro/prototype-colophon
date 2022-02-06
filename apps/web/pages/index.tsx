import { useState, useEffect } from "react";
import { Button, Card, Layout, SliderThumbWithTooltip } from "ui";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";
import { SketchPicker, CirclePicker } from "react-color";
import {
  Box,
  Grid,
  GridItem,
  Text,
  useRadio,
  useRadioGroup,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { CopyBlock, a11yLight } from "react-code-blocks";

import styled from "styled-components";

interface IInputBox {
  customFontSize: number;
  customLetterSpacing: number;
  customLeading: number;
  customTextAlignment: string;
  customWeight: number;
  customSkew: number;
  customColor: string;
}

const InputBox = styled.textarea<IInputBox>`
  display: inline-block;
  height: 320px;
  resize: none;
  padding: 10px;
  width: 100%;
  overflow: hidden;
  padding: 28px;
  color: ${(props) => props.customColor};
  background-color: ${(props) =>
    props.customColor === "#ffffff" ? "#000" : "#fff"};
  font-weight: ${(props) => props.customWeight};
  font-size: ${(props) => props.customFontSize}px;
  text-align: ${(props) => props.customTextAlignment};
  letter-spacing: ${(props) => props.customLetterSpacing}em;
  line-height: ${(props) => props.customLeading}%;
  transform: skew(${(props) => props.customSkew}deg);
  &: focus {
    outline: none;
  }
`;

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color="gray.300"
        _checked={{
          color: "gray.600",
        }}
        px={1}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function Web() {
  const [viewTypeFace, setViewTypeface] = useState(
    "The quick brown fox jumps over the lazy dog."
  );
  const [customFontSize, setCustomFontSize] = useState(112);
  const [customLetterSpacing, setCustomLetterSpacing] = useState(-0.08);
  const [customLeading, setCustomLeading] = useState(77);
  const [customTextAlignment, setCustomTextAlignment] = useState("right");
  const [customWeight, setCustomWeight] = useState(800);
  const [customSkew, setCustomSkew] = useState(0);
  const [customColor, setCustomColor] = useState("#000000");

  const options = [
    {
      id: 1,
      value: "left",
      element: <Icon as={FaAlignLeft} />,
    },
    {
      id: 2,
      value: "center",
      element: <Icon as={FaAlignCenter} />,
    },
    {
      id: 3,
      value: "right",
      element: <Icon as={FaAlignRight} />,
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "alignment",
    defaultValue: "center",
    value: customTextAlignment,
    onChange: (e) => setCustomTextAlignment(e),
  });

  const group = getRootProps();

  const handleOnChange = (e) => {
    setViewTypeface(e.target.value);
  };

  const handleOnCustomFontSize = (e) => {
    setCustomFontSize(e.target.value);
  };
  const handleOnSliderCustomFontSize = (e) => {
    setCustomFontSize(e);
  };

  const handleOnCustomLetterSpacing = (e) => {
    setCustomLetterSpacing(e.target.value);
  };
  const handleOnSliderCustomLetterSpacing = (e) => {
    setCustomLetterSpacing(e);
  };

  const handleOnCustomLeading = (e) => {
    setCustomLeading(e.target.value);
  };
  const handleOnSliderCustomLeading = (e) => {
    setCustomLeading(e);
  };

  const handleOnCustomWeight = (e) => {
    setCustomWeight(e.target.value);
  };
  const handleOnSliderCustomWeight = (e) => {
    setCustomWeight(e);
  };

  const handleOnCustomSkew = (e) => {
    setCustomSkew(e.target.value);
  };
  const handleOnSliderCustomSkew = (e) => {
    setCustomSkew(e);
  };

  const handleOnCustomColor = (e) => {
    setCustomColor(e.hex);
  };

  return (
    <Box background="#e8e8e8">
      <Layout>
        <Card>
          <InputBox
            key="view"
            customFontSize={customFontSize}
            customLetterSpacing={customLetterSpacing}
            customLeading={customLeading}
            customTextAlignment={customTextAlignment}
            customWeight={customWeight}
            customSkew={customSkew}
            customColor={customColor}
            value={viewTypeFace}
            onChange={handleOnChange}
            placeholder="..."
          />
          <Grid templateColumns="repeat(4, 1fr)" gap={0} mt={4}>
            <GridItem w="100%" h="10" borderWidth="1px" borderLeft="0px" />
            <GridItem w="100%" h="10" borderWidth="1px" borderLeft="0px" />
            <GridItem w="100%" h="10" borderWidth="1px" borderLeft="0px">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: 8,
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <Text color="gray.500">Size</Text>
                </div>
                <div style={{ width: "100%", marginTop: 4 }}>
                  <SliderThumbWithTooltip
                    min={8}
                    max={200}
                    step={1}
                    sliderVal={customFontSize}
                    sliderOnChange={handleOnSliderCustomFontSize}
                  />
                </div>
                <div
                  style={{ display: "flex", marginRight: 10, marginLeft: 10 }}
                >
                  <input
                    type="number"
                    value={customFontSize}
                    onChange={handleOnCustomFontSize}
                    style={{ width: 20, color: "#718096" }}
                  />
                  <Text color="gray.500">px</Text>
                </div>
              </div>
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              borderWidth="1px"
              borderLeft="0px"
              borderRight="0px"
            >
              <HStack
                {...group}
                style={{ marginTop: 4, marginRight: 10, marginLeft: 10 }}
              >
                {options.map((item) => {
                  let { value } = item;
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={item.id} {...radio}>
                      {item.element}
                    </RadioCard>
                  );
                })}
                <Text color="gray.500" fontSize={12}>
                  Background
                </Text>
                <CirclePicker
                  colors={["#000", "#fff"]}
                  width="none"
                  circleSize={16}
                  circleSpacing={4}
                  color={customColor}
                  onChange={handleOnCustomColor}
                />
              </HStack>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(4, 1fr)" gap={0}>
            <GridItem
              w="100%"
              h="10"
              borderWidth="1px"
              borderLeft="0px"
              borderTop="0px"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: 8,
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <Text color="gray.500">Leading</Text>
                </div>
                <div style={{ width: "100%", marginTop: 4 }}>
                  <SliderThumbWithTooltip
                    min={0}
                    max={500}
                    step={1}
                    sliderVal={customLeading}
                    sliderOnChange={handleOnSliderCustomLeading}
                  />
                </div>
                <div
                  style={{ display: "flex", marginRight: 10, marginLeft: 10 }}
                >
                  <input
                    type="number"
                    value={customLeading}
                    onChange={handleOnCustomLeading}
                    style={{ width: 20, color: "#718096" }}
                  />
                  <Text color="gray.500">%</Text>
                </div>
              </div>
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              borderWidth="1px"
              borderLeft="0px"
              borderTop="0px"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: 8,
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <Text color="gray.500">Spacing</Text>
                </div>
                <div style={{ width: "100%", marginTop: 4 }}>
                  <SliderThumbWithTooltip
                    min={-1}
                    max={4}
                    step={0.01}
                    sliderVal={customLetterSpacing}
                    sliderOnChange={handleOnSliderCustomLetterSpacing}
                  />
                </div>
                <div
                  style={{ display: "flex", marginRight: 10, marginLeft: 10 }}
                >
                  <input
                    type="number"
                    value={customLetterSpacing}
                    onChange={handleOnCustomLetterSpacing}
                    style={{ width: 28, color: "#718096" }}
                  />
                  <Text color="gray.500">em</Text>
                </div>
              </div>
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              borderWidth="1px"
              borderLeft="0px"
              borderTop="0px"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: 8,
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <Text color="gray.500">Width</Text>
                </div>
                <div style={{ width: "100%", marginTop: 4 }}>
                  <SliderThumbWithTooltip
                    min={100}
                    max={1000}
                    step={100}
                    sliderVal={customWeight}
                    sliderOnChange={handleOnSliderCustomWeight}
                  />
                </div>
                <div
                  style={{ display: "flex", marginRight: 10, marginLeft: 10 }}
                >
                  <input
                    type="number"
                    value={customWeight}
                    onChange={handleOnCustomWeight}
                    style={{ width: 28, color: "#718096" }}
                  />
                  <Text color="gray.500"></Text>
                </div>
              </div>
            </GridItem>
            <GridItem
              w="100%"
              h="10"
              borderWidth="1px"
              borderLeft="0px"
              borderRight="0px"
              borderTop="0px"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: 8,
                  fontSize: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: 10, marginLeft: 10 }}>
                  <Text color="gray.500">Slant</Text>
                </div>
                <div style={{ width: "100%", marginTop: 4 }}>
                  <SliderThumbWithTooltip
                    min={-360}
                    max={360}
                    step={1}
                    sliderVal={customSkew}
                    sliderOnChange={handleOnSliderCustomSkew}
                  />
                </div>
                <div
                  style={{ display: "flex", marginRight: 10, marginLeft: 10 }}
                >
                  <input
                    type="number"
                    value={customSkew}
                    onChange={handleOnCustomSkew}
                    style={{ width: 20, color: "#718096" }}
                  />
                  <Text color="gray.500">deg</Text>
                </div>
              </div>
            </GridItem>
          </Grid>
          <div>
            <CopyBlock
              text={`
              div {
                font-family: "No custom font yet.";
                font-size: ${customFontSize}px;
                line-height: ${customLeading}%;
                letter-spacing: ${customLetterSpacing}em;
                font-weight: ${customWeight};
                color: ${customColor};
                background-color: ${
                  customColor === "#ffffff" ? "#000" : "#fff"
                };
                text-alignment: ${customTextAlignment};
                transform: skew(${customSkew}deg);
              }
              `}
              language={"javascript"}
              wrapLines
              theme={a11yLight}
            />
          </div>
        </Card>
      </Layout>
    </Box>
  );
}
