import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const images = [
  'https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800',
  'https://images.unsplash.com/photo-1542744173-df01b1a0062c?auto=format&fit=crop&w=800'
];

export default function Carousel() {
  const scrollRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const newIndex = Math.max(0, Math.min(index, images.length - 1));
      setCurrentIndex(newIndex);
      scrollRef.current.scrollTo({ left: scrollRef.current.clientWidth * newIndex, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((currentIndex + 1) % images.length);
    }, 3000); // Tempo de exibição de cada slide em ms

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'hidden', marginTop: "-20rem" }}>
      <IconButton
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: 10, 
          zIndex: 1, 
          transform: 'translateY(-50%)', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
        }}
        onClick={() => handleScroll('left')}
      >
        <ArrowBackIcon />
      </IconButton>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 0,
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          transition: 'transform 0.5s ease',
          width: '100%',
          height: 'auto',
        }}
      >
        {images.map((src, index) => (
          <Box key={index} sx={{ flexShrink: 0, width: '100%' }}>
            <AspectRatio minHeight={120} maxHeight={500}>
              <img
                src={src}
                srcSet={`${src}?auto=format&fit=crop&w=800&dpr=2 2x`}
                alt={`Carousel image ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
              />
            </AspectRatio>
          </Box>
        ))}
      </Box>
      <IconButton
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          right: 10, 
          zIndex: 1, 
          transform: 'translateY(-50%)', 
          backgroundColor: 'rgba(255, 255, 255, 0.7)', 
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
        }}
        onClick={() => handleScroll('right')}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
}
