// ----------------------------------------------------------------------

export default function MUIDataTableToolbar(theme) {
  return {
    MUIDataTableToolbar: {
      styleOverrides: {
        icon: {
          color: theme.palette.primary.main,
          fontSize: 'large'
        }
      }
    }
  };
}
