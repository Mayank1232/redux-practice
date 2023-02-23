import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunkAction } from "../redux/User/action";
import { Table } from "reactstrap";
import "../assets/Style.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import DefaultModal from "../components/Modal/Modal";
import BootstrapNavbar from "../components/Navbar/Navbar";

function ReactTable() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const {
    users,
    loading,
    error: reduxUsersError,
  } = useSelector((state) => state);

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
          page: currentPage,
          results: usersPerPage,
          seed: "abc",
        },
        onSuccess,
        onError
      )
    );
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const [usersPerPage] = useState(10);
  const [basicModal, setBasicModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(users);

  const PageCount = Math.ceil(users.length / usersPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return searchResults.slice(startIndex, endIndex);
  }, [users, currentPage, usersPerPage, searchResults]);

  const toggleViewModal = (user) => {
    setUserData(user);
    setBasicModal((prev) => !prev);
  };

  // searching
  const handleSearch = (event) => {
    event.preventDefault();
    setCurrentPage(0);
  };

  useEffect(() => {
    const results = users.filter((user) =>
      user.name.first.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, users]);

  return (
    <>
      <BootstrapNavbar
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {loading ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ marginTop: "20%" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div class="container mt-5 mb-4">
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="row">
              <div class="col-md-12">
                <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                  <Table class="table manage-candidates-top mb-0">
                    <thead>
                      <tr>
                        <th>Candidate Name</th>
                        <th class="text-center">Status</th>
                        <th class="action text-right">Action</th>
                      </tr>
                    </thead>
                    {paginatedData?.map((user) => (
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
                                  style={{ cursor: "pointer" }}
                                  className="cursor-pointer text-primary"
                                  onClick={() => toggleViewModal(user)}
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
                  </Table>

                  <nav
                    className="justify-content-center"
                    style={{ marginLeft: "20%" }}
                  >
                    <ul className="pagination">
                      <li
                        className={classnames("page-item", {
                          disabled: currentPage === 0,
                        })}
                      >
                        <a
                          class="page-link"
                          style={{ cursor: "pointer" }}
                          onClick={() => setCurrentPage(currentPage - 1)}
                        >
                          Previous
                        </a>
                      </li>
                      {Array.from({
                        length: Math.ceil(users.length / usersPerPage),
                      }).map((_, index) => (
                        <li
                          class={classnames("page-item", {
                            active: currentPage === index,
                          })}
                        >
                          <a
                            class="page-link"
                            style={{ cursor: "pointer" }}
                            onClick={() => setCurrentPage(index)}
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}
                      <li
                        className={classnames("page-item", {
                          disabled: currentPage === PageCount - 1,
                        })}
                      >
                        <a
                          class="page-link"
                          style={{ cursor: "pointer" }}
                          onClick={() => setCurrentPage(currentPage + 1)}
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <DefaultModal
                    isOpen={basicModal}
                    userData={userData}
                    toggleViewModal={toggleViewModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReactTable;
