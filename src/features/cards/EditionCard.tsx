import Image from "next/image";

type EditionCardProps = {
  edition: string;
  benefit: string;
  image: string;
  imageAlt: string;
  number: string;
  imagePosition?: string;
  logo?: string;
  logoAlt?: string;
  tone?: "artist" | "festival";
  size?: "default" | "compact";
};

function MastercardMark() {
  return (
    <span className="relative block h-7 w-11" aria-label="Mastercard">
      <span className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[#eb001b]" />
      <span className="absolute right-0 top-0 h-7 w-7 rounded-full bg-[#f79e1b] opacity-95" />
    </span>
  );
}

export default function EditionCard({
  edition,
  benefit,
  image,
  imageAlt,
  number,
  imagePosition = "object-center",
  logo,
  logoAlt = "",
  tone = "artist",
  size = "default",
}: EditionCardProps) {
  const isFestival = tone === "festival";
  const isCompact = size === "compact";

  return (
    <div
      className={`relative mx-auto aspect-[1.58/1] w-full overflow-hidden bg-[#090d45] shadow-[0_28px_70px_rgba(8,11,63,0.16)] ${
        isCompact ? "max-w-[330px] rounded-[18px]" : "max-w-[470px] rounded-[24px]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className={`object-cover ${imagePosition}`}
        sizes={isCompact ? "(max-width: 640px) 84vw, 330px" : "(max-width: 640px) 92vw, 470px"}
      />
      <div
        className={`absolute inset-0 ${
          isFestival
            ? "bg-gradient-to-r from-[#070a3d]/95 via-[#070a3d]/66 to-[#070a3d]/18"
            : "bg-gradient-to-r from-[#070a3d] via-[#070a3d]/82 to-[#070a3d]/12"
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-between ${
          isCompact ? "p-4 sm:p-5" : "p-6 sm:p-8"
        }`}
      >
        <div className="flex items-start justify-between gap-5">
          <Image
            src="/nfctron-logo-white.svg"
            alt="NFCtron"
            width={isCompact ? 76 : 96}
            height={isCompact ? 14 : 18}
          />
          <div className={isCompact ? "scale-75 origin-top-right" : ""}>
            <MastercardMark />
          </div>
        </div>

        <div className="flex items-end justify-between gap-5">
          <div>
            {logo ? (
              <div className={`relative ${isCompact ? "mb-2 h-7 w-24" : "mb-4 h-11 w-36"}`}>
                <Image
                  src={logo}
                  alt={logoAlt}
                  fill
                  className="object-contain object-left"
                  sizes="144px"
                />
              </div>
            ) : null}
            <p className={`${isCompact ? "text-[6px]" : "text-[8px]"} font-semibold uppercase tracking-[0.18em] text-white/50`}>
              {edition}
            </p>
            <p className={`${isCompact ? "mt-1 max-w-[170px] text-sm sm:text-base" : "mt-2 max-w-[235px] text-lg sm:text-xl"} font-semibold leading-tight tracking-[-0.035em] text-white`}>
              {benefit}
            </p>
            <p className={`${isCompact ? "mt-3 text-[7px]" : "mt-5 text-[9px]"} font-medium tracking-[0.2em] text-white/55`}>
              •••• •••• •••• {number}
            </p>
          </div>
          <span className={`${isCompact ? "px-2 py-0.5 text-[6px]" : "px-2.5 py-1 text-[7px]"} mb-0.5 rounded-full border border-white/20 bg-white/10 font-semibold uppercase tracking-[0.12em] text-white/75 backdrop-blur-sm`}>
            Virtual
          </span>
        </div>
      </div>
    </div>
  );
}
