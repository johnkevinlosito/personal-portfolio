import classNames from "classnames";
import React, { PropsWithChildren } from "react";
interface ContainerProps {
  className?: string;
}
const Container = ({
  children,
  className,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={classNames(
        "mx-auto w-full px-4 md:px-6 md:max-w-4xl lg:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
