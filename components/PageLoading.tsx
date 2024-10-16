import Spinner from './Spinner';

const PageLoading = () => {
  return (
    <div className="mx-auto w-full h-full mt-[100%]">
      <div className="flex items-center justify-center">
        <div className="flex flex-row items-center space-x-2">
          <Spinner />
          <h1 className="font-poppins text-2xl text-blueDark">Carregando...</h1>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
