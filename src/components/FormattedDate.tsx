import { useTranslations } from "next-intl";

interface Props {
  createdAt: string;
}

const FormattedDate: React.FC<Props> = ({ createdAt }) => {
  const t = useTranslations();
  const date = new Date(createdAt);
  const monthIndex = date.getMonth() + 1;
  const monthNames = t("months");
  return (
    <span>{`${
      monthNames[monthIndex]
    } ${date.getDate()}, ${date.getFullYear()}`}</span>
  );
};

export default FormattedDate;
