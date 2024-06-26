import Cell from "./Cell";

const Row = ({ rowNum }) => {
  return (
    <div className="flex gap-2  w-full h-[30%] justify-center">
      <Cell rowNum={rowNum} colNum={0} />
      <Cell rowNum={rowNum} colNum={1} />
      <Cell rowNum={rowNum} colNum={2} />
    </div>
  );
};

export default Row;
