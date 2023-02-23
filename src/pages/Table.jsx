import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";
import { fetchUserThunkAction } from "../redux/User/action";
import "../assets/Style.css";
import { useEffect, useMemo, useState } from "react";
import { header, fields } from "../Data/TableData";
import { selectUserList } from "../redux/User/selectors";

function Table() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    users,
    loading,
    error: reduxUsersError,
  } = useSelector((state) => state);
  console.log("Users: ", users);

  const onSuccess = () => {
    setError(null);
  };

  const onError = (error) => {
    setError(error);
  };

  useEffect(() => {
    dispatch(
      fetchUserThunkAction(
        {
          page: 1,
          limit: 20,
        },
        onSuccess,
        onError
      )
    );
  }, []);

  const columns = useMemo(() => header, []);
  const data = useMemo(() => users, [users]);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    // <div className="table">
    //   <table
    //     className="table table-hover"
    //     style={{ marginTop: "5%" }}
    //     {...getTableProps()}
    //   >
    // <thead>
    //   {headerGroups.map((headerGroup) => (
    //     <tr {...headerGroup.getHeaderGroupProps()}>
    //       {headerGroup.headers.map((column) => (
    //         <th className="my-header" {...column.getHeaderProps()}>
    //           {column.render("Header")}
    //         </th>
    //       ))}
    //     </tr>
    //   ))}
    // </thead>
    // <tbody className="v_align_middle" {...getTableBodyProps()}>
    //   {rows.map((row) => {
    //     prepareRow(row);
    //     return (
    //       <tr className="my-row" {...row.getRowProps()}>
    //         {row.cells.map((cell) => (
    //           <td className="my-cell" {...cell.getCellProps()}>
    //             {cell.render("Cell")}
    //           </td>
    //         ))}
    //       </tr>
    //     );
    //   })}
    // </tbody>
    //   </table>
    // </div>
    <div class="container mt-3 mb-4">
      <div class="col-lg-9 mt-4 mt-lg-0">
        <div class="row">
          <div class="col-md-12">
            <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
              <table class="table manage-candidates-top mb-0">
                <thead>
                  <tr>
                    <th>Candidate Name</th>
                    <th class="text-center">Status</th>
                    <th class="action text-right">Action</th>
                  </tr>
                </thead>
                {users.map((user) => (
                  <tbody>
                    <tr class="candidates-list">
                      <td class="title">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src={user.picture.medium}
                            alt=""
                          />
                        </div>
                        <div class="candidate-list-details">
                          <div class="candidate-list-info">
                            <div class="candidate-list-title">
                              <h5 class="mb-0">
                                <a href="#">
                                  {user.name.first + " " + user.name.last}
                                </a>
                              </h5>
                            </div>
                            <div class="candidate-list-option">
                              <ul class="list-unstyled">
                                <li>
                                  <i class="fas fa-envelope pr-1"></i>{" "}
                                  {user.email}
                                </li>
                                <li>
                                  <i class="fas fa-map-marker-alt pr-1"></i>{" "}
                                  {user.location.city +
                                    ", " +
                                    user.location.state}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="candidate-list-favourite-time text-center">
                        <a
                          class="candidate-list-favourite order-2 text-danger"
                          href="#"
                        >
                          <i class="fas fa-heart"></i>
                        </a>{" "}
                        <span class="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <a
                              href="#"
                              class="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i class="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="far fa-trash-alt"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                ))}
                {/* <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          class="text-center"
                          // className="my-header"
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead> */}

                {/* <tbody className="candidates-list" {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="candidates-list" {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td className="title" {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
