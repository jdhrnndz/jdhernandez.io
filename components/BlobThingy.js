const LeftConnector = () => (
  <svg className="w-fit h-full fill-celadon-green" viewBox="0 0 100 100" role="none">
    <mask id="circle">
      <rect fill="white" x="0" width="50" height="100"></rect>
      <rect fill="white" x="50" width="50" height="100"></rect>
      <circle fill="black" cx="0" cy="50" r="50" />
    </mask>
    <g mask="url(#circle)">
      <rect x="0" width="100" height="100"></rect>
    </g>
  </svg>
);

const RightConnector = () => (
  <svg className="h-full fill-celadon-green" viewBox="0 0 100 100" role="none">
    <mask id="circle2">
      <rect fill="white" x="0" width="50" height="100"></rect>
      <rect fill="white" x="50" width="50" height="100"></rect>
      <circle fill="black" cx="100" cy="50" r="50" />
    </mask>
    <g mask="url(#circle2)">
      <rect x="0" width="100" height="100"></rect>
    </g>
  </svg>
);

export const BlobEnum = {
  'Empty': ({ width, height }) => <div className={`${width} ${height}`}></div>,
  'Island': ({ width, height, children }) => <div className={`${width} ${height} bg-celadon-green rounded-full relative flex justify-center items-center`}>{children}</div>,
  'Fill': ({ width, height, children }) => <div className={`${width} ${height} bg-celadon-green relative flex justify-center items-center`}>{children}</div>,
  'EndLeft': ({ width, height, children }) => <div className={`${width} ${height} bg-celadon-green rounded-l-full relative flex justify-center items-center`}>{children}</div>,
  'EndRight': ({ width, height, children }) => <div className={`${width} ${height} bg-celadon-green rounded-r-full relative flex justify-center items-center`}>{children}</div>,
  'LeftConnector': ({ width, height }) => (
    <div className={`${width} ${height} flex flex-row justify-end`}>
      <LeftConnector />
    </div>
  ),
  'RightConnector':  ({ width, height }) => (
    <div className={`${width} ${height} flex flex-row justify-start`}>
      <RightConnector />
    </div>
  ),
  'ConnectorFill': ({ width, height }) => <div className={`${width} ${height} bg-celadon-green`}></div>,
}

const BlobThingy = ({ contentHeightClass, connectorHeightClass, widthClass, data, className }) => (
  <div className={`mx-auto select-none w-fit h-fit grid grid-rows-[1fr_auto] grid-cols-${data[0].length} ${className}`}>
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
