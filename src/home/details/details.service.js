class DetailsService {
    constructor($q) {
        this.$q = $q;
    }

    getDirectlyRelated(selected) {
        return this.$q(resolve => {
            resolve(`${selected}X`);
        })
    }
}

DetailsService.$inject = ['$q'];

export default DetailsService;
