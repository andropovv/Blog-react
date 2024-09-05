import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language == "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onToggle}>
        {t("Язык")}
      </Button>
    </div>
  );
};
