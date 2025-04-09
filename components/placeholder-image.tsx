interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

export default function PlaceholderImage({ width, height, text = "Image", className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gray-800 flex items-center justify-center text-gray-400 text-sm ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </div>
  )
}
