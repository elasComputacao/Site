import React from "react";

import {
  useTooltipState,
  Tooltip as ReakitTooltip,
  TooltipReference,
} from "reakit/Tooltip";

import './styles.css'

const Tooltip = ({ children, text, slim, position, ...props }) => {
  const tooltip = useTooltipState({placement: position});
  return (
    <>
      <TooltipReference {...tooltip} ref={children.ref} {...children.props}>
        {(referenceProps) => React.cloneElement(children, referenceProps)}
      </TooltipReference>
      <ReakitTooltip {...tooltip} {...props} id={slim ? "text-slim" : "text"}>
        <p>
            {text}
        </p>
      </ReakitTooltip>
    </>
  );
}

export default Tooltip;