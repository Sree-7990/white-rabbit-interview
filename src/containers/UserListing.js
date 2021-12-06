import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../redux/actionTypeConstants/actionTypes";
import { addUserList, addUser } from "../redux/actions/userActions";
import AddUser from "../containers/AddUser";

const UserListing = () => {
  const userListing = useSelector((state) => state);
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [showAddUser, setShowAddUser] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  useEffect(() => {
    if (userListing) {
      setUserList(userListing?.allUsers?.userList);
      setSearchResults(userListing?.allUsers?.userList);
    }
  }, [userListing]);

  const fetchUserList = async () => {
    const response = await axios
      .get("https://randomuser.me/api/0.8/?results=20")
      .catch((err) => {
        console.log("error : ", err);
      });
    dispatch(addUserList(response?.data?.results));
  };

  const addUserData = (data) => {
    alert("User Added Successfully");
    dispatch(addUser(data));
    setShowAddUser(false);
  };

  const searchUser = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm !== "") {
      const searchResult = userList?.filter(
        (userData) =>
          userData?.user?.name?.first
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          userData?.user?.name?.last
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      console.log("inside search if : ", searchTerm);
      setSearchResults(searchResult);
    } else {
      setSearchResults(userList);
    }
  };

  return (
    <div className="container">
      <div className="label">Search User</div>
      <div className="search">
        <input onChange={(event) => searchUser(event)} />
      </div>
      {searchResults &&
        searchResults?.length > 0 &&
        searchResults?.map((userData) => (
          <div key={userData?.user?.id} className="card">
            <div className="field">{`${userData?.user?.name?.title} ${userData?.user?.name?.first} ${userData?.user?.name?.last}`}</div>            
            <div className="field">{userData?.user?.email}</div>
            <div className="field">{userData?.user?.phone}</div>
          </div>
        ))}
      <div className="button" onClick={() => setShowAddUser(true)}>
        Add User
      </div>
      {showAddUser && (
        <div className="modal-container">
          <AddUser submitUser={(data) => addUserData(data)} closeModal={()=>setShowAddUser(false)} />
        </div>
      )}
    </div>
  );
};

export default UserListing;
