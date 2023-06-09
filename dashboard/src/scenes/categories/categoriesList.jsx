import {
    DataGrid,
    GridRowSpacingParams,
    GridColumnSpacingParams,
    gridClasses,
  } from "@mui/x-data-grid";
  import { useState, useEffect, useCallback } from "react";
  import { Box, IconButton, Typography, useTheme } from "@mui/material";
  import BoxInsider from "../../components/box";
  import { useStore } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import AnimatedButton from "../../components/button";
  
  import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
  import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
  const PostsList = () => {
    const getRowSpacing = useCallback((params) => {
      return {
        top: params.isFirstVisible ? 0 : 10,
  
        bottom: params.isLastVisible ? 0 : 10,
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
    const [data, setData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
      fetch("https://18.218.162.154:8443/server/category")
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((error) => console.log(error));
    }, []);
  
    const columns = [
      { field: "id", headerName: "ID", width: 180 },
      { field: "admin_id", headerName: "admin_id", width: 180 },
      { field: "name", headerName: "name", width: 500 },
  
  
  
  
      {
        field: "actions",
        headerName: "Actions",
        width: 80,
        renderCell: (params) => (
          <>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(params.row.id)}
            >
              <RemoveCircleOutlineOutlinedIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={() => handleEdit(params.row.post_id)}
            >
              <CreateOutlinedIcon sx={{ color: "#fff" }} />
            </IconButton>
          </>
        ),
      },
    ];
    const handleDelete = async (id) => {
      fetch(`https://18.218.162.154:8443/server/category/${id}`, {
        method: "delete",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          const updatedData = data.filter((item) => item.id !== id);
          setData(updatedData);
        })
        .catch((error) =>
          console.log("this is an error from the console", error)
        );
    };
  
    const handleEdit = (post_id) => {
      navigate(`/edit/${post_id}`);
    };
  
    return (
      <BoxInsider>
        <Typography
          variant={"h4"}
          color="rgba(255,75,75,1)"
          sx={{ margin: "30px" }}
        >
          Dashboard/categories
        </Typography>
        <Box className="controllersLayoutHomePageForm">
          <Box>
            <AnimatedButton
              className="buttonform"
              onClick={()=>{navigate("/createCategory")}}
              sx={{
                "& .buttonform .top, .buttonform .bottom, .buttonform .left, .buttonform .right":
                  { backgroundColor: "#ebff33" },
                "& .buttonform .border": { border: "1px solid #ebff33" },
                "& .buttonform": { color: "#ebff33" },
              }}
            >
              add category
            </AnimatedButton>
          </Box>
        </Box>
        <div style={{ height: "100%", width: "100%", padding: "1%" }}>
          <DataGrid
            columns={columns}
            rows={data}
            getRowId={(row) => row. id}
            autoHeight={true}
            getRowSpacing={getRowSpacing}
            getColumnHeaderParams={getColumnHeaderParams}
            getCellParams={getCellParams}
            sx={{
              [`& .${gridClasses.row}`]: {
                bgcolor: "transparent",
              },
              backgroundColor: "transparent",
              width: "100%",
              borderRadius: "5px",
              border: 0,
              color: "#fff",
              fontSize: "10pt",
            }}
          />
        </div>
      </BoxInsider>
    );
  };
  export default PostsList;
  