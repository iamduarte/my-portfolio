/* eslint-disable react/prop-types */
export default function Modal(props) {
  return (
    <>
      <div
        className="modal-backdrop bg-black opacity-60 w-full h-full z-10 fixed top-0 left-0 place-items-center"
        onClick={props.onClose}
      ></div>
      <div className=" w-3/4 h-full/4 bg-customParchmentColor opacity-100 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed max-h-screen overflow-scroll">
        <div className="relative">
          <button
            className="btn btn-sm btn-circle btn-ghost right-2 top-2 text-black absolute"
            onClick={props.onClose}
          >
            ✕
          </button>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-5xl text-center text-gray-900 font-bold mt-10">
                {props.title}
              </h1>
              <p className="text-center text-gray-900 p-5 md:p-8 md:text-2xl">
                {props.description}
              </p>
            </div>
            <div className="lg:w-1/2">
              <a href={props.url} target="_blank" rel="noreferrer">
                <picture>
                  <source srcSet={props.image} type="image/webp" />
                  <img
                    src={props.altImage}
                    alt={props.title}
                    className="w-3/4 h-3/4 object-contain  mt-16 mx-auto"
                  />
                </picture>
              </a>
            </div>
          </div>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mb-10 w-full bg-customBgColor text-gray-200 rounded-none mt-10"
          >
            Visit Website
          </a>
        </div>
      </div>
    </>
  );
}
