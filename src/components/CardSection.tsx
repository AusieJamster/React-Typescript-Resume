import { Typography, Box, CardMedia, Card, CardContent, CardActionArea } from '@mui/material';
import { blue } from '@mui/material/colors';

interface EducationCards {
  _id: string;
  title: string;
  cards: Array<{
    imageURL: string;
    imageAlt: string;
    target: string;
    title: string;
    description: string;
    year: string;
  }>;
}

export default function CardSection({ title, _id, cards }: EducationCards) {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography component="h2" id={_id} variant="h2" sx={{ py: 3 }}>
        {title}
      </Typography>
      <Box component="div" sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <Card key={card.title} sx={{ width: 350, m: 2, backgroundColor: blue[50] }}>
            <CardActionArea
              sx={{ height: '100%' }}
              onClick={() => {
                window.open(card.target, '_blank');
              }}
            >
              <CardMedia component="img" height="140" image={card.imageURL} alt={card.imageAlt} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {card.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  {card.year}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
