import viteImagemin from 'vite-plugin-imagemin';

export default () => {
    return {
        plugins: [
            viteImagemin({
                mozjpeg: {
                    quality: 10,
                },
            }),
        ],
    };
};