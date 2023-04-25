import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import BoxInsider from "../../components/box";
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
const PostsList =()=>{
  const store = useStore();
const token = store.getState().token;
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:8000/server/post/admin/')
          .then(response => response.json())
          .then(result => setData(result))
          .catch(error => console.log(error));
      }, []);
      const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'admin_id', headerName: 'Admin ID', width: 50 },
        { field: 'categorie_id', headerName: 'Category ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'post_id', headerName: 'Post ID', width: 100 },
        { field: 'created_at', headerName: 'Created At', width: 150 },
        { field: 'updated_at', headerName: 'Updated At', width: 150 },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 80,
          renderCell: (params) => (
            <>
              <IconButton aria-label="delete" onClick={() => handleDelete(params.row.post_id)}>
                <RemoveCircleOutlineOutlinedIcon />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => handleEdit(params.row.post_id)}>
                <CreateOutlinedIcon />
              </IconButton>
            </>
          ),
        },
      ];
      const handleDelete = async(post_id) => {
        console.log("this is a token",token)
        fetch(`http://localhost:8000/server/post/${post_id}`, {  method: "delete",
        credentials: 'include',
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
       })

        .then(() => {
            const updatedData = data.filter((item) => item.post_id !== post_id);
            setData(updatedData);
          })
          .catch(error => console.log("this is an error from the console", error));
        };

        const handleEdit = (post_id) => {
        navigate(`/edit/${post_id}`);
        };

    return (
    <BoxInsider>
      <Typography>Dashboard/Manage_Posts/Posts_List</Typography>
    <div style={{ height: '100%', width: '100%',padding:'1%' }}>
    <DataGrid
          columns={columns}
          rows={data}
          autoHeight={true}
          sx={{backgroundColor:"#fff", width:"100%",borderRadius:"5px"}}
        />
    </div></BoxInsider>)
}
export default PostsList;