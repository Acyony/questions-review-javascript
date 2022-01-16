module.exports = {
    purge: {
        enabled: true,
        content: [
            "index.html"
        ],
    },
    darkMode: 'class',
    theme: {
        debugScreens: {
            position: ['top', 'left'],
        },
        extend: {
            fontFamily: {
                headline: ['Montserrat-Thin']
            },
            colors: {
                mainColor: '#C2DDDC',
                titleColor: '#E56997'
            }
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
