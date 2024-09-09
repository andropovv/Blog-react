import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "shared/ui/Loader/Loader";

interface indexProps {
  className?: string;
}

export const PageLoader: FC<indexProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
