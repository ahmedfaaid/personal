import Image from 'next/image';

interface MDXImageProps {
  src: string;
  alt: string;
}

export default function MDXImage({ src, alt }: MDXImageProps) {
  return (
    <div className='relative mx-auto h-60 w-full sm:h-80 md:h-[32rem]'>
      <Image src={src} alt={alt} layout='fill' objectFit='cover' />
    </div>
  );
}
