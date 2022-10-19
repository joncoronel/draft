import Link from "next/link";
import classes from "./content.module.scss";
import { FaRegMoon } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
import React from "react";

export default function Navigation() {
  return (
    <>
      <div className={classes.overlay}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        vehicula maximus mauris ac tempus. Nunc ut quam tristique, aliquam lorem
        non, sagittis turpis. Nunc vel tellus euismod, tempus leo a,
        sollicitudin diam. Sed ac sapien at neque tristique blandit vel ac enim.
        Maecenas vitae tincidunt nisi, eu varius diam. Vestibulum suscipit
        efficitur lectus ac maximus. Ut eu metus id ante molestie tempus.
        Suspendisse egestas justo ut neque mollis consequat. Maecenas efficitur
        sagittis massa quis ultricies. Aenean at eros a augue mollis blandit.
        Vivamus vitae eros vehicula, imperdiet purus quis, consequat magna. Sed
        nec risus non tortor mollis viverra in sed est. Curabitur in iaculis
        felis, ac ultricies nisl. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultric
      </div>
    </>
  );
}
