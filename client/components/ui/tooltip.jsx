import * as React from "react";

const TooltipProvider = ({ children }) => <div>{children}</div>;
const Tooltip = ({ children }) => <div>{children}</div>;
const TooltipTrigger = ({ children }) => <div>{children}</div>;
const TooltipContent = ({ children }) => <div>{children}</div>;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
