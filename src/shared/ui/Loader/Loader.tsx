import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Loader)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
