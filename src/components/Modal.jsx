/* eslint-disable react/prop-types */
export default function Modal(props) {
  return (
    <>
      <div
        className="modal-backdrop bg-black opacity-60 w-full h-full z-10 fixed top-0 left-0 place-items-center"
        onClick={props.onClose}
      ></div>
      <div className=" w-3/4 h-3/4 bg-customParchmentColor relative opacity-100 z-20">
        <button
          className="btn btn-sm btn-circle btn-ghost right-2 top-2 text-black absolute"
          onClick={props.onClose}
        >
          ✕
        </button>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-center text-gray-900 font-bold">
            {props.title}
          </h1>
          <p className="text-center text-gray-900">{props.description}</p>
          <img
            src={props.image}
            alt="project"
            className="w-3/4 h-3/4 object-contain"
          />
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Visit Website
          </a>
        </div>
      </div>
    </>
  );
}
