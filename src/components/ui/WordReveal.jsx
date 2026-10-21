const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

export function WordReveal({
  as: Tag = "h2",
  id,
  className,
  parts,
}) {
  let wordIndex = 0;
  const accessibleText = parts
    .map((part) => (typeof part === "string" ? part : part.text))
    .join("");

  return (
    <Tag
      id={id}
      className={className}
      data-word-reveal=""
      aria-label={accessibleText}
    >
      {parts.map((part, partIndex) => {
        const text = typeof part === "string" ? part : part.text;
        const segmentClassName =
          typeof part === "string" ? undefined : part.className;

        return (
          <span key={partIndex} className={segmentClassName}>
            {text.split(/(\s+)/).map((piece, pieceIndex) => {
              if (!piece) return null;
              if (/^\s+$/.test(piece)) return piece;

              const delay = wordIndex++ * 0.04;

              return (
                <span
                  key={pieceIndex}
                  className="word-mask"
                  style={{ "--word-delay": `${delay}s`, "--word-ease": ease }}
                >
                  <span className="word-rise">{piece}</span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
