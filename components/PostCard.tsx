import Card from '@material-ui/core/Card';
import { CardContent, CardActions, Button, Typography } from '@material-ui/core';

interface IProps {
  post: { title: string; summary: string };
}

export default function PostCard({ post }: IProps) {
  const { title, summary } = post

  const onClickPost = () => {
    const path = `/posts/${title}`
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          href={`/posts/${title}`}
        >See More</Button>
      </CardActions>
    </Card>
  )
}
