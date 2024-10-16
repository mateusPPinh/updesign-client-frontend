import Link from 'next/link';

interface Props {
  message: string;
  pageId?: string;
  pageTitle?: string;
}

const PlaceholderComponent = ({ message, pageId, pageTitle }: Props) => {
  return (
    <div className="flex items-center justify-center bg-white p-10 rounded-md max-w-3xl flex-col">
      <h1 className="font-noto text-3xl leading-10">{message}</h1>
      <p className="mt-6 mb-6 text-blueDark">
        Note: Only Umbriel clients can see this message, rest assured, we will
        keep your work in progress a secret.
      </p>
      <div className="flex flex-row justify-between w-full items-center mt-6">
        <a
          href={`${process.env.NEXT_PUBLIC_UMBRIEL_LOCAL_FRONTEND}/page-block/${pageId}/${pageTitle}`}
          target="_blank"
          className="self-start hover:opacity-65 cursor-pointer"
          rel="noreferrer"
        >
          Go to Umbriel, dude
        </a>
        <Link
          href="/"
          className="self-start hover:opacity-65 cursor-pointer"
        >{`No, I'm good.. send me back to home page`}</Link>
      </div>
    </div>
  );
};

export default PlaceholderComponent;
