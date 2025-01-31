import * as React from "react";
type svg = {
    props: string;
  };
  
const Footersvg = (props:svg) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M5.83341 1.66675V18.3334M14.1667 1.66675V18.3334M1.66675 10.0001H18.3334M1.66675 5.83341H5.83341M1.66675 14.1667H5.83341M14.1667 14.1667H18.3334M14.1667 5.83341H18.3334M3.48341 1.66675H16.5167C17.5201 1.66675 18.3334 2.4801 18.3334 3.48341V16.5167C18.3334 17.5201 17.5201 18.3334 16.5167 18.3334H3.48341C2.4801 18.3334 1.66675 17.5201 1.66675 16.5167V3.48341C1.66675 2.4801 2.4801 1.66675 3.48341 1.66675Z"
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Footersvg;
