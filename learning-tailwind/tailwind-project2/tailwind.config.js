const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: false,
        content: [
            "index.html"
        ],
    },
    darkMode: 'class',
    theme: {
        debugScreens: {
            position: ['top', 'left'],
        },
        colors: {
            transparent: colors.transparent,
            current: colors.current,
            white: colors.white,
            black: colors.black,
            blue: colors.blue,
            yellow: colors.yellow,
            gray: colors.gray,
            cyan: colors.cyan,
            green: colors.lime,
            red: colors.rose,
            fuchsia: colors.fuchsia,
            indigo: colors.indigo,
            purple: colors.purple,
            rose: colors.rose,
            pink: colors.pink,
        },
        extend: {
            fontFamily: {
                headline: ['Montserrat-Thin']
            },
            colors: {
                mainColor: '#C2DDDC',
                titleColor: '#E56997'
            },
            spacing: {
                13: '3.5rem',
            }

        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
