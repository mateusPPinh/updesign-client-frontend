import footer from '@app/mocks/about-footer-mock.json';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full absolute top-0 z-0">
      <div>
        <h2 className="mb-1 about__h2">WHATSPP</h2>
        <h3 className="mb-[48px] about__h3">(51) 3061.2146</h3>

        <h2 className="mt-1 about__h2">E-MAIL</h2>
        <h3 className="mb-[48px] about__h3">contato@updesign.com.br</h3>

        <h2 className="mb-1 about__h2">ENVIAR CURRÍCULO</h2>
        <h3 className="mb-[48px] about__h3">curriculo@updesign.com.br</h3>
      </div>

      <section className="w-max items-start flex flex-row">
        {footer.map((link) => (
          <div
            className="flex items-start flex-col justify-start mr-[18px] ml-[18px] mb-0"
            key={link.brand_path}
          >
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
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
      </section>
    </div>
  );
}
