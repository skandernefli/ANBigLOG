import { DataGrid,GridRowSpacingParams,GridColumnSpacingParams,gridClasses  } from '@mui/x-data-grid';
import { useState, useEffect,useCallback } from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import BoxInsider from "../../components/box";
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
const PostsList =()=>{
  const getRowSpacing = useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 10, 
      
      bottom: params.isLastVisible ? 0 :10,
    };
  }, []);
  const getColumnHeaderParams = useCallback((params) => {
    return {
      style: {
        paddingRight: params.isLastColumn ? 0 : 5,
      },
    };
  }, []);
  
  const getCellParams = useCallback((params) => {
    return {
      style: {
        paddingRight: params.isLastColumn ? 0 : 5,
      },
    };
  }, []);
  const store = useStore();
const token = store.getState().token;
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://18.218.162.154:8443/server/post/admin/')
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
              <IconButton  aria-label="delete" onClick={() => handleDelete(params.row.post_id)}>
                <RemoveCircleOutlineOutlinedIcon sx={{color:"#fff"}} />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => handleEdit(params.row.post_id)}>
                <CreateOutlinedIcon sx={{color:"#fff"}} />
              </IconButton>
            </>
          ),
        },
      ];
      const handleDelete = async(post_id) => {
        console.log("this is a token",token)
        fetch(`https://18.218.162.154:8443/server/post/${post_id}`, {  method: "delete",
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
      <Typography variant={"h4"} color="rgba(255,75,75,1)" sx={{margin:"30px"}} >Dashboard/Manage_Posts/Posts_List</Typography>
    <div style={{ height: '100%', width: '100%',padding:'1%' }}>
    <DataGrid
          columns={columns}
          rows={data}
          autoHeight={true}
          getRowSpacing={getRowSpacing}
          getColumnHeaderParams={getColumnHeaderParams}
        getCellParams={getCellParams}
          sx={{   [`& .${gridClasses.row}`]: {
            bgcolor: "transparent"
          },backgroundColor:"transparent", width:"100%",borderRadius:"5px",border:0,color:"#fff",fontSize:"10pt"}}
        />
    </div></BoxInsider>)
}
export default PostsList;