import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box, Badge, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


// Estilização da barra de busca
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: '',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '421px',
    height: '40px',
  
  },
  [theme.breakpoints.down('sm')]: {
    border: '1px solid black',
    width: '150px',
    borderRadius:'5px'
  },
}));

// Estilização do ícone de busca
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Estilização do campo de entrada da busca
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
     
    
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#67F6D4', color: '#7777', boxShadow: 'none',  }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Buscar Empresas "sx={{  placeholderColor:"black"}} inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
            <button type="submit" style={{padding:'14px 49px 15px 61px',background:'#059279', gap:'10px',
                borderRadius:'5px',border:"none",color:"#FFFFFF",fontWeight:400,fontSize:"20px",fontFamily:'IntersectionObserver'
            }}>
                Cadastrar</button>
            </Box>
   

              
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
