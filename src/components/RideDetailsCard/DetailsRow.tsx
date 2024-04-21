import React from "react";
type DetailsRowProps = {
  title: string;
  description: string;
};
function DetailsRow({ title, description }: DetailsRowProps) {
  return (
    <div className="items-left p-15 flex flex-col">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {title}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </span>
    </div>
  );
}
export default DetailsRow;
