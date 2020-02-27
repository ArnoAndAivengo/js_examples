const vegetable = ['Brassica oleracea', 'Pisum sativumt',  'Solanum lycopersicum', 'Capsicum annuum', 'Capsicum annuum'];

vegetable.some( vegetable => {
    if( vegetable === 'Capsicum annuum') {
        console.log('Capsicum annuum');
        return true;
    }
});

const numbers = [8, 0, 99, 123, 7];
const result = numbers.some( number => number > 10);