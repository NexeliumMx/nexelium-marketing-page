import { Box, Typography, Link } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {
  return (
    <Box
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centers vertically
        alignItems: 'center', // Centers horizontally
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Hola Somos Nexelium!
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}
      >
        <PhoneIcon sx={{ marginRight: 1 }} />
        Contacto: +52 1 55 2537 8693
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}
      >
        <MailIcon sx={{ marginRight: 1 }} />
        <Link
          href="mailto:contacto@nexelium.com.mx"
          color="inherit"
          underline="hover"
        >
          contacto@nexelium.com.mx
        </Link>
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <WhatsAppIcon sx={{ marginRight: 1, color: '#25D366' }} />
        <Link
          href="https://wa.me/5215525378693"
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="hover"
        >
          +52 1 55 2537 8693
        </Link>
      </Typography>
    </Box>
  );
}

export default App;