import { createMuiTheme } from '@material-ui/core/styles';
import { whiteColor, infoColor } from '../../assets/jss/global';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        background: {
            default: whiteColor,
        },
        primary: {
            main: infoColor,
        },
    },
    typography: {
        fontFamily: [
            'Yu Gothic UI',
            'メイリオ',
            'Meiryo',
            'ヒラギノ角ゴ Pro W3',
            'Hiragino Kaku Gothic Pro',
            'Osaka',
            'MS PGothic',
            'ＭＳ Ｐゴシック',
            'sans-serif',
        ].join(','),
        fontWeight: 300,
        lineHeight: '1.42857143',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html, body, #root': {
                    height: '100%',
                },
                '#root': {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                },
            },
        },
    },
});

export default theme;
