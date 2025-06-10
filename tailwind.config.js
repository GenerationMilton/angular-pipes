module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugings: [
        require( 'daisyui' ),
    ],
    daisyui: {
        themes: [ 'dracula']
    },
}