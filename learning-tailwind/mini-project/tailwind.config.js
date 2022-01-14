module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        debugScreens: {
            position: ['top', 'left'],
        },
        extend: {
            fontFamily: {
                headline: ['Montserrat-Thin']
            },
            colors:{
                mainColor: '#F8AFA6'
            }
        },
    },
    plugins: [
        require('tailwindcss-debug-screens'),
    ],
}
