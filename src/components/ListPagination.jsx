import React from "react";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";

const ListPagination = ({ pageNum, hitList, contentsPerPage, setPageNum }) => {
  const [pageLength, setPageLength] = React.useState(0);

  React.useEffect(() => {
    const length = Math.ceil(hitList.length / contentsPerPage);
    setPageLength(length);
  }, [hitList, contentsPerPage]);

  return (
    <Pagination
      count={pageLength}
      color="primary"
      variant="outlined"
      shape="rounded"
      boundaryCount={1}
      siblingCount={0}
      page={pageNum}
      onChange={setPageNum}
    />
  );
};

ListPagination.propTypes = {
  pageNum: PropTypes.number.isRequired,
  hitList: PropTypes.arrayOf(
    PropTypes.shape({
      dataAdded: PropTypes.number,
      id: PropTypes.string.isRequired,
      index: PropTypes.number,
      parentId: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  contentsPerPage: PropTypes.number.isRequired,
  setPageNum: PropTypes.func.isRequired
};

export default ListPagination;
