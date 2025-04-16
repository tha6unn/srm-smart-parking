
import { cn } from '@/lib/utils';

interface FloorSelectorProps {
  floors: string[];
  selectedFloor: string;
  onSelectFloor: (floor: string) => void;
  className?: string;
}

const FloorSelector = ({
  floors,
  selectedFloor,
  onSelectFloor,
  className,
}: FloorSelectorProps) => {
  return (
    <div className={cn("flex gap-2 overflow-x-auto py-1", className)}>
      {floors.map((floor) => (
        <button
          key={floor}
          onClick={() => onSelectFloor(floor)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
            selectedFloor === floor
              ? "bg-srm-blue text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          {floor}
        </button>
      ))}
    </div>
  );
};

export default FloorSelector;
