import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container text-center">
        <h1>This is About Page</h1>
      </div>
    </>
  );
};

export default about;
