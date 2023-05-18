import React from "react";
import { Shimmer } from "react-shimmer";
const ShimmerEffect = () => (
    <Shimmer 
     className="w-72 pt-3 pb-3 mx-3 mb-10 p-2 rounded-r-sm"
      width={280}
      height={350}
      duration={1000}
      colors={['#f0f0f0', '#e0e0e0']}
      backgroundColor={null}
    />
)
export default ShimmerEffect