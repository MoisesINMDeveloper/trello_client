const TitleApp = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return <h1 className={`${className}`}>{title}</h1>;
};
export default TitleApp;
