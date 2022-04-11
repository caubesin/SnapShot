import React from 'react';
import {getUrlImg} from '../const/urlImg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function List(props) {
    console.log(props.img)
    return(
        <>
        <ImageList sx={{ height: "auto" }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
            </ImageListItem>
            {props.img.map((item) => (
                <ImageListItem key={item.id} onClick={() => props.handleClick(item)}>
                <img
                    src={getUrlImg(item)}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title ? item.title : "No title"}
                    subtitle={item.owner}
                    sx={{

                    }}
                    actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                    >
                        <InfoIcon />
                    </IconButton>
                    }
                />
                </ImageListItem>
            ))}
        </ImageList>
        </>
    )
}