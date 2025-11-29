import {
  Container,
  Form,
  Badge,
  Row,
  Col,
  Button,
  Table,
} from "react-bootstrap";
import { BiPencil } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../components/LoadingSpinner";
import { getDownloadUrl, cityList } from "../api";
import moment from "moment";
import axiosInstance from "../helper/constants/axiosInstance";
const adminAlias = import.meta.env.VITE_API_ADMIN_ALIAS;

function Participate() {
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterKeyword, setFilterKeyword] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const S3_baseurl = import.meta.env.VITE_API_S3FILE_URL;
  const navigate = useNavigate();

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    let offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };
  const getEnquiryList = async () => {
    setIsLoading(true);
    
    const body = { params: { offset: offset, perPage: perPage } };
    await axiosInstance.get(`/enquiry`, body)
			.then((response) => {
        console.log('>>> ', response.data);
				setIsLoading(false)
				if (response.data.status === "success") {
					setPageCount(Math.ceil(response.data?.totalRecords / perPage))
					setItems(response.data?.data)
					setTotalRecords(response.data?.totalRecords)	
				}
			}).catch((error) => {
        console.log('>>> ', error.status, error);
        if(error.status === 403){
          // alert('Session Timeout');
          handleLogout();
        }
				setIsLoading(false)
				// showAlert("Can not get Leads.", "danger")
			});
    // let result = await enquiryList(params);
    // if (result?.status == "success") {
    //   if (result?.data) {
    //     // console.log('>>> ', result.data);
    //     setPageCount(Math.ceil(result?.totalRecords / perPage));
    //     setItems(result.data);
    //     setTotalRecords(result.totalRecords);
    //   }
    // }
    // setIsLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    localStorage.clear("auth-token");
    localStorage.clear();
    navigate(adminAlias);
  };

  const getMediaFile = async (fileUrl) => {
    if (fileUrl != "") {
      setIsLoading(true);
      const key = fileUrl.split(".amazonaws.com/")[1];
      console.log("key :: ", key);
      let result = await getDownloadUrl(key);
      console.log(">>> ", result);
      const { downloadUrl } = result;
      window.open(downloadUrl, "_blank");
      // <video src={downloadUrl} controls width="400" />

      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      getEnquiryList();
    }
  }, [offset]);

  const showItems = () => {
    return isLoading == false ? (
      <>
        <Table responsive className="table v-align-middle table-striped medium">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name / DOB</th>
              <th>Submission Date</th>
              <th>Contact / Email</th>
              <th>Role Interested</th>
              <th>Dream</th>
              <th>How to know about this</th>
              <th>State</th>
              <th>City</th>
              <th>File</th>
              {/* <th width="120" className="col-fixed">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody className="text-muted">
            {items.map((item, $index) => {
              // let fileUrl =   item.media_url;
              // if(!item.media_url.contains('http')){
              let fileUrl = item.media_url;
              // }
              return (
                <>
                  <tr key={item.id}>
                    <td>
                      HMA{String(item.id).padStart(5, "0")}
                    </td>
                    <td>
                      {item.name}
                      <br />
                      {item.dob ? moment(item.dob).format("DD-MM-YYYY") : "NA"}
                    </td>
                    <td>{moment(item.createdAt).format('DD-MM-YYYY')}</td>
                    <td>
                      {item.contact} <br />
                      {item.email}
                    </td>
                    <td>
                      {item.interest_in_role} <br />{" "}
                      {item.other_roles ? item.other_roles : ""}{" "}
                    </td>
                    <td>{item.dream_remarks}</td>
                    <td>{item.how_to_know_about_this}</td>
                    <td>
                      {item?.StateMaster?.stateName
                        ? item?.StateMaster?.stateName
                        : "NA"}
                    </td>
                    <td>
                      {item?.CityMaster?.cityName
                        ? item?.CityMaster?.cityName
                        : "NA"}
                    </td>
                    <td>
                      {item.media_url ? (
                        <>
                          {/* <button >View File</button> */}
                          <a
                            onClick={() => getMediaFile(item.media_url)}
                            target="_blank"
                          >
                            View File
                          </a>
                        </>
                      ) : (
                        "NA"
                      )}
                    </td>
                    {/* <td className="col-fixed">
                      <Button variant="default btn-icon">
                        <BiPencil />
                      </Button>
                    </td> */}
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </>
    ) : (
      <LoadingSpinner />
    );
  };
  return (
    <>
      <h1 className="h4 mb-4 font-secondary fw-medium">Participant</h1>
      {/* <h5 className="mb-0">Total Records : {totalRecords}</h5> */}

      {/* <div className="bg-white p-4 rounded mb-4">
        <h6 className="font-secondary text-muted fw-medium mb-4">Filters</h6>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Select Role</Form.Label>
              <Form.Select>
                <option value="">Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Duration - Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Duration - End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-content-center gap-2">
          <Button variant="primary" size="sm">
            <span>Search</span>
          </Button>
          <Button variant="outline-secondary" size="sm">
            Reset
          </Button>
          <Button variant="outline-secondary" size="sm">
            Download
          </Button>
        </div>
      </div> */}
      <div className="table-view bg-white rounded-4 p-4">
        <div className="text-muted mb-3">
          Total Records :{" "}
          <span className="text-dark fw-bold">{totalRecords ? totalRecords : 0}</span>
        </div>
        {
          (items && items.length > 0) ? showItems()
          : <>
          <div className="d-flex text-muted justify-content-center p-5 w-100 align-items-center flex-column">
            <i className="fa fa-database fa-3x mb-3"></i>
            <p>Sorry, no record found!</p>
          </div>
          </>
        }        
      </div>
      {items ? (
        items.length > 0 ? (
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={
              "pagination justify-content-center flex-wrap mt-3"
            }
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        ) : null
      ) : null}
    </>
  );
}

export default Participate;
