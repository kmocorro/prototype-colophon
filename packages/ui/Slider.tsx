import React, { FC } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
} from "@chakra-ui/react";

interface Props {
  sliderVal: number;
  sliderOnChange: (e: number) => void;
  min: number;
  max: number;
  step: number;
}

export const SliderThumbWithTooltip: FC<Props> = ({
  sliderVal,
  sliderOnChange,
  min,
  max,
  step,
}) => {
  return (
    <Slider
      id="slider"
      defaultValue={sliderVal}
      min={min}
      max={max}
      step={step}
      colorScheme="gray"
      onChange={sliderOnChange}
    >
      <SliderTrack height="2px">
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb bgColor="gray" boxSize="12px" />
    </Slider>
  );
};
