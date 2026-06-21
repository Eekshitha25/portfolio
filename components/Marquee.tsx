"use client";

export default function Marquee({
  items,
  className = "",
  itemClassName = "",
  speed = 28,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex items-center animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={`inline-flex items-center ${itemClassName}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
