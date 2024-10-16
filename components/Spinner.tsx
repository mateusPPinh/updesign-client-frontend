const Spinner = () => {
  return (
    <div
      className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blueDark rounded-full dark:text-blue-500"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
