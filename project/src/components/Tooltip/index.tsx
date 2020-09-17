import React from "react";
import {
  useTooltipState,
  Tooltip as ReakitTooltip,
  TooltipReference,
} from "reakit/Tooltip";

import './styles.css'

const Tooltip = ({ children, text, ...props }) => {
  const tooltip = useTooltipState({placement: "bottom"});
  return (
    <>
      <TooltipReference {...tooltip} ref={children.ref} {...children.props}>
        {(referenceProps) => React.cloneElement(children, referenceProps)}
      </TooltipReference>
      <ReakitTooltip {...tooltip} {...props} id="text">
        <p>
            {text}
        </p>
      </ReakitTooltip>
    </>
  );
}

export default Tooltip;