import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import BoxInsider from "../../components/box";
import { useNavigate } from 'react-router-dom';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
const PostsList =()=>{
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
              <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                <RemoveCircleOutlineOutlinedIcon />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => handleEdit(params.row.id)}>
                <CreateOutlinedIcon />
              </IconButton>
            </>
          ),
        },
      ];
      const handleDelete = (id) => {
        fetch(`http://localhost:8000/server/post/${id}`, { method: 'DELETE' })
        .then(() => {
            const updatedData = data.filter((item) => item.id !== id);
            setData(updatedData);
          })
          .catch(error => console.log(error));
        };

        const handleEdit = (id) => {
        navigate('/edit/${id}');
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