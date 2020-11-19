import { makesStyles } from "@material-ui/core/styles";

export default makesStyles((theme)=>({
  title: {
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
      textDecoration: 'none',
  },
}));