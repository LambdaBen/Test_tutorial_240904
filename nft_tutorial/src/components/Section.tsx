const Section = () => {
  return (
    <>
      <section className="p-3 mt-5  shadow-xl shadow-black flex flex-col items-center justify-center">
        <div>
          <p className="mt-5 text-3xl font-bold">
            About <span className="text-noditGreen">Nodit</span>
          </p>
          <p className="mt-5 w-full max-w-4xl">
            Web3 Nodit Node Connect your business to various blockchain networks
            with Nodit. <br /> Nodit operates a variety of blockchain network
            nodes based on years of experience building enterprise-level
            infrastructure, and based on this, it supports stable and reliable
            Web3 backend services and blockchain development tools.Depending on
            how you configure it, there are two ways to do it: a shared node or
            building your own dedicated node. Build an environment that suits
            your needs and explore the world of Web3!
          </p>
        </div>
        <div className="mt-10">
          <p className="text-3xl font-bold"> NFT Tutorial Steps 🚀</p>
          <p className="mt-5">
            1. Input your EOA address and click to search EOA Address
          </p>
          <p className="mt-5">
            2. Select the NFT what you want to watch more detail
          </p>
          <p className="mt-5">
            3. Check the Detail about the Token you selected
          </p>
          <a
            className="font-bold block mt-5 mb-5 text-xl inline-block"
            href="https://developer.nodit.io/reference/getnftcontractmetadatabycontracts"
          >
            👉 If you want to know more about{" "}
            <span className="text-noditGreen">Nodit</span> NFT API Click here 👈
          </a>
        </div>
      </section>
      <div className="flex w-full items-stretch h-48 mt-5 shadow-xl shadow-black space-x-4">
        <div className="w-1/3 p-3 relative cursor-pointer hover:scale-105 duration-300">
          <a href="https://nodit.io">
            <img
              src="/nodit_site.png"
              alt="Nodit Site"
              className="h-full w-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              Go to Nodit Site!
            </div>
          </a>
        </div>
        <div className="w-1/3 p-3 relative cursor-pointer hover:scale-105 duration-300">
          <a href="https://developer.nodit.io">
            <img
              src="/nodit_docs.png"
              alt="Nodit Docs"
              className="h-full w-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              Go to Nodit Docs!
            </div>
          </a>
        </div>
        <div className="w-1/3 p-3 relative cursor-pointer hover:scale-105 duration-300">
          <a href="https://nodit.lambda256.io/">
            <img
              src="/nodit_console.png"
              alt="Nodit Console"
              className="h-full w-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              Go to Nodit Console!
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Section;
