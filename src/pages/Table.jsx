import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunkAction } from "../redux/User/action";
import { Table } from "reactstrap";
import "../assets/Style.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import DefaultModal from "../components/Modal/Modal";
import BootstrapNavbar from "../components/Navbar/Navbar";
import Favorites from "./Favorites";

function ReactTable() {
  const {
    users,
    loading,
    error: reduxUsersError,
  } = useSelector((state) => state);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [usersPerPage] = useState(10);
  const [basicModal, setBasicModal] = useState(false);
  const [userData, setUserData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(users);
  const [favorites, setFavorites] = useState([]);

  const PageCount = Math.ceil(users.length / usersPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    return searchResults.slice(startIndex, endIndex);
  }, [users, currentPage, usersPerPage, searchResults]);

  const dispatch = useDispatch();

  const onSuccess = () => {
    setError(null);
  };

  const onError = (error) => {
    setError(error);
  };

  const handleFavoriteClick = (user) => {
    dispatch({ type: "ADD_FAVORITE", payload: user });
  };

  const handleUnFavoriteClick = (user) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: user });
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

  const toggleViewModal = (user) => {
    setUserData(user);
    setBasicModal((prev) => !prev);
  };

  // searching
  const handleSearch = (event) => {
    event.preventDefault();
    setCurrentPage(0);
  };

  // Favorite user

  const handleFavoriteUser = (user) => {
    const isFavorite = favorites.find((favorite) => favorite.id === user.id);
    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== user.id
      );
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites, user];
      setFavorites(updatedFavorites);
    }
  };

  <Favorites favorites={favorites} />;
  console.log("favorites", favorites);

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
        <>
          <div class="container mt-5 mb-4">
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
                              onClick={() => handleFavoriteUser(user)}
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

                  {/* <Favorites favorites={favorites} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                  <Table className="table manage-candidates-top mb-0">
                    <thead>
                      <tr>
                        <th>Favorite User's List</th>
                        <th class="text-center">Status</th>
                        <th class="action text-right">Action</th>
                      </tr>
                    </thead>
                    {favorites?.map((user) => (
                      <tbody>
                        <tr className="candidates-list">
                          <td className="title">
                            <div className="thumb">
                              <img
                                className="img-fluid"
                                src={user?.picture?.medium}
                                alt=""
                              />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                    <a href="#">
                                      {user.name.first + " " + user.name.last}
                                    </a>
                                  </h5>
                                </div>
                                <div className="candidate-list-option">
                                  <ul className="list-unstyled">
                                    <li>
                                      <i className="fas fa-envelope pr-1"></i>{" "}
                                      {user.email}
                                    </li>
                                    <li>
                                      <i className="fas fa-map-marker-alt pr-1"></i>{" "}
                                      {user.location.city +
                                        ", " +
                                        user.location.state}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <a
                              className="candidate-list-favourite order-2 text-danger"
                              onClick={() => handleFavoriteClick(user)}
                            >
                              <i className="fas fa-heart"></i>
                            </a>{" "}
                            <span className="candidate-list-time order-1">
                              Shortlisted
                            </span>
                          </td>
                          <td>
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li>
                                <a
                                  style={{ cursor: "pointer" }}
                                  onClick={() => toggleViewModal(user)}
                                >
                                  <i className="far fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-info"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Edit"
                                >
                                  <i className="fas fa-pencil-alt"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="text-danger"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Delete"
                                ></a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ReactTable;
