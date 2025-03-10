export default function ResumeBtn() {
  return (
    <div>
      <a
        className="relative focus:outline-none capitalize"
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <span className="relative block transition-all duration-300 ease-in-out border rounded-md border-red-500 hover:-translate-x-1 hover:-translate-y-1 py-3 px-10 bg-navy-green">
          Resume
        </span>
        <span className="absolute inset-0 rounded-md -z-10 bg-red-800"></span>
      </a>
    </div>
  );
}
