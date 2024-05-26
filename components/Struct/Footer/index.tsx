import Image from 'next/image';
import footerIcons from '@app/mocks/footer-icons.json';
import Link from 'next/link';

export default function Footer(props: any) {
  const footerObj = Object.values(props);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center mx-auto">
        <div className="w-[calc(100%-32px)] items-center flex flex-col justify-center ml-4 mr-16">
          <div className="border-t border-black w-full flex justify-center items-center h-10"></div>
          <div className="w-[calc(100%-80px)] flex flex-row justify-between mb-10">
            <div className="w-8 items-center flex flex-col justify-center ml-0 mr-0 mb-0 pt-0 pb-0">
              <Link href="/home" target="_blank" rel="noopener noreferrer">
                <Image
                  loading="eager"
                  alt="Logomarca UpDesign Brasil"
                  src="/assets/brand-updesign.svg"
                  width={0}
                  height={0}
                  priority={true}
                  style={{ height: 'auto', width: 'auto' }}
                />
              </Link>
            </div>

            {footerObj.map((it: any) => (
              <div
                className="w-max flex flex-col justify-center ml-0 mr-0 mb-0 pt-0 pb-0"
                key={it.title_top}
              >
                <p className="paragraphTitleFooter font-poppins">
                  {it.title_top}
                </p>
                <p className="paragraphSubtitleFooter font-noto">
                  {it.title_bottom}
                </p>
              </div>
            ))}

            <div className="items-center flex flex-col justify-center mb-6">
              <div className="w-full flex flex-row">
                {footerIcons.map((link) => (
                  <div
                    className="flex items-start flex-col justify-start mr-8 mb-0"
                    key={link.brand_path}
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.brand_path}
                        width={0}
                        height={0}
                        priority={true}
                        style={{ height: 'auto', width: 'auto' }}
                        alt={link.brand_alt}
                        loading="eager"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
