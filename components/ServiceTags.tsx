interface ServiceTagsProps {
  tags?: string[];
  maxTags?: number;
  size?: 'sm' | 'md';
}

export default function ServiceTags({ tags, maxTags = 3, size = 'sm' }: ServiceTagsProps) {
  if (!tags || tags.length === 0) return null;

  const displayTags = tags.slice(0, maxTags);
  const remainingCount = tags.length - maxTags;

  const sizeClasses = size === 'sm' 
    ? 'text-xs px-2.5 py-1' 
    : 'text-sm px-3 py-1.5';

  const tagColors = [
    'bg-rose-50 text-rose-700 border-rose-200',
    'bg-cyan-50 text-cyan-700 border-cyan-200',
    'bg-violet-50 text-violet-700 border-violet-200',
    'bg-orange-50 text-orange-700 border-orange-200',
    'bg-teal-50 text-teal-700 border-teal-200',
    'bg-pink-50 text-pink-700 border-pink-200',
  ];

  return (
    <div className="flex flex-wrap gap-1.5">
      {displayTags.map((tag, index) => (
        <span
          key={tag}
          className={`inline-flex items-center ${sizeClasses} rounded-md font-medium border ${tagColors[index % tagColors.length]}`}
        >
          {tag}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className={`inline-flex items-center ${sizeClasses} bg-gray-100 text-gray-600 rounded-md font-medium border border-gray-200`}>
          +{remainingCount}
        </span>
      )}
    </div>
  );
}
