const A = "/assets";

interface AvatarGroupProps {
  avatars: string[];
  overflowCount: string;
  overlapOffset?: number;
  size?: number;
}

export function AvatarGroup({
  avatars,
  overflowCount,
  size = 43,
  overlapOffset = 16,
}: AvatarGroupProps) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <div
          className="flex-shrink-0 overflow-hidden rounded-full border-2 border-white"
          key={i}
          style={{
            height: size,
            marginRight: -overlapOffset,
            width: size,
            zIndex: i,
          }}
        >
          <img
            alt=""
            className="h-full w-full object-cover"
            height={size}
            src={src}
            width={size}
          />
        </div>
      ))}
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-full"
        style={{ height: size, width: size }}
      >
        <img alt="" className="h-full w-full" src={`${A}/dbcd2.svg`} />
        <span className="absolute inset-0 flex items-center justify-center font-['Satoshi',sans-serif] font-bold text-[#242528] text-[12px] leading-[1.5]">
          {overflowCount}
        </span>
      </div>
    </div>
  );
}

export function SmallAvatarGroup({
  avatars,
  overflowCount,
}: {
  avatars: string[];
  overflowCount: string;
}) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <div
          className="flex-shrink-0 overflow-hidden rounded-full border-2 border-white"
          key={i}
          style={{ height: 32, marginRight: -8, width: 32, zIndex: i }}
        >
          <img
            alt=""
            className="h-full w-full object-cover"
            height={32}
            src={src}
            width={32}
          />
        </div>
      ))}
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-full"
        style={{ height: 32, width: 32 }}
      >
        <img alt="" className="h-full w-full" src={`${A}/71502.svg`} />
        <span className="absolute inset-0 flex items-center justify-center font-['Satoshi',sans-serif] font-medium text-[#242528] text-[12px] leading-[20px]">
          {overflowCount}
        </span>
      </div>
    </div>
  );
}
