function CallForProposals() {
  return (
    <div>
      <div className="w-[75vw] py-10 flex-col flex items-start justify-evenly">
        <div className="text-LayoutPink text-[60px] tracking-wide text-start " style={
            { fontFamily: "Bebas Neue,sans-serif"}
        }>
          Call For Presentation Proposals
        </div>
        <p className="text-justify pb-8 leading-snug" style={{fontFamily: "Satoshi,sans-serif"}}>
          The IICT (Innovations In Compiler Technology) workshop aims to bring
          together researchers, practitioners, and enthusiasts in the field of
          compiler technologies. This year's theme focuses on the cutting-edge
          advancements in design, implementation, and optimization of compiler
          techniques as well as their applications on emerging software and
          hardware platforms. We invite speakers from academia and industry to
          present their work in one of the following Tracks.
        </p>
        <button style={
            { fontFamily: "Bebas Neue,sans-serif"}
        }
          type="button"
          className="bg-LayoutPink p-2 rounded-lg text-white tracking-wide"
        >
          CALL FOR PROPOSALS
        </button>
      </div>

      <div className="flex  flex-col items-center bg-white border border-gray-200 rounded shadow md:flex-row md:max-w-[75vw] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            What are We looking for?
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            Proposals should provide sufficient information for the review
            committee to be able to judge the quality of the submission.
            Proposals can be submitted under the form of an extended abstract,
            full paper, or slides. Accepted presentations must be presented
            in-person. The presentations and recordings may be publicly
            available in future.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-evenly w-full max-md:flex-col my-5">

        <div className="flex  flex-col items-center bg-white border border-gray-200 rounded shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between m-5 p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            We are looking for:
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
             <li>Keynote speakers (30-60minutes),</li>
             <li>Technical presentations: 20 minutes plus questions and discussion,</li>
             <li>Tutorials (30-60minutes),</li>
             <li>Poster presentations</li>
            </p>
          </div>
        </div>


        <div className="flex ml-5 flex-col items-center bg-white border border-gray-200 rounded shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-600 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between m-5 p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           What types of people should attend?
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
             <li>Active developers of compilers</li>
             <li>Students and Researchers in the field of compilers</li>
             <li><span className="text-justify">Those interested in using compiler and toolchain technology in novel and interesting ways.</span></li>
            
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallForProposals;
