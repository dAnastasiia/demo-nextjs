import Image from 'next/image';

interface BackButtonProps {
  text: string;
  onClick: () => void;
}

export default function BackButton({ text, onClick }: BackButtonProps) {
  return (
    <button
      className="flex items-center gap-2 p-6 mt-auto mx-auto"
      onClick={onClick}
    >
      <Image
        width={18}
        height={18}
        src="/icons/arrow-left.svg"
        alt="go back icon"
      />
      <span className="text-base md:text-lg lg:text-xl font-medium">
        {text}
      </span>
    </button>
  );
}
