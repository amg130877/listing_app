import PropTypes from 'prop-types';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, AppBar, Toolbar, IconButton, InputBase, ToggleButtonGroup, ToggleButton, TextField, Stack, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import { useRootContext } from '../../../contextProvider/RootContext';
import { bgBlur } from '../../../utils/cssStyles';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import Iconify from '../../../components/iconify/Iconify';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;
const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 2),
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'text.primary',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const FilterButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.primary,
  cursor: 'pointer',
}));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.action.selected,
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    padding: 0,
  },
  justifyContent: 'space-between',
  paddingInline: theme.spacing(4),
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const { activeTab, setActiveTab, openFilter, setOpenFilter , user , handleLogout} = useRootContext();

  const handleChange = (event, nextView) => {
    setActiveTab(nextView);
  };

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{ flexGrow: 1 }}>
          <CustomAppBar position="static">
            <CustomToolbar>
              <IconButton
                onClick={onOpenNav}
                sx={{
                  color: 'text.primary',
                  display: { lg: 'none' },
                }}
              >
                <Iconify icon="eva:menu-2-fill" />
              </IconButton>
              <Search sx={{ backgroundColor: 'white', width: '30% !important' }}>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: 'text.primary' }} />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ToggleButtonGroup orientation="horizontal" exclusive value={activeTab} onChange={handleChange}>
                  <ToggleButton value="list" aria-label="list" sx={{ paddingBlock: 0.3 }}>
                    <Stack spacing={0.1} sx={{ alignItems: 'center' }}>
                      <DashboardIcon sx={{ width: '20px' }} />
                      <Typography sx={{ fontSize: '12px' }}>List</Typography>
                    </Stack>
                  </ToggleButton>
                  <ToggleButton value="map" aria-label="map" sx={{ paddingBlock: 0.3 }}>

                    <Stack spacing={0.1} sx={{ alignItems: 'center' }}>
                      <MapIcon sx={{ width: '20px' }} />
                      <Typography sx={{ fontSize: '12px' }}>Map</Typography>
                    </Stack>
                  </ToggleButton>
                </ToggleButtonGroup>
                <FilterButton onClick={() => setOpenFilter((prev) => !prev)}>
                  <FilterListIcon />
                  <p>Filter</p>
                </FilterButton>
                <AccountPopover user={user} handleLogout={handleLogout}/>
                <NotificationsPopover />
              </Box>
            </CustomToolbar>
            {openFilter && (
              <CustomToolbar sx={{ justifyContent: 'flex-start', mt: 2 }}>
                <TextField
                  label="From"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mr: 2 }}
                />
                <TextField label="To" type="date" InputLabelProps={{ shrink: true }} />
              </CustomToolbar>
            )}
          </CustomAppBar>
        </Box>
      </StyledToolbar>
    </StyledRoot>
  );
}
