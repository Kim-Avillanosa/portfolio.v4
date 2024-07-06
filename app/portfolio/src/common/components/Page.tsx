import { Head } from "next/document";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
}

const Page: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  );
};

export default Page;
