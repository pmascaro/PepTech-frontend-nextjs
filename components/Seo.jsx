import Head from "next/head";

const Seo = ({ pageTitle }) => {
  return (
    <Head>
      <title>
        {pageTitle ||
          `${pageTitle} || PepTech: Pep's Portfolio and Blog Site`}
      </title>
    </Head>
  );
};

export default Seo;
