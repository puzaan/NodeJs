import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import { Image, DarkModeToggler } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    zIndex: 999,
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover svg': {
      color: theme.palette.primary.dark,
    },
    '&.menu-item--no-dropdown': {
      paddingRight: 0,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 350,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: theme.spacing(2),
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
}));

const Topbar = ({ themeMode, themeToggler, onSidebarOpen, pages, className, ...rest }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openedPopoverId, setOpenedPopoverId] = useState(null);

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const landings = pages.landings;
  const supportedPages = pages.pages;
  const account = pages.account;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding>
        <ListItem disableGutters>
          <Typography
            variant="body2"
            color="primary"
            className={classes.menuGroupTitle}
          >
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body1"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={handleClose}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };

  const SupportedPages = () => {
    const {
      career,
      
    } = supportedPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={career} />
        </div>
      </div>
    );
  };

  const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <MenuGroup item={settings} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={signup} />
          <MenuGroup item={signin} />
        </div>
        <div className={classes.menuItem}>
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  };

  const renderPages = id => {
    if (id === 'landing-pages') {
      return <LandingPages />;
    }
    if (id === 'supported-pages') {
      return <SupportedPages />;
    }
    if (id === 'account') {
      return <AccountPages />;
    }
  };

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="Achievers Group">
          <Image
            className={classes.logoImage}
            src={themeMode === 'light' ?  'data:image/svg+xml,%3Csvg%20width%3D%22186%22%20height%3D%2267%22%20viewBox%3D%220%200%20186%2067%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_d)%22%3E%0A%3Crect%20x%3D%224%22%20width%3D%22178%22%20height%3D%2259%22%20fill%3D%22url(%23pattern0)%22%2F%3E%0A%3Crect%20x%3D%224%22%20width%3D%22178%22%20height%3D%2259%22%20fill%3D%22url(%23pattern1)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22186%22%20height%3D%2267%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cpattern%20id%3D%22pattern0%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%0A%3Cuse%20xlink%3Ahref%3D%22%23image0%22%20transform%3D%22translate(0%20-0.00282486)%20scale(0.00564972%200.0170449)%22%2F%3E%0A%3C%2Fpattern%3E%0A%3Cpattern%20id%3D%22pattern1%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%0A%3Cuse%20xlink%3Ahref%3D%22%23image0%22%20transform%3D%22translate(0%20-0.00282486)%20scale(0.00564972%200.0170449)%22%2F%3E%0A%3C%2Fpattern%3E%0A%3Cimage%20id%3D%22image0%22%20width%3D%22177%22%20height%3D%2259%22%20xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAALEAAAA7CAQAAACeC6PwAAATK0lEQVR42u2ceXiV1bXGf%2FtkJAEDAYQoIZF5FAwCBUEZFAQRh1ZRi1atV20t9hZ9qtXSWuW2tyq9VW6xgoppUay9aEW0hToAggOTgCJT0EAEkkBCgIwk57z94%2Bzs850hE7TPc5%2Bn2ecPvnO%2Bvff37bXXWvtd71oBWtv%2F36ZUnd0qhaab7wzG9mW6WiX4rxOxYABTaNMqwn%2BdFicwieGc0yrCplp8C3XXkEQaHYAShtCJvqokg2LKqCRgWuV5JiIWpDOAKeTQnQ78km1k0YbJHOUlDAfZySptocD4W4V6On43Tj10n9arTAFJUoUm6gEFJK1RlrYo2Kq1V09plJJbJdZC16Bs%2FUq7VadQ26e%2Bek2SVKABelbeVqw%2FaYwSWyXXLEchSOFa7mcQcWE3NuEjB4Cu5LCa2z3zdOZ6xrFYT3OoZb5Z0IEUwM9RUxezRyIdOYcu1HCIoxwzdaBU2gNw3JTbXkl0xACVHMPQiUSglqME7Pze5qeOJACqKPW%2Br%2BLpZFd9nLYR64cKU%2BaeE2w1lFNj1MIlq5sW6KQim18%2F1BRV2m%2FzNUhfR%2FWp01qNV1yLntdOLylPedqqETHuJutiPa9dKlG1KnRY2%2FS0RilBNyhPecrTLa7ncH2mPOXpCfnURkuVpzy9ofby6XHbN%2FRZowe1R3nK06s6K%2Bx5w7VVecrTZl2uNVHj5nqek6c87dVWvaXb1bllDmK41oa5B%2BmUvtISfV%2BZetJ6ZWmzztFV%2Bh9tVkWEmA%2FptpY4DI1RmSQpoEdlojb7f1UatZHblaU77fUs13usfZNc%2BZSitZKkLUqXT7lRM%2BRrmg5Lkk5oQtjq59gVvqWByo8a96znOV75vKUezcTFMozmBcZ6DKSaj7ify7iNBRxjuDORbM4xbzCbqdzIMo56JsngN%2FyguYef4phOUI8MV3vxtg%2ByWMD36BAxJMD7HDxjV7mbVQC0Y7JC0ujElRighj9R3sQM5RRwAgEJXM6DkWoV34CAR7GQAZ7F7GQeb3As6GuUwXnuXhpjtMmIIi1nFSO4j0nUi7U9vyCgBeZUM5bajavctvVhnF6q%2F%2BJP4wmuwAeIYj5iH1VkMopEnjd1pxHCn%2BJp9trrkxxmKdfQDpjGfL62mzqSgQDsZKVbzV6epn4lOz3zLedhMvkOt5CAjwl0oaBpH9zfAbEgGMtV35DpGnSjTnnuv6oEz9j2%2Bk9resFWohvka4bfv1u1kgLWPJerjbtzs6qsf%2F%2BTcpRkYWSWxiseTsNRVGhs2LPTtFqSVKUZskedXrSnzkPyKcs6irUKOyzdc54FUJb2SpKOaXjTjqIjcxnqvpXxC2aZ3aGzMmAYTYKn%2F%2Fl0DYnflDGfmXxKff90fsXoJnUtjeuIBw6yAYDR7g3SuNXq0d%2B512wxNQDGb%2Fab92Pjjha3EyyhDkjmBvuk3owH4CBvmEAzZzlOWb0ImnAUiucu64cASvgJuRGGns43wr53Z6DXNIxf7%2FIfLOIC560fZQZHGn47A8MI7v2HrOQCEknnWm0wfqAHQ%2BxWP2mKGlniAE2xVwNpHMnEMVJt7XWB%2BdxI77GfnsBoBrJZhsvoBsA77PaM68Ak1VjT2mYOh0nNxzCyrMQKmzLYMR4zP6FZSojqM1wlYedoQA8oep4R2uE5aR9sDMAp3oYvlbpG5%2BhzSdIuZQJoqqolSZvUIebYekdRq2r7qbG%2FNIwoalzf31m385RdyUPyKU1rJEnlmmZdQL51G%2FWjynW9x1Hs0DP6g76yM%2BRGHneRjiKV2XSx13U8wyJTGxUgjLFgP6SEoyNJTQMbuY8ix8rdbY%2BP2C2TCfZ0%2F4giViAgm0sUPDKDllZJTRNBVJL9NA0UE13f%2BKDdsZSjgOFa0hnE%2BQBs5oMIWdWPSg6T2wDu5mayAfExv4o83H0R4hvPROck3meeqY5BYo6O2pih0aSmEe%2BwgFrnTO5QfINR3WSyAViHj7PZRCWQxE2kAqV2jrOiIrPwVkaB%2FRSjJky12PU9Zn%2FbznqbZhjGN0kD6ljKibBxNXztxlWGL8DGhwu4mV2NB9Ap3EZ9jFPMXIpjvGAGg6N%2B60xf9kUJuU7PMpGLrVp%2FkxfYGnPJ7Zlh3%2BM6LrM6BjCKHD7gECdJBnpxiZY1EpI%2FRa69GsHiRlMF1dxrD1U4af%2Bt5I9MJpm2zCYLA%2BTx14hweDu3UmWvvSfL53QiAwiwkXzTBCU%2FiHFuZ97k45gL6k93hy%2FrQXkbJilW5yLmU2Gvu3J5rD4%2BGGb5DuhCX%2FpynhV4e65VHPv42LqwB%2BnViHqWmK%2BCHw41qcWH6vuao86xrWEbAJfSB4BVUei2mnw3zhuObOC%2FqARSeYyxakzEMlzlIqgSnosVMAiGOij%2BJSvdjRzaxkQKf3f64mM6MQ4sfzw30a4BYUzlXCp4wepaDs8xXR2VqHi10yjN%2FKfSpiWsIAD4MEAJrzYbrvl5kcX4gUzmMViNOIq2jPX44dhG3YaLXJ8v%2BBtXW4DUj158GhMtvsIYi6L708dqZDjkuwQDfM1vndnClUwDshlPLivJ5W7i8XEJw9nFQarJoD%2BwP%2BJAal5L5H7NdIJ90pQGzw4t404y7e%2FrY6ymN%2FNVj8Q%2FMEs8qlShuQxgHIYLeIJbG4Rt6q%2BDDmTdGtvW1EsHHJd2n%2FqpwH27pYERvbXfMXSxwN0sSzXND8E6g6ZaQPRXpRrUWc85KOYFi39U0hnTQN1DVKkWuXj2W6E3daCtIRroWRAart1WEr8P5%2Bx8HqPOob4uopB1JvbZ35%2FOLiZay9fukItjBLHPogNscs8aRiTK7sB1xAHlLA%2BlpASfsB2Ab5AjzBHu52fsj%2FCxomcorjzzZk45DLGV1S3jug1s4qeUAXHcyuxgmB%2FhKALQy337OiaWAMOlzhMfYD8VrOES%2B30UnWJGcDV8yrWO6kkmHGd35SQfAF%2B6jQi2UpZSC4heWmdkyvQkbzGDiXQjGT9V7OHvvE4BhdZZHPIExOtJBvYAAXuI7aEOsTvKsRSGoe0NLGEw4mVKwo65jRyIGLfX85y91tEspx%2BXYoBhDI5Yj2VIFzkzeDl2LKZ2Nu6RpN%2FLJzTZUfPHYhHpAJqhWtvngHpHZQVTlKIUJSs64gveSZL3HTvoPA1WP2UqReH94kPBrP0lUQgl2%2FmNUKK9E%2Fq08aIcoSSlKCV89TJqEzUu0fucqHdO8cbE8Z6QorNnb2PnkXvR30V%2BHxIwKI8jFsS1Y6Q2xDSvLzlpsUR7Ojka0fIZYSA%2BDFVTFyOcOeaChQb7mUDYnNVhNOapJsw9RgRp5NBwY89p4J29Ik6ko9vMggaisMGkO8T7iQma5ztc5LBBXMytKWS79ZlVEW7i3yw9muxBp9UxtdHHSMdh7aNQKRhgjoukTpGs2DTfbfZYFYf%2FnUVc6zGHeMWCB14S8z2y%2BW9SW%2Fi0au63SCG21%2FaRTgpwguOmxekMQRIdSaCWEmr%2BuZVJiqcTSdRQYmpPX8Q1zsuZBirVznPppGo2MY7JtHQd5Q3FcYZAKuOZzoWkIwrZpLdZayqCeJVZNqit5xU%2B4d2IlLyhO9OZwEASqeEL3tVyCoLb1JaTMxkbTCiZvfXYmWDwsdSs1hhuDtupAlazxTiFUwJjuInRpFLJZ1rH2%2BSfVs1TGDB%2FPppNELrX5aMPqL9eUstbsQY3wFL3UK5OhPU9oSXqKUApej9inmq9o%2BEepJGg67UtLFteq62aETzXO2PZaE9CyQUs3wfd4bLpoWTYQnWzPZP0IxWHlS%2Fs0eSWSNbnSYGGcgrZMZiqBC52nngrfkacxj4WxMoYG%2BjFYmZGaHg7buJ5m32IbElM5Jl6m1IS9%2FAM54flOuIZwgLuiE4oNKul810eUwoIruHndA7LmaRx%2FPQcBewhYEWeSXoUmOrKIA9EP5eM03j1Q45387TAWTxm2ZE6trCNOrK4iDRESdhbnGAe1VzIFNoCFzCFBSDDFfzcJgnK2EkFbelPGpDOYxTq9WaX8r%2FO38hiPMOJx8c1LGYtadxJGlDDavbThiH04y9sPi0RG7SNYxa4dSMnmO4OIzqzHEL4gCM80ExPfDb3kmb9wefRuFNwrU3v1%2FA7HqcYkcLl%2FJp9zKbU07WKZWaH2vAE9wA%2BBgkD3XiY9oDYyBw%2B5hRJfIO5XAh05CE2NLvWYpNZKMjgJcYDZ9GXtXQiGCx9zE2U4qMLE9nUsiMvPixEOGBF3IYpetub35VhmAudD7LLFPFFyNf4%2B7p88XFWezMlgqtdoqeS92LsSirftm5pJY%2BaoAlW6nWKKGR%2FdH9Tpe3OZIMZkyE26L%2FXYvVqraSSV%2BkKDOUyXmwJ16DD7GA8YEgFfNau25BKqQlwmCUtNV1fWGomZACTPMUoQUGEypG2hkdYggt5kSUsYQm5HncS9Jrfdn59f2hbwrS8t0UbC8zxUERl1pt9JjZ8yraXFQaSmGZ98JtsMiHv%2FhFvWhUaVdyyvwRIsS5QVABH%2BRKAYbzMt9RJp4EFPVoc5%2Ff%2FmRsstZ7Ft%2FWoh5TuSi9HQK8KD0MFGzlqD6aODJJ3qUMJlYWsjBl49LSHibULtY%2Bo0vjSsXmJDFN3RnKHdRsfAG2t%2B%2FLzoRdI%2BeoCH%2FJdfMCgWMmCmC1bY2nHVVxuPf8u4BjzGUR74hhDDp%2BTq2UUnQHmVrplVyVpj%2FqEVF1XOLrnqC6MQQ%2BtduOWeGqDUvQH93uZxsd85k0WbG1QewDlqEg1ns88B9oCqlK1BVh1%2BoPOAmXa5Hq5Lo6Yd5KtIdqljGaCtlOqsAUFUkBLgrU%2FStT3PWUPtXpHI1qmy74ICjHXHUg9%2BVF9gZHfeOrUdrInRkixxl0PqecxZJjO1e73NS7FFN6qCNgAPsGqfgKJnk%2Bcx1Emk4QBipnPA%2BYEUGffNz5KV%2Btrgmtobs1QAik2MVvDch4xlZZFXsh15Nq8djwTWexyjS0XsYE32OLuzGSGrUZrywUOP2z1pH9CvuIjF353p591H%2F142GHdMp6JBdiAfbZQqYut3yhjBa%2FxGuuiKKUq52hWM8dW45y0HHUivSOcVx%2B7Zfs8KNY0ASk%2FZQsfsYzvcht5If7MrONOruQ5u%2FIBzD6DrKGMZnqKtvfrUhnQUBff1MZOIClTu5yJ%2FUQIZWi5i5oCWqgG0u7qZEsU6%2FSI4kBGCUpQgn5oHchPnaMo0g9sIqtMdwX5YcVpnn3GW950jrpovX3yHNVHd7W63kWTP7Gj7vI4iseUrnS1U2IYQ%2B2oLSXrx7Zc8ktlnq6jwIjXWEbAaeRTjJJhqCMxCxtI%2FReywylQN%2BLoym%2BY6rRmN7%2BJzbkCpawiAMRxF1cozsjUUksPbiYOqOATj2qu4VHKgTQeYbIMGD9vWiuYwH1Bbw5K48c2%2BizhnTSsHsdzpYLEVWcm2Rm9B3eVKTWl5qQ55VlhNguZGlQPXzWfWPbZd0Z%2FdSvUR596YvJ1yvCwF%2B%2BrbQOjHlJA0kktUray9IqHMTiuWxo7INTbVb8d1M80XEN0pzbJb9OjaU6LCzVQbfRbO%2FMuDVNQt16wfau1QrP0Hd2rFfbY8utpJXqKdSu0WN%2FTLK2w34uV49Hih6LeLEFPqk7H9LJm6Hxdob%2FanpvU6cyIO6NJLhctrdJ5%2BswZ%2FM8aEpYu1mG9p6t1liboQ7vo4MJ%2F0bjnktE0HXJZ6lIVu%2B35ShcJr4hBGVpp765WNhjUU%2Bs9RI7fc7VC5wAoQxtjkFIB%2FZ9SGxaxQWNU5AoNjzhM5dccnSlXqjjdqqP2NX6pkTpmJ6%2FU5Q3RuGqniUrXuZrjxBX0fwvrzbfR592oryL4Lr%2B%2B0DT5iBQxyrHpdL9eVgcQGqx3XX5QTih%2FUbbqN%2FEKV44QEvAOawcNiNiHLtKnUfP69W6oMOBMhJyg23VUUrkmekjMXcpsUMTx6qn7tSXslU7pBXVW8zb1Ai1Svq2WqNBOPV5fma9kvaJ85WtzMLkqo29qt%2FKVr726R3EED9fZ2qJjCkgKqFQf6i6vMStOY%2FWmDtm3q9EBLdZgO%2F8Nyle%2B8nVPDPvqrh%2FqEx2xEijXLs1V95ZlC0zDQuZG5lLNVB7nGvvjMn7ABHZykHJO4Uf4SCSZzgxjHJfRPYzzqGIhj1HSXJtSIpkMpSNiP59TXM%2BRyHA2yYCfoiABowS6WNRbzZFgDCof6fShH%2FHU8gV7KAvPmygYCZ5PO%2BAo2ymoz4yorWVmyszxWG6MDmQxkBQC7OcLilpam9%2FYMRTHOEbwZ962mFM8zEZeo4ZCjnCIEqo4mww6kkGXqCKUg8xjkSmntTWBLhI0xQai0nFdol9HZQhitRqt0piW%2FWHjv0N6NDa1V8fIsPqfoU2yxAF28yxLOWJa%2F8uVpkUMpBIib7bQPoKqjOYqPuNV3sLP7bzpgpFWETfazqWHIzHfw88W%2FHS2ZEyo1XKSPWxmOdtox9XcTk%2BKtKP1vwBpUsSCUa72sZTtfMb1dCebTLpxNnEYApyggEPsJ48T%2BJjNHfQgDriUlzjVKuCmtNhwoeuxkzwDVexmNxFVqPXaKpFAL%2Ft1KOlN%2FAVaq4gBw3JbPAr7vH9uHdsFGOkVCi1FUtFQQWBra23%2F5PYPWAowLA8YHb0AAAAASUVORK5CYII%3D%22%2F%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A':'data:image/svg+xml,%3Csvg%20width%3D%22186%22%20height%3D%2267%22%20viewBox%3D%220%200%20186%2067%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%3Cg%20filter%3D%22url(%23filter0_d)%22%3E%0A%3Crect%20x%3D%224%22%20width%3D%22178%22%20height%3D%2259%22%20fill%3D%22url(%23pattern0)%22%2F%3E%0A%3Crect%20x%3D%224%22%20width%3D%22178%22%20height%3D%2259%22%20fill%3D%22url(%23pattern1)%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%22186%22%20height%3D%2267%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%0A%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%0A%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%0A%3CfeOffset%20dy%3D%224%22%2F%3E%0A%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%0A%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.25%200%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%0A%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%0A%3C%2Ffilter%3E%0A%3Cpattern%20id%3D%22pattern0%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%0A%3Cuse%20xlink%3Ahref%3D%22%23image0%22%20transform%3D%22translate(0%20-0.00282486)%20scale(0.00564972%200.0170449)%22%2F%3E%0A%3C%2Fpattern%3E%0A%3Cpattern%20id%3D%22pattern1%22%20patternContentUnits%3D%22objectBoundingBox%22%20width%3D%221%22%20height%3D%221%22%3E%0A%3Cuse%20xlink%3Ahref%3D%22%23image0%22%20transform%3D%22translate(0%20-0.00282486)%20scale(0.00564972%200.0170449)%22%2F%3E%0A%3C%2Fpattern%3E%0A%3Cimage%20id%3D%22image0%22%20width%3D%22177%22%20height%3D%2259%22%20xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAALEAAAA7CAQAAACeC6PwAAATK0lEQVR42u2ceXiV1bXGf%2FtkJAEDAYQoIZF5FAwCBUEZFAQRh1ZRi1atV20t9hZ9qtXSWuW2tyq9VW6xgoppUay9aEW0hToAggOTgCJT0EAEkkBCgIwk57z94%2Bzs850hE7TPc5%2Bn2ecPvnO%2Bvff37bXXWvtd71oBWtv%2F36ZUnd0qhaab7wzG9mW6WiX4rxOxYABTaNMqwn%2BdFicwieGc0yrCplp8C3XXkEQaHYAShtCJvqokg2LKqCRgWuV5JiIWpDOAKeTQnQ78km1k0YbJHOUlDAfZySptocD4W4V6On43Tj10n9arTAFJUoUm6gEFJK1RlrYo2Kq1V09plJJbJdZC16Bs%2FUq7VadQ26e%2Bek2SVKABelbeVqw%2FaYwSWyXXLEchSOFa7mcQcWE3NuEjB4Cu5LCa2z3zdOZ6xrFYT3OoZb5Z0IEUwM9RUxezRyIdOYcu1HCIoxwzdaBU2gNw3JTbXkl0xACVHMPQiUSglqME7Pze5qeOJACqKPW%2Br%2BLpZFd9nLYR64cKU%2BaeE2w1lFNj1MIlq5sW6KQim18%2F1BRV2m%2FzNUhfR%2FWp01qNV1yLntdOLylPedqqETHuJutiPa9dKlG1KnRY2%2FS0RilBNyhPecrTLa7ncH2mPOXpCfnURkuVpzy9ofby6XHbN%2FRZowe1R3nK06s6K%2Bx5w7VVecrTZl2uNVHj5nqek6c87dVWvaXb1bllDmK41oa5B%2BmUvtISfV%2BZetJ6ZWmzztFV%2Bh9tVkWEmA%2FptpY4DI1RmSQpoEdlojb7f1UatZHblaU77fUs13usfZNc%2BZSitZKkLUqXT7lRM%2BRrmg5Lkk5oQtjq59gVvqWByo8a96znOV75vKUezcTFMozmBcZ6DKSaj7ify7iNBRxjuDORbM4xbzCbqdzIMo56JsngN%2FyguYef4phOUI8MV3vxtg%2ByWMD36BAxJMD7HDxjV7mbVQC0Y7JC0ujElRighj9R3sQM5RRwAgEJXM6DkWoV34CAR7GQAZ7F7GQeb3As6GuUwXnuXhpjtMmIIi1nFSO4j0nUi7U9vyCgBeZUM5bajavctvVhnF6q%2F%2BJP4wmuwAeIYj5iH1VkMopEnjd1pxHCn%2BJp9trrkxxmKdfQDpjGfL62mzqSgQDsZKVbzV6epn4lOz3zLedhMvkOt5CAjwl0oaBpH9zfAbEgGMtV35DpGnSjTnnuv6oEz9j2%2Bk9resFWohvka4bfv1u1kgLWPJerjbtzs6qsf%2F%2BTcpRkYWSWxiseTsNRVGhs2LPTtFqSVKUZskedXrSnzkPyKcs6irUKOyzdc54FUJb2SpKOaXjTjqIjcxnqvpXxC2aZ3aGzMmAYTYKn%2F%2Fl0DYnflDGfmXxKff90fsXoJnUtjeuIBw6yAYDR7g3SuNXq0d%2B512wxNQDGb%2Fab92Pjjha3EyyhDkjmBvuk3owH4CBvmEAzZzlOWb0ImnAUiucu64cASvgJuRGGns43wr53Z6DXNIxf7%2FIfLOIC560fZQZHGn47A8MI7v2HrOQCEknnWm0wfqAHQ%2BxWP2mKGlniAE2xVwNpHMnEMVJt7XWB%2BdxI77GfnsBoBrJZhsvoBsA77PaM68Ak1VjT2mYOh0nNxzCyrMQKmzLYMR4zP6FZSojqM1wlYedoQA8oep4R2uE5aR9sDMAp3oYvlbpG5%2BhzSdIuZQJoqqolSZvUIebYekdRq2r7qbG%2FNIwoalzf31m385RdyUPyKU1rJEnlmmZdQL51G%2FWjynW9x1Hs0DP6g76yM%2BRGHneRjiKV2XSx13U8wyJTGxUgjLFgP6SEoyNJTQMbuY8ix8rdbY%2BP2C2TCfZ0%2F4giViAgm0sUPDKDllZJTRNBVJL9NA0UE13f%2BKDdsZSjgOFa0hnE%2BQBs5oMIWdWPSg6T2wDu5mayAfExv4o83H0R4hvPROck3meeqY5BYo6O2pih0aSmEe%2BwgFrnTO5QfINR3WSyAViHj7PZRCWQxE2kAqV2jrOiIrPwVkaB%2FRSjJky12PU9Zn%2FbznqbZhjGN0kD6ljKibBxNXztxlWGL8DGhwu4mV2NB9Ap3EZ9jFPMXIpjvGAGg6N%2B60xf9kUJuU7PMpGLrVp%2FkxfYGnPJ7Zlh3%2BM6LrM6BjCKHD7gECdJBnpxiZY1EpI%2FRa69GsHiRlMF1dxrD1U4af%2Bt5I9MJpm2zCYLA%2BTx14hweDu3UmWvvSfL53QiAwiwkXzTBCU%2FiHFuZ97k45gL6k93hy%2FrQXkbJilW5yLmU2Gvu3J5rD4%2BGGb5DuhCX%2FpynhV4e65VHPv42LqwB%2BnViHqWmK%2BCHw41qcWH6vuao86xrWEbAJfSB4BVUei2mnw3zhuObOC%2FqARSeYyxakzEMlzlIqgSnosVMAiGOij%2BJSvdjRzaxkQKf3f64mM6MQ4sfzw30a4BYUzlXCp4wepaDs8xXR2VqHi10yjN%2FKfSpiWsIAD4MEAJrzYbrvl5kcX4gUzmMViNOIq2jPX44dhG3YaLXJ8v%2BBtXW4DUj158GhMtvsIYi6L708dqZDjkuwQDfM1vndnClUwDshlPLivJ5W7i8XEJw9nFQarJoD%2BwP%2BJAal5L5H7NdIJ90pQGzw4t404y7e%2FrY6ymN%2FNVj8Q%2FMEs8qlShuQxgHIYLeIJbG4Rt6q%2BDDmTdGtvW1EsHHJd2n%2FqpwH27pYERvbXfMXSxwN0sSzXND8E6g6ZaQPRXpRrUWc85KOYFi39U0hnTQN1DVKkWuXj2W6E3daCtIRroWRAart1WEr8P5%2Bx8HqPOob4uopB1JvbZ35%2FOLiZay9fukItjBLHPogNscs8aRiTK7sB1xAHlLA%2BlpASfsB2Ab5AjzBHu52fsj%2FCxomcorjzzZk45DLGV1S3jug1s4qeUAXHcyuxgmB%2FhKALQy337OiaWAMOlzhMfYD8VrOES%2B30UnWJGcDV8yrWO6kkmHGd35SQfAF%2B6jQi2UpZSC4heWmdkyvQkbzGDiXQjGT9V7OHvvE4BhdZZHPIExOtJBvYAAXuI7aEOsTvKsRSGoe0NLGEw4mVKwo65jRyIGLfX85y91tEspx%2BXYoBhDI5Yj2VIFzkzeDl2LKZ2Nu6RpN%2FLJzTZUfPHYhHpAJqhWtvngHpHZQVTlKIUJSs64gveSZL3HTvoPA1WP2UqReH94kPBrP0lUQgl2%2FmNUKK9E%2Fq08aIcoSSlKCV89TJqEzUu0fucqHdO8cbE8Z6QorNnb2PnkXvR30V%2BHxIwKI8jFsS1Y6Q2xDSvLzlpsUR7Ojka0fIZYSA%2BDFVTFyOcOeaChQb7mUDYnNVhNOapJsw9RgRp5NBwY89p4J29Ik6ko9vMggaisMGkO8T7iQma5ztc5LBBXMytKWS79ZlVEW7i3yw9muxBp9UxtdHHSMdh7aNQKRhgjoukTpGs2DTfbfZYFYf%2FnUVc6zGHeMWCB14S8z2y%2BW9SW%2Fi0au63SCG21%2FaRTgpwguOmxekMQRIdSaCWEmr%2BuZVJiqcTSdRQYmpPX8Q1zsuZBirVznPppGo2MY7JtHQd5Q3FcYZAKuOZzoWkIwrZpLdZayqCeJVZNqit5xU%2B4d2IlLyhO9OZwEASqeEL3tVyCoLb1JaTMxkbTCiZvfXYmWDwsdSs1hhuDtupAlazxTiFUwJjuInRpFLJZ1rH2%2BSfVs1TGDB%2FPppNELrX5aMPqL9eUstbsQY3wFL3UK5OhPU9oSXqKUApej9inmq9o%2BEepJGg67UtLFteq62aETzXO2PZaE9CyQUs3wfd4bLpoWTYQnWzPZP0IxWHlS%2Fs0eSWSNbnSYGGcgrZMZiqBC52nngrfkacxj4WxMoYG%2BjFYmZGaHg7buJ5m32IbElM5Jl6m1IS9%2FAM54flOuIZwgLuiE4oNKul810eUwoIruHndA7LmaRx%2FPQcBewhYEWeSXoUmOrKIA9EP5eM03j1Q45387TAWTxm2ZE6trCNOrK4iDRESdhbnGAe1VzIFNoCFzCFBSDDFfzcJgnK2EkFbelPGpDOYxTq9WaX8r%2FO38hiPMOJx8c1LGYtadxJGlDDavbThiH04y9sPi0RG7SNYxa4dSMnmO4OIzqzHEL4gCM80ExPfDb3kmb9wefRuFNwrU3v1%2FA7HqcYkcLl%2FJp9zKbU07WKZWaH2vAE9wA%2BBgkD3XiY9oDYyBw%2B5hRJfIO5XAh05CE2NLvWYpNZKMjgJcYDZ9GXtXQiGCx9zE2U4qMLE9nUsiMvPixEOGBF3IYpetub35VhmAudD7LLFPFFyNf4%2B7p88XFWezMlgqtdoqeS92LsSirftm5pJY%2BaoAlW6nWKKGR%2FdH9Tpe3OZIMZkyE26L%2FXYvVqraSSV%2BkKDOUyXmwJ16DD7GA8YEgFfNau25BKqQlwmCUtNV1fWGomZACTPMUoQUGEypG2hkdYggt5kSUsYQm5HncS9Jrfdn59f2hbwrS8t0UbC8zxUERl1pt9JjZ8yraXFQaSmGZ98JtsMiHv%2FhFvWhUaVdyyvwRIsS5QVABH%2BRKAYbzMt9RJp4EFPVoc5%2Ff%2FmRsstZ7Ft%2FWoh5TuSi9HQK8KD0MFGzlqD6aODJJ3qUMJlYWsjBl49LSHibULtY%2Bo0vjSsXmJDFN3RnKHdRsfAG2t%2B%2FLzoRdI%2BeoCH%2FJdfMCgWMmCmC1bY2nHVVxuPf8u4BjzGUR74hhDDp%2BTq2UUnQHmVrplVyVpj%2FqEVF1XOLrnqC6MQQ%2BtduOWeGqDUvQH93uZxsd85k0WbG1QewDlqEg1ns88B9oCqlK1BVh1%2BoPOAmXa5Hq5Lo6Yd5KtIdqljGaCtlOqsAUFUkBLgrU%2FStT3PWUPtXpHI1qmy74ICjHXHUg9%2BVF9gZHfeOrUdrInRkixxl0PqecxZJjO1e73NS7FFN6qCNgAPsGqfgKJnk%2Bcx1Emk4QBipnPA%2BYEUGffNz5KV%2Btrgmtobs1QAik2MVvDch4xlZZFXsh15Nq8djwTWexyjS0XsYE32OLuzGSGrUZrywUOP2z1pH9CvuIjF353p591H%2F142GHdMp6JBdiAfbZQqYut3yhjBa%2FxGuuiKKUq52hWM8dW45y0HHUivSOcVx%2B7Zfs8KNY0ASk%2FZQsfsYzvcht5If7MrONOruQ5u%2FIBzD6DrKGMZnqKtvfrUhnQUBff1MZOIClTu5yJ%2FUQIZWi5i5oCWqgG0u7qZEsU6%2FSI4kBGCUpQgn5oHchPnaMo0g9sIqtMdwX5YcVpnn3GW950jrpovX3yHNVHd7W63kWTP7Gj7vI4iseUrnS1U2IYQ%2B2oLSXrx7Zc8ktlnq6jwIjXWEbAaeRTjJJhqCMxCxtI%2FReywylQN%2BLoym%2BY6rRmN7%2BJzbkCpawiAMRxF1cozsjUUksPbiYOqOATj2qu4VHKgTQeYbIMGD9vWiuYwH1Bbw5K48c2%2BizhnTSsHsdzpYLEVWcm2Rm9B3eVKTWl5qQ55VlhNguZGlQPXzWfWPbZd0Z%2FdSvUR596YvJ1yvCwF%2B%2BrbQOjHlJA0kktUray9IqHMTiuWxo7INTbVb8d1M80XEN0pzbJb9OjaU6LCzVQbfRbO%2FMuDVNQt16wfau1QrP0Hd2rFfbY8utpJXqKdSu0WN%2FTLK2w34uV49Hih6LeLEFPqk7H9LJm6Hxdob%2FanpvU6cyIO6NJLhctrdJ5%2BswZ%2FM8aEpYu1mG9p6t1liboQ7vo4MJ%2F0bjnktE0HXJZ6lIVu%2B35ShcJr4hBGVpp765WNhjUU%2Bs9RI7fc7VC5wAoQxtjkFIB%2FZ9SGxaxQWNU5AoNjzhM5dccnSlXqjjdqqP2NX6pkTpmJ6%2FU5Q3RuGqniUrXuZrjxBX0fwvrzbfR592oryL4Lr%2B%2B0DT5iBQxyrHpdL9eVgcQGqx3XX5QTih%2FUbbqN%2FEKV44QEvAOawcNiNiHLtKnUfP69W6oMOBMhJyg23VUUrkmekjMXcpsUMTx6qn7tSXslU7pBXVW8zb1Ai1Svq2WqNBOPV5fma9kvaJ85WtzMLkqo29qt%2FKVr726R3EED9fZ2qJjCkgKqFQf6i6vMStOY%2FWmDtm3q9EBLdZgO%2F8Nyle%2B8nVPDPvqrh%2FqEx2xEijXLs1V95ZlC0zDQuZG5lLNVB7nGvvjMn7ABHZykHJO4Uf4SCSZzgxjHJfRPYzzqGIhj1HSXJtSIpkMpSNiP59TXM%2BRyHA2yYCfoiABowS6WNRbzZFgDCof6fShH%2FHU8gV7KAvPmygYCZ5PO%2BAo2ymoz4yorWVmyszxWG6MDmQxkBQC7OcLilpam9%2FYMRTHOEbwZ962mFM8zEZeo4ZCjnCIEqo4mww6kkGXqCKUg8xjkSmntTWBLhI0xQai0nFdol9HZQhitRqt0piW%2FWHjv0N6NDa1V8fIsPqfoU2yxAF28yxLOWJa%2F8uVpkUMpBIib7bQPoKqjOYqPuNV3sLP7bzpgpFWETfazqWHIzHfw88W%2FHS2ZEyo1XKSPWxmOdtox9XcTk%2BKtKP1vwBpUsSCUa72sZTtfMb1dCebTLpxNnEYApyggEPsJ48T%2BJjNHfQgDriUlzjVKuCmtNhwoeuxkzwDVexmNxFVqPXaKpFAL%2Ft1KOlN%2FAVaq4gBw3JbPAr7vH9uHdsFGOkVCi1FUtFQQWBra23%2F5PYPWAowLA8YHb0AAAAASUVORK5CYII%3D%22%2F%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A' }
            alt="Achievers Group"
            lazy={false}
          />
        </a>
      </div>
      <div className={classes.flexGrow} />
      <Hidden smDown>
        <List disablePadding className={classes.navigationContainer}>
          {[landings, supportedPages, account].map((page, i) => (
            <div key={page.id}>
              <ListItem
                aria-describedby={page.id}
                onClick={e => handleClick(e, page.id)}
                className={clsx(
                  classes.listItem,
                  openedPopoverId === page.id ? classes.listItemActive : '',
                )}
              >
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(classes.listItemText, 'menu-item')}
                >
                  {page.title}
                </Typography>
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={
                      openedPopoverId === page.id ? classes.expandOpen : ''
                    }
                    fontSize="small"
                  />
                </ListItemIcon>
              </ListItem>
              <Popover
                elevation={1}
                id={page.id}
                open={openedPopoverId === page.id}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popover }}
              >
                <div>{renderPages(page.id)}</div>
              </Popover>
            </div>
          ))}
          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
          </ListItem>
          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <Button
              variant="outlined"
              component="a"
              href="/"
              className={classes.listItemButton}
            >
              Join-US
            </Button>
          </ListItem>
          <ListItem className={clsx(classes.listItem, 'menu-item--no-dropdown')}>
            <Button
              variant="contained"
              color="primary"
              component="a"
              target="blank"
              href="/"
              className={classes.listItemButton}
            >
              Hire Us
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <DarkModeToggler themeMode={themeMode} onClick={() => themeToggler()} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object.isRequired,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Topbar;
