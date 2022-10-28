import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Celebration, CenterFocusStrong, CenterFocusStrongOutlined } from '@mui/icons-material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if(handleExpandClick > 1){
    setExpanded(!expanded)
  }

  return (
    <>
    <div className="containerCard">
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[700], width: 80, height : 80}} aria-label="recipe">
              {props.Avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
          title={props.title}
          subheader=""
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.Review}
            {props.Star}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">
            {/* <ShareIcon /> */}
          </IconButton>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
        <Collapse in={expanded} timeout="1" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {props.typography}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
  </div>
</>
  );
}
