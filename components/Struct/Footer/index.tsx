import Image from 'next/image';
import footerIcons from '@app/mocks/footer-icons.json';
import Link from 'next/link';
import { BorderMobile } from './footer.responsive.styles';
import { useWindowSize } from 'rooks';

type FooterItem = {
  title_top: string;
  title_bottom: string;
};

type FooterProps = {
  items: FooterItem[];
};

export default function Footer({ items }: FooterProps) {
  const { innerWidth } = useWindowSize();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center mx-auto">
        {innerWidth && innerWidth <= 425 && <BorderMobile />}
        <div className="border-t border-black w-[calc(100%-32px)] flex justify-center items-center h-10 mb:hidden"></div>
        <div className="w-[calc(100%-32px)] items-center flex flex-col justify-center ml-4">
          <div className="w-[calc(100%-80px)] flex flex-col sm:flex-row justify-between mb-10  xl:flex-row">
            <div className="w-8 items-center flex flex-col justify-center ml-0 mr-0 mb-6 pt-0 pb-0">
              <Link href="/" target="_blank" rel="noopener noreferrer">
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

            {items.map((it: FooterItem, index) => (
              <div
                className="w-max flex flex-col justify-center ml-0 mr-0 mb-6 pt-0 pb-0"
                key={index}
              >
                <p className="title__top">{it.title_top}</p>
                <p className="font-noto text-xs font-normal">
                  {it.title_bottom}
                </p>
              </div>
            ))}

            <div className="items-center flex flex-col justify-center mb-6">
              <div className="w-full flex sm:flex-row">
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
          <div className="w-full flex flex-row justify-center items-center mt-[-20px] mb-6">
            {innerWidth && innerWidth <= 425 ? (
              <div className="hidden" />
            ) : (
              <>
                <small className="font-poppins text-xs font-medium mr-0 tracking-[1px]">
                  UPDesign Brasil - 2024 Todos os direitos reservados
                </small>
                <small className="ml-1 mr-1">|</small>
              </>
            )}
            <>
              {innerWidth && innerWidth <= 375 ? (
                <div className="flex flex-col items-start">
                  <small className="font-poppins text-xs font-medium mr-1 tracking-[1px]">
                    Desenvolvido e distribuído por
                  </small>
                  <Image
                    loading="eager"
                    alt="Logomarca UpDesign Brasil"
                    src="/assets/umbriel-logo.svg"
                    width={0}
                    height={0}
                    priority={true}
                    style={{
                      height: 'auto',
                      width: '80px',
                      backgroundSize: 'cover'
                    }}
                  />
                </div>
              ) : (
                <>
                  <small className="font-poppins text-xs font-medium mr-1 tracking-[1px]">
                    Desenvolvido e distribuído por
                  </small>
                  <Image
                    loading="eager"
                    alt="Logomarca UpDesign Brasil"
                    src="/assets/umbriel-logo.svg"
                    width={0}
                    height={0}
                    priority={true}
                    style={{
                      height: 'auto',
                      width: '80px',
                      backgroundSize: 'cover'
                    }}
                  />
                </>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
