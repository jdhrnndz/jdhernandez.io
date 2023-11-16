export const BlobEnum = {
  'Empty': () => (
    <div>
    </div>
  ),
  'Island': ({ width, height, children }) => (
    <div className={`${width} ${height} bg-celadon-green rounded-full relative flex justify-center items-center outline-none`}>
      {children}
    </div>
  ),
  'Fill': ({ width, height, children }) => (
    <div className={`${width} ${height} bg-celadon-green relative flex justify-center items-center outline-none`}>
      {children}
    </div>
  ),
  'EndLeft': ({ width, height, children }) => (
    <div className={`${width} ${height} bg-celadon-green rounded-l-full relative flex justify-center items-center outline-none`}>
      {children}
    </div>
  ),
  'EndRight': ({ width, height, children }) => (
    <div className={`${width} ${height} bg-celadon-green rounded-r-full relative flex justify-center items-center outline-none`}>
      {children}
    </div>
  ),
  'LeftConnector': ({ height }) => (
    <div className={`${height} relative after:h-full outline-none after:outline-none after:square after:bg-left-connector after:absolute after:top-0 after:right-0`}>
    </div>
  ),
  'RightConnector':  ({ height }) => (
    <div className={`${height} relative after:h-full outline-none after:outline-none after:square after:bg-right-connector after:absolute after:top-0 after:left-0`}>
    </div>
  ),
  'ConnectorFill': ({ height }) => (
    <div className={`${height} bg-celadon-green`}>
    </div>
  ),
}

const BlobThingy = ({ contentHeightClass, connectorHeightClass, widthClass, data, className }) => (
  <div className={`mx-auto select-none w-fit h-fit grid grid-rows-[minmax(0, 4rem)_auto] grid-cols-6 ${className}`}>
    {
      data.map((blobRow, rowIndex) => (
        blobRow.map((BlobCol, colIndex) => <BlobCol width={widthClass} height={rowIndex % 2 === 0 ? contentHeightClass : connectorHeightClass} key={`${rowIndex}-${colIndex}`} />)
      ))
    }
  </div>
);

BlobThingy.defaultProps = {
  contentHeightClass: "h-9 sm:h-16",
  connectorHeightClass: "h-2 sm:h-4",
  widthClass: "w-9 sm:w-16",
  data: [
    [BlobEnum.Empty, BlobEnum.EndLeft, BlobEnum.Fill, BlobEnum.EndRight, BlobEnum.Empty, BlobEnum.Empty],
    [BlobEnum.Empty, BlobEnum.LeftConnector, BlobEnum.ConnectorFill, BlobEnum.RightConnector, BlobEnum.Empty, BlobEnum.Empty],
    [BlobEnum.EndLeft, BlobEnum.Fill, BlobEnum.Fill, BlobEnum.Fill, BlobEnum.Fill, BlobEnum.EndRight],
    [BlobEnum.Empty, BlobEnum.Empty, BlobEnum.Empty, BlobEnum.LeftConnector, BlobEnum.RightConnector, BlobEnum.Empty],
    [BlobEnum.Empty, BlobEnum.Empty, BlobEnum.Empty, BlobEnum.EndLeft, BlobEnum.EndRight, BlobEnum.Empty],
  ],
};

export default BlobThingy;
