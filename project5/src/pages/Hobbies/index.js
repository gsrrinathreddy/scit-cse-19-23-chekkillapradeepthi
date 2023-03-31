

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
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
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1o9QLyuB2LJFsuMs2Vu-mpFFj6NLzZIy5_hhSoJY_w&usqp=CAU&ec=48665701',
    title: 'Listening Music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzML89CODk6aI3DRUrMH68ro3bg6uiAp8iesPR_xJhA&usqp=CAU&ec=48665701',
    title: 'Reading Books',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18ZAC4wA9c3o2bnrvuGcTmNI0tQSNk9fcPNWRsdbhGJQ5YMRzrYV9Rg-qfadL9T2ZjHgF0sG43_4&usqp=CAU&ec=48665701',
    title: 'Crafting',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR7rNwTllwMCvBOmP2ApfToR7QMu-sHQfCuO1P-qAEg&usqp=CAU&ec=48665701',
    title: 'Chess',
    
    cols: 2,
  },
  
  
   
  
];