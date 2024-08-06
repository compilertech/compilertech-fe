function CallForProposals() {
  const data = [
    {
      title: "We are looking for:",
      content: [
        "Keynote speakers (30-60minutes),",
        "Technical presentations: 20 minutes plus questions and discussion,",
        "Tutorials (30-60minutes),",
        "Poster presentations",
      ],
    },
    {
      title: "What types of people should attend?",
      content: [
        "Active developers of compilers",
        "Students and Researchers in the field of compilers",
        "Those interested in using compiler and toolchain technology in novel and interesting ways.",
      ],
    },
  ];

  return (
    <div className="flex-col flex items-center justify-center md:my-10">
      <div className="w-[75vw] py-10 flex-col flex lg:items-start max-md:justify-center justify-center  max-lg:w-full max-lg:items-center ">
        <div className="text-LayoutPink lg:w-[75vw] text-[60px]  tracking-wide text-start max-lg:text-4xl max-lg:text-center font-Bebas">
          Call For Presentation Proposals
        </div>
        <p className="lg:text-justify my-8 md:w-[90vw] max-md:my-5 max-md:leading-relaxed leading-snug text-textGray max-lg:text-center max-md:w-[90vw] lg:w-[75vw] font-Satoshi">
          The IICT (Innovations In Compiler Technology) workshop aims to bring
          together researchers, practitioners, and enthusiasts in the field of
          compiler technologies. This year's theme focuses on the cutting-edge
          advancements in design, implementation, and optimization of compiler
          techniques as well as their applications on emerging software and
          hardware platforms. We invite speakers from academia and industry to
          present their work in one of the following Tracks.
        </p>
        <button
          type="button"
          className="bg-LayoutPink p-2 px-4  rounded-md text-white tracking-wider text-lg font-Bebas"
        >
          CALL FOR PROPOSALS
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <div
          className="flex  flex-col items-center max-md:justify-center max-md:w-[90vw] 
       border border-gray-200 rounded shadow md:flex-row md:max-w-[78vw] lg:w-[76vw] hover:bg-gray-100 
       dark:border-gray-700 dark:bg-DarkGray bg-white dark:hover:bg-gray-700 md:mb-[1rem]"
        >
          <div className="flex flex-col justify-between  p-4 leading-normal">
            <h5 className="mb-2 text-2xl tracking-wide text-titleGray max-lg:text-center dark:text-white font-Bebas">
              What are We looking for?
            </h5>
            <p className="mb-3 font-normal text-textGray text-justify font-Satoshi">
              Proposals should provide sufficient information for the review
              committee to be able to judge the quality of the submission.
              Proposals can be submitted under the form of an extended abstract,
              full paper, or slides. Accepted presentations must be presented
              in-person. The presentations and recordings may be publicly
              available in future.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly max-md:justify-center w-[90vw] max-md:w-full max-md:flex-col my-5 px-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-md:w-[90vw] max-md:my-5 md:w-[35vw] border border-gray-200 rounded shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-DarkGray bg-white dark:hover:bg-gray-700"
          >
            <div className="flex flex-col justify-evenly  md:h-[20rem] lg:h-[15rem] ml-5 p-4 leading-normal">
              <h5
                className="mb-2 text-2xl max-lg:text-center  tracking-wide text-titleGray dark:text-white"
                style={{ fontFamily: "Bebas Neue,sans-serif" }}
              >
                {item.title}
              </h5>
              <ul className="pl-5 mb-3 font-normal text-textGray font-Satoshi">
                {item.content.map((content, index) => (
                  <li key={index}>{content}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallForProposals;
