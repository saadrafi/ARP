import React, { useEffect, useState } from "react";
import SingleSampleCard from "../home/sample/SingleSampleCard";
import PdfViewer from "../utils/PdfViewer";
import setTitle from "../utils/SetTitle";

const SamplePage = () => {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const itemsPerPage = 9;

  const [url, setUrl] = useState("");
  const openPdfModal = (url) => {
    setUrl(url);
    document.getElementById("my_modal_1").showModal();
  };

  setTitle("Sample");

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setSamples(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle search
  const filteredSamples = samples.filter((sample) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      sample.title.toLowerCase().includes(searchLower) ||
      sample.subject.toLowerCase().includes(searchLower)
    );
  });

  // Handle sorting
  const sortedSamples = filteredSamples.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === "desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedSamples.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSamples.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  //   handle close modal
  const closeModal = () => {
    document.getElementById("my_modal_1").close();
    setUrl("");
  };

  return (
    <div>
      <div
        className="hero min-h-[50vh] bg-cover bg-center bg-no-repeat text-white flex flex-col justify-center items-center rounded-b relative"
        style={{ backgroundImage: `url('/samplebanner.jpg')` }} // Replace with the actual image path
      >
        {/* Adding a dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold drop-shadow-lg">Sample</h1>
          <p className="text-lg mt-4 max-w-2xl text-center drop-shadow-lg p-4">
            Check out the samples of the writing assignments performed by Academic Research Point
            experts.
          </p>
        </div>
      </div>

      <div className="flex justify-around items-center my-12 gap-3">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-xl">
          <input
            type="text"
            className="grow"
            placeholder="Search by title or subject"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          className="select select-info w-full max-w-xs select-sm"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="">Sort by</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {filteredSamples.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold">No samples found</h1>
              <p className="text-gray-500">Please try different search terms or check back later</p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((sample, index) => (
              <SingleSampleCard key={index} sample={sample} openPdfModal={openPdfModal} />
            ))}
          </div>
          <div className="flex justify-center items-center my-8">
            <div className="join">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`join-item btn ${
                    currentPage === index + 1 ? "btn-active btn-primary" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box h-full max-w-none">
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <p className="py-4 hidden lg:inline">Press ESC key or click the button below to close</p>
          <p className="text-center">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-sm">
              Click here to open in new tab
            </a>
          </p>
          <div className="modal-body">
            <PdfViewer fileUrl={url} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SamplePage;
