declare module "*.module.scss" {
  const value: Record<string, string>;
  export default value;
}
declare module "*.scss";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

declare const __IS_DEV__: boolean;
