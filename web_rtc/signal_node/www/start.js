(async () => {
    try {
        const module = await import('./test.js');
        console.log('Module loaded:', module);
    } catch (error) {
        console.error('Error loading module:', error);
    }
})();