module.exports = {
    purge: {
        enabled: true,
        content: ["./src/**/*.{html,js}"],
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
                mainColor: '#F8AFA6',
                titleColor: '#E56997'
            }
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
