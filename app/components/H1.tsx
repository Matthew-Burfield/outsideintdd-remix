import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
  className: string;
}

export function H1(props: Props) {
  const className = `text-xl font-medium ${props.className || ""}`;
  return (
    <h1 {...props} className={className}>
      {props.children}
    </h1>
  );
}
