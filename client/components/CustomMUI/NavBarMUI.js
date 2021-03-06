import {makeStyles} from '@material-ui/core/styles'

export const navStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main
  },
  menuButton: {
    borderRadius: '1px',
    color: theme.palette.primary,
    height: 40,
    padding: '1em',
    margin: '10px',
    boxShadow: '0px 3px #000000'
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
    alignSelf: 'flex-end',
    fontFamily: 'pinyon script',
    fontWeight: '300',
    padding: '.5em .5em',
    fontSize: '3rem'
  }
}))
